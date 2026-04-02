// AI Fluency Learning System — Complete Application Logic
// Course map as core navigation, browse/deep-study dual modes, 6-layer lesson pages
// Bilingual support (Chinese/English)
(function () {
  'use strict';

  // ===== Merge data =====
  COURSE_DATA.lessons = COURSE_DATA.lessons.concat(LESSONS_PART2, LESSONS_PART3);

  // ===== State =====
  const S = {
    mode: 'browse',        // browse | study
    page: 'home',          // home | lesson | 4ds | goals | review
    lessonId: null,
    lang: 'en',            // en | zh  (default English)
    scrollPositions: {}
  };

  const $ = id => document.getElementById(id);
  const main = $('main');

  // ===== i18n helpers =====
  function t(key) { return (I18N[S.lang] && I18N[S.lang][key]) || key; }
  function d(obj, zhField, enField) {
    if (S.lang === 'en') return obj[enField] || obj[zhField];
    return obj[zhField] || obj[enField];
  }
  // For arrays
  function da(obj, zhField, enField) {
    if (S.lang === 'en') return obj[enField] || obj[zhField] || [];
    return obj[zhField] || obj[enField] || [];
  }

  // ===== Router =====
  const router = {
    go(page, data) {
      S.page = page;
      if (data && data.lesson) S.lessonId = data.lesson;
      render();
      main.scrollTo({ top: 0 });
      updateNavHighlight();
    }
  };
  window.router = router;

  // ===== Mode switch =====
  window.switchMode = function (mode) {
    S.mode = mode;
    document.querySelectorAll('.mode-btn').forEach(b =>
      b.classList.toggle('active', b.dataset.mode === mode));
    // Update mode button text
    document.querySelectorAll('.mode-btn').forEach(b => {
      if (b.dataset.mode === 'browse') b.textContent = t('modeBrowse');
      if (b.dataset.mode === 'study') b.textContent = t('modeStudy');
    });
    render();
  };

  // ===== Language switch =====
  window.switchLang = function (lang) {
    S.lang = lang;
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    document.querySelectorAll('.lang-btn').forEach(b =>
      b.classList.toggle('active', b.dataset.lang === lang));
    // Update all nav text
    updateNavText();
    render();
  };

  function updateNavText() {
    const brandEl = $('brandText');
    if (brandEl) brandEl.textContent = t('brandText');
    
    const links = document.querySelectorAll('#topnavLinks .nav-link');
    const keys = ['navHome', 'nav4ds', 'navGoals', 'navReview'];
    links.forEach((a, i) => { if (keys[i]) a.textContent = t(keys[i]); });

    // Update mode buttons
    document.querySelectorAll('.mode-btn').forEach(b => {
      if (b.dataset.mode === 'browse') b.textContent = t('modeBrowse');
      if (b.dataset.mode === 'study') b.textContent = t('modeStudy');
    });

    // Update search placeholder
    const searchInput = $('searchInput');
    if (searchInput) searchInput.placeholder = t('searchPlaceholder');
  }

  // ===== Nav highlight =====
  function updateNavHighlight() {
    document.querySelectorAll('.nav-link').forEach(a => {
      a.classList.toggle('active', a.dataset.page === S.page);
    });
  }

  // ===== Render dispatch =====
  function render() {
    switch (S.page) {
      case 'home': renderHome(); break;
      case 'lesson': renderLesson(); break;
      case '4ds': render4Ds(); break;
      case 'goals': renderGoals(); break;
      case 'review': renderReview(); break;
      default: renderHome();
    }
  }

  // ==========================================
  //  Home — Course Map + Overview + Entry
  // ==========================================
  function renderHome() {
    const lessons = COURSE_DATA.lessons;

    // XMind-style course map data
    const mapBranches = [
      {
        title: t('branchFoundation'),
        nodes: [
          { id: 'L1', icon: '📖', label: t('nodeL1'), hint: t('nodeL1Hint') },
          { id: 'L2A', icon: '💡', label: t('nodeL2A'), hint: t('nodeL2AHint') },
          { id: 'L2B', icon: '🧩', label: t('nodeL2B'), hint: t('nodeL2BHint') },
        ]
      },
      {
        title: t('branchTech'),
        nodes: [
          { id: 'L3A', icon: '🔬', label: t('nodeL3A'), hint: t('nodeL3AHint') },
          { id: 'L3B', icon: '⚖️', label: t('nodeL3B'), hint: t('nodeL3BHint') },
        ]
      },
      {
        title: t('branchDelegation'),
        nodes: [
          { id: 'L4', icon: '🧭', label: t('nodeL4'), hint: t('nodeL4Hint'), tag: 'D1', tagColor: 'var(--d1)' },
          { id: 'L5', icon: '📋', label: t('nodeL5'), hint: t('nodeL5Hint'), tag: t('tagPractice'), tagColor: 'var(--amber)' },
        ]
      },
      {
        title: t('branchDescription'),
        nodes: [
          { id: 'L6', icon: '📝', label: t('nodeL6'), hint: t('nodeL6Hint'), tag: 'D2', tagColor: 'var(--d2)' },
          { id: 'L7', icon: '⚡', label: t('nodeL7'), hint: t('nodeL7Hint'), tag: t('tagDeepDive'), tagColor: 'var(--cyan)' },
        ]
      },
      {
        title: t('branchDiscernment'),
        nodes: [
          { id: 'L8', icon: '🔍', label: t('nodeL8'), hint: t('nodeL8Hint'), tag: 'D3', tagColor: 'var(--d3)' },
          { id: 'L9', icon: '🔄', label: t('nodeL9'), hint: t('nodeL9Hint'), tag: t('tagPractice'), tagColor: 'var(--amber)' },
        ]
      },
      {
        title: t('branchDiligence'),
        nodes: [
          { id: 'L10', icon: '🔒', label: t('nodeL10'), hint: t('nodeL10Hint'), tag: 'D4', tagColor: 'var(--d4)' },
          { id: 'L11', icon: '🏁', label: t('nodeL11'), hint: t('nodeL11Hint') },
        ]
      },
    ];

    let html = `<div class="animate">`;

    // ===== Source banner =====
    html += `<div class="source-banner">
      <div class="source-badge">
        <span class="source-icon">🎓</span>
        <span class="source-text">${t('sourceBanner')}</span>
      </div>
    </div>`;

    // ===== Course Map =====
    html += `<div class="course-map">
      <div class="map-title">${t('courseMapTitle')}</div>
      <div class="map-subtitle">${t('courseMapSubtitle')}</div>
      <div class="map-tree">`;

    mapBranches.forEach(branch => {
      html += `<div class="map-branch">
        <div class="map-branch-title">${branch.title}</div>`;
      branch.nodes.forEach(n => {
        html += `<div class="map-node" onclick="router.go('lesson',{lesson:'${n.id}'})">
          <div class="map-node-icon">${n.icon}</div>
          <div class="map-node-body">
            <div class="map-node-label">${n.label}</div>
            <div class="map-node-hint">${n.hint}</div>
            ${n.tag ? `<span class="map-node-tag" style="background:${n.tagColor}22;color:${n.tagColor}">${n.tag}</span>` : ''}
          </div>
        </div>`;
      });
      html += `</div>`;
    });
    html += `</div></div>`;

    // ===== Entry cards =====
    html += `<div class="entry-cards mb-32">
      <div class="entry-card" onclick="router.go('4ds')">
        <div class="entry-card-icon">🧩</div>
        <div class="entry-card-title">${t('entry4dsTitle')}</div>
        <div class="entry-card-desc">${t('entry4dsDesc')}</div>
      </div>
      <div class="entry-card" onclick="router.go('goals')">
        <div class="entry-card-icon">🎯</div>
        <div class="entry-card-title">${t('entryGoalsTitle')}</div>
        <div class="entry-card-desc">${t('entryGoalsDesc')}</div>
      </div>
      <div class="entry-card" onclick="router.go('review')">
        <div class="entry-card-icon">📝</div>
        <div class="entry-card-title">${t('entryReviewTitle')}</div>
        <div class="entry-card-desc">${t('entryReviewDesc')}</div>
      </div>
    </div>`;

    // ===== All courses overview =====
    html += `<div class="section-title">${t('allCoursesTitle')}</div>
      <div class="section-subtitle">${t('allCoursesSubtitle')}</div>
      <div class="overview-grid">`;
    lessons.forEach(l => {
      const color = lessonColor(l);
      const title = S.lang === 'en' ? l.title : l.titleZh;
      const liner = d(l, 'oneLiner', 'oneLinerEn');
      html += `<div class="lesson-card" onclick="router.go('lesson',{lesson:'${l.id}'})">
        <div class="lesson-card-accent" style="background:${color}"></div>
        <div class="lesson-card-num" style="color:${color}">Lesson ${l.number}</div>
        <div class="lesson-card-title">${title}</div>
        <div class="lesson-card-liner">${liner}</div>
        <div class="lesson-card-meta"><span>${l.duration}</span></div>
      </div>`;
    });
    html += `</div></div>`;

    main.innerHTML = html;
  }

  // ==========================================
  //  Lesson Deep-Study / Browse Page
  // ==========================================
  function renderLesson() {
    const lesson = COURSE_DATA.lessons.find(l => l.id === S.lessonId);
    if (!lesson) { router.go('home'); return; }
    const color = lessonColor(lesson);
    const isBrowse = S.mode === 'browse';
    const title = S.lang === 'en' ? lesson.title : lesson.titleZh;
    const titleSub = S.lang === 'en' ? lesson.titleZh : lesson.title;

    let html = `<div class="lesson-page animate">`;

    // Breadcrumb
    html += `<div class="breadcrumb"><a onclick="router.go('home')">${t('breadcrumbHome')}</a> › Lesson ${lesson.number}</div>`;

    // Header
    html += `<div class="lesson-header">
      <div class="lesson-header-num" style="color:${color}">LESSON ${lesson.number}${isBrowse ? '' : ' · ' + t('deepStudyMode')}</div>
      <div class="lesson-header-title">${title}</div>
      <div class="lesson-header-sub">${titleSub} · ${lesson.duration}${lesson.position ? ' · ' + d(lesson, 'position', 'positionEn') : ''}</div>
    </div>`;

    const oneLiner = d(lesson, 'oneLiner', 'oneLinerEn');
    const coreGoal = d(lesson, 'coreGoal', 'coreGoalEn');
    const keyTakeaways = da(lesson, 'keyTakeaways', 'keyTakeawaysEn');

    if (isBrowse) {
      // ===== Browse mode: scan layer =====
      html += renderScanCard(t('oneLinerLabel'), oneLiner);
      html += renderScanCard(t('coreGoalLabel'), coreGoal);

      // Key terms
      if (lesson.keyTerms && lesson.keyTerms.length) {
        html += `<div class="scan-card">
          <div class="scan-card-label">${t('keyTermsLabel')}</div>
          <div class="scan-terms">${lesson.keyTerms.map(tm => {
            const termLabel = S.lang === 'en' ? `${tm.term}` : `${tm.term}（${tm.zh}）`;
            return `<span class="term-tag">${termLabel}</span>`;
          }).join('')}</div>
        </div>`;
      }

      // Key points
      html += `<div class="scan-card">
        <div class="scan-card-label">${t('keyPointsLabel')}</div>
        ${keyTakeaways.map(tk => `<div class="k-point">${tk}</div>`).join('')}
      </div>`;

      // Switch prompt
      html += `<div style="text-align:center;margin:28px 0">
        <button class="q-check-btn" onclick="switchMode('study')" style="padding:10px 28px;font-size:.9rem">${t('switchToStudy')}</button>
      </div>`;

    } else {
      // ===== Deep study mode: 6 layers =====

      // Layer 1: 30-sec overview
      html += makeLayer('layer-1', '1', t('layer1Title'), `
        <div class="scan-card" style="border:none;padding:0">
          <div style="margin-bottom:10px"><strong>${t('coreGoalInline')}</strong>${coreGoal}</div>
          <div style="margin-bottom:10px"><strong>${t('oneLinerInline')}</strong>${oneLiner}</div>
          ${lesson.position ? `<div style="margin-bottom:10px"><strong>${t('positionInline')}</strong>${d(lesson, 'position', 'positionEn')}</div>` : ''}
          ${lesson.keyTerms && lesson.keyTerms.length ? `
            <div class="scan-card-label" style="margin-top:12px">${t('keyTermsInline')}</div>
            <div class="scan-terms">${lesson.keyTerms.map(tm => {
              const termLabel = S.lang === 'en' ? `${tm.term}` : `${tm.term}（${tm.zh}）`;
              return `<span class="term-tag">${termLabel}</span>`;
            }).join('')}</div>
          ` : ''}
        </div>
      `, true);

      // Layer 2: Local structure map
      html += makeLayer('layer-2', '2', t('layer2Title'), buildLocalMap(lesson), true);

      // Layer 3: Full knowledge points
      html += makeLayer('layer-3', '3', t('layer3Title'), buildKnowledgeCards(lesson), true);

      // Layer 4: Key takeaways
      html += makeLayer('layer-4', '4', t('layer4Title'), `
        <div class="knowledge-cards">
          ${keyTakeaways.map(tk => `<div class="k-point">${tk}</div>`).join('')}
        </div>
      `, true);

      // Layer 5: Extended analysis (collapsed by default)
      const misconceptions = da(lesson, 'misconceptions', 'misconceptionsEn');
      const officeAuto = da(lesson, 'officeAutomation', 'officeAutomationEn');
      html += makeLayer('layer-5', '5', t('layer5Title'), `
        <div class="ext-badge">${t('extBadge')}</div>
        ${misconceptions && misconceptions.length ? `
          <div class="section-title" style="font-size:.95rem;margin-top:12px">${t('miscTitle')}</div>
          ${misconceptions.map(m => `
            <div class="misconception">
              <div class="misc-wrong"><span class="misc-icon">❌</span> ${m.wrong}</div>
              <div class="misc-correct"><span class="misc-icon">✅</span> ${m.correct}</div>
            </div>
          `).join('')}
        ` : ''}
        ${officeAuto && officeAuto.length ? `
          <div class="section-title" style="font-size:.95rem;margin-top:20px">${t('officeTitle')}</div>
          ${officeAuto.map(oa => `
            <div class="k-card" style="margin-bottom:10px">
              <div class="k-card-title">${oa.scenario}</div>
              <div class="k-point"><strong>${t('mappingLabel')}</strong>${oa.mapping}</div>
              <div class="k-point" style="color:var(--red)"><strong>${t('riskLabel')}</strong>${oa.risk}</div>
            </div>
          `).join('')}
        ` : ''}
      `, false);

      // Layer 6: Quiz
      html += makeLayer('layer-6', '6', t('layer6Title'), buildLessonQuiz(lesson), false);

      // Term glossary
      if (lesson.keyTerms && lesson.keyTerms.length) {
        html += `<div class="scan-card mt-16">
          <div class="scan-card-label">${t('termGlossary')}</div>
          ${lesson.keyTerms.map(tm => `
            <div style="display:grid;grid-template-columns:140px 90px 1fr;gap:10px;padding:8px 0;border-bottom:1px solid var(--border);font-size:.88rem">
              <div style="font-weight:600;color:var(--accent)">${tm.term}</div>
              <div style="color:var(--text-dim)">${tm.zh}</div>
              <div>${d(tm, 'def', 'defEn')}</div>
            </div>
          `).join('')}
        </div>`;
      }
    }

    // Prev/Next nav
    html += buildLessonNav(lesson);
    html += `</div>`;
    main.innerHTML = html;
  }

  // ===== Knowledge point cards grouped by sub-topic =====
  function buildKnowledgeCards(lesson) {
    const points = da(lesson, 'corePoints', 'corePointsEn');
    if (!points || !points.length) return `<p style="color:var(--text-dim)">${t('noContentYet')}</p>`;
    const cards = [];
    const chunkSize = 4;
    for (let i = 0; i < points.length; i += chunkSize) {
      cards.push(points.slice(i, i + chunkSize));
    }
    let html = '<div class="knowledge-cards">';
    cards.forEach((chunk, idx) => {
      html += `<div class="k-card">
        <div class="k-card-title">${t('pointPrefix')} ${idx + 1}</div>
        ${chunk.map(p => `<div class="k-point">${highlightTerms(p)}</div>`).join('')}
      </div>`;
    });
    html += '</div>';
    return html;
  }

  // ===== Highlight key terms =====
  function highlightTerms(text) {
    const terms = ['Delegation', 'Description', 'Discernment', 'Diligence',
      'automation', 'augmentation', 'agency',
      'product', 'process', 'performance',
      'problem awareness', 'platform awareness', 'task delegation',
      'creation diligence', 'transparency diligence', 'deployment diligence',
      'context window', 'hallucination', 'LLM', 'Transformer',
      'few-shot', 'chain-of-thought', 'effective', 'efficient', 'ethical', 'safe'];
    let result = text;
    terms.forEach(tm => {
      const re = new RegExp(`(${tm})`, 'gi');
      result = result.replace(re, '<span class="k-highlight">$1</span>');
    });
    return result;
  }

  // ===== Lesson local structure map =====
  function buildLocalMap(lesson) {
    const nodes = [];
    if (lesson.keyTerms) {
      lesson.keyTerms.forEach(tm => {
        const label = S.lang === 'en' ? tm.term : tm.term + '（' + tm.zh + '）';
        nodes.push(label);
      });
    }
    if (nodes.length === 0 && lesson.keyTakeaways) {
      const takeaways = da(lesson, 'keyTakeaways', 'keyTakeawaysEn');
      takeaways.forEach((_, i) => nodes.push(t('pointPrefix') + ' ' + (i + 1)));
    }
    return `<div class="local-map" style="border:none;padding:0">
      <div class="local-map-title">${t('localMapTitle')}</div>
      <div class="local-map-nodes">
        ${nodes.map(n => `<span class="lm-node">${n}</span>`).join('')}
      </div>
    </div>`;
  }

  // ===== Lesson quiz =====
  function buildLessonQuiz(lesson) {
    const qs = (typeof QUIZ_DATA !== 'undefined' ? QUIZ_DATA : [])
      .filter(q => q.relatedLesson === lesson.id);
    if (qs.length === 0) {
      const pqs = da(lesson, 'practiceQuestions', 'practiceQuestionsEn');
      if (pqs && pqs.length) {
        return `<div>
          <div style="font-size:.88rem;color:var(--text-dim);margin-bottom:12px">${t('quizPrompt')}</div>
          ${pqs.map((q, i) => `
            <div class="k-point"><strong>${i + 1}.</strong> ${q}</div>
          `).join('')}
        </div>`;
      }
      return `<p style="color:var(--text-dim)">${t('noQuizYet')}</p>`;
    }
    return renderQuizCards(qs);
  }

  // ===== Collapsible layer =====
  function makeLayer(cls, num, title, content, defaultOpen) {
    return `<div class="layer ${cls} ${defaultOpen ? 'open' : ''}">
      <div class="layer-head" onclick="this.parentElement.classList.toggle('open')">
        <span class="layer-num">${num}</span>
        <span class="layer-head-title">${title}</span>
        <span class="layer-chevron">▼</span>
      </div>
      <div class="layer-body"><div class="layer-content">${content}</div></div>
    </div>`;
  }

  // ===== Scan card =====
  function renderScanCard(label, text) {
    return `<div class="scan-card">
      <div class="scan-card-label">${label}</div>
      <div class="scan-card-text">${text}</div>
    </div>`;
  }

  // ===== Lesson prev/next nav =====
  function buildLessonNav(lesson) {
    const all = COURSE_DATA.lessons;
    const idx = all.findIndex(l => l.id === lesson.id);
    const prev = idx > 0 ? all[idx - 1] : null;
    const next = idx < all.length - 1 ? all[idx + 1] : null;
    let html = '<div class="lesson-nav">';
    if (prev) {
      const prevTitle = S.lang === 'en' ? prev.title : prev.titleZh;
      html += `<div class="lesson-nav-btn" onclick="router.go('lesson',{lesson:'${prev.id}'})">
        <div class="lesson-nav-btn-label">${t('prevLesson')}</div>
        <div class="lesson-nav-btn-title">L${prev.number} ${prevTitle}</div>
      </div>`;
    } else { html += '<div></div>'; }
    if (next) {
      const nextTitle = S.lang === 'en' ? next.title : next.titleZh;
      html += `<div class="lesson-nav-btn" onclick="router.go('lesson',{lesson:'${next.id}'})" style="text-align:right">
        <div class="lesson-nav-btn-label">${t('nextLesson')}</div>
        <div class="lesson-nav-btn-title">L${next.number} ${nextTitle}</div>
      </div>`;
    }
    html += '</div>';
    return html;
  }

  // ===== Lesson color =====
  function lessonColor(lesson) {
    const n = String(lesson.number);
    if (['1', '2A', '2B'].includes(n)) return '#818cf8';
    if (['3A', '3B'].includes(n)) return '#22d3ee';
    if (['4', '5'].includes(n)) return 'var(--d1)';
    if (['6', '7'].includes(n)) return 'var(--d2)';
    if (['8', '9'].includes(n)) return 'var(--d3)';
    if (n === '10') return 'var(--d4)';
    return '#a78bfa';
  }

  // ==========================================
  //  4Ds Page
  // ==========================================
  function render4Ds() {
    const ds = COURSE_DATA.fourDs;
    let html = `<div class="animate" style="max-width:var(--content-max);margin:0 auto">
      <div class="breadcrumb"><a onclick="router.go('home')">${t('breadcrumbHome')}</a> › ${t('fourDsBreadcrumb')}</div>
      <div class="map-title">${t('fourDsTitle')}</div>
      <div class="map-subtitle">${t('fourDsSubtitle')}</div>

      <div class="flow-row mb-32">
        <span class="flow-step" style="border-left:3px solid var(--d1)">${t('flowD1')}</span>
        <span class="flow-arrow">→</span>
        <span class="flow-step" style="border-left:3px solid var(--d2)">${t('flowD2')}</span>
        <span class="flow-arrow">→</span>
        <span class="flow-step" style="border-left:3px solid var(--d3)">${t('flowD3')}</span>
        <span class="flow-arrow">→</span>
        <span class="flow-step" style="border-left:3px solid var(--d4)">${t('flowD4')}</span>
      </div>`;

    ds.forEach(dd => {
      const def = d(dd, 'definition', 'definitionEn');
      const nameZh = dd.nameZh;
      const components = da(dd, 'components', 'componentsEn');
      const misconceptions = da(dd, 'commonMisconceptions', 'commonMisconceptionsEn');
      const officeMapping = da(dd, 'officeMapping', 'officeMappingEn');
      const olStr = d(dd, 'oneLiner', 'oneLinerEn');

      html += `<div class="d-section">
        <div class="d-header">
          <div class="d-icon">${dd.icon}</div>
          <div><span class="d-name">${dd.name}</span><span class="d-name-zh">（${nameZh}）</span></div>
        </div>
        <div class="d-def" style="border-color:${dd.color}">${def}</div>

        <div class="section-title" style="font-size:.92rem">${t('componentsLabel')}</div>
        ${components.map(c => `
          <div class="d-comp">
            <div class="d-comp-name">${c.name}</div>
            <div class="d-comp-desc">${c.desc}</div>
          </div>
        `).join('')}

        <div class="section-title" style="font-size:.92rem;margin-top:16px">${t('miscLabel')}</div>
        ${misconceptions.map(m => `
          <div class="misconception"><div class="misc-wrong"><span class="misc-icon">❌</span> ${m}</div></div>
        `).join('')}

        <div class="section-title" style="font-size:.92rem;margin-top:16px">${t('officeMappingLabel')}</div>
        ${officeMapping.map(m => `<div class="k-point">${m}</div>`).join('')}

        <div style="margin-top:12px">
          <span class="lm-node" onclick="router.go('lesson',{lesson:'${dd.lessonRef}'})">
            ${t('viewLessonFull').replace('{0}', dd.lessonRef.replace('L', ''))}
          </span>
        </div>
      </div>`;
    });

    html += `</div>`;
    main.innerHTML = html;
  }

  // ==========================================
  //  Four Goals Page
  // ==========================================
  function renderGoals() {
    const goals = COURSE_DATA.fourGoals;
    const goalColors = { effective: 'var(--amber)', efficient: '#3b82f6', ethical: 'var(--purple)', safe: 'var(--red)' };

    let html = `<div class="animate" style="max-width:var(--content-max);margin:0 auto">
      <div class="breadcrumb"><a onclick="router.go('home')">${t('breadcrumbHome')}</a> › ${t('goalsBreadcrumb')}</div>
      <div class="map-title">${t('goalsTitle')}</div>
      <div class="map-subtitle">${t('goalsSubtitle')}</div>

      <div class="scan-card mb-24" style="background:linear-gradient(135deg,rgba(129,140,248,.05),rgba(74,222,128,.03))">
        <div class="scan-card-label">${t('goalsRelation')}</div>
        <div class="scan-card-text">
          ${t('goalsRelText1')}<br>
          ${t('goalsRelText2')}<br><br>
          ${t('goalsRelText3')}
        </div>
      </div>

      <div class="grid-2 mb-32">
        ${goals.map(g => `
          <div class="goal-card" style="border-top-color:${goalColors[g.id]}">
            <div class="goal-icon">${g.icon}</div>
            <div class="goal-name">${g.name}</div>
            <div class="goal-name-zh">${g.nameZh}</div>
            <div class="goal-desc">${d(g, 'detail', 'detailEn')}</div>
            <div class="goal-rel">${t('relatedDLabel')}${g.relatedDs.join(S.lang === 'zh' ? '、' : ', ')}</div>
          </div>
        `).join('')}
      </div>

      <div class="section-title">${t('caseTitle')}</div>
      <div class="scan-card">
        <div class="scan-card-text" style="line-height:2">
          ${t('caseEffective')}<br>
          ${t('caseEfficient')}<br>
          ${t('caseEthical')}<br>
          ${t('caseSafe')}
        </div>
      </div>
    </div>`;
    main.innerHTML = html;
  }

  // ==========================================
  //  Review / Self-Test Page
  // ==========================================
  function renderReview() {
    let html = `<div class="animate" style="max-width:var(--content-max);margin:0 auto">
      <div class="breadcrumb"><a onclick="router.go('home')">${t('breadcrumbHome')}</a> › ${t('reviewBreadcrumb')}</div>
      <div class="map-title">${t('reviewTitle')}</div>
      <div class="map-subtitle">${t('reviewSubtitle')}</div>`;

    // Review checklist
    if (typeof CROSS_LESSON_DATA !== 'undefined') {
      const checklist = da(CROSS_LESSON_DATA, 'reviewChecklist', 'reviewChecklistEn');
      html += `<div class="scan-card mb-24">
        <div class="scan-card-label">${t('reviewChecklist')}</div>
        ${checklist.map(c => `<div class="k-point">${c}</div>`).join('')}
      </div>`;

      // 12 principles
      const sections = da(CROSS_LESSON_DATA, 'sections', 'sectionsEn');
      const p12 = sections.find(s => s.principles);
      if (p12) {
        html += `<div class="scan-card mb-24">
          <div class="scan-card-label">📜 ${p12.title}</div>
          <ol style="padding-left:20px">
            ${p12.principles.map(p => `<li style="padding:6px 0;line-height:1.7">${p}</li>`).join('')}
          </ol>
        </div>`;
      }
    }

    // Quiz questions
    const questions = typeof QUIZ_DATA !== 'undefined' ? [...QUIZ_DATA].sort(() => Math.random() - .5) : [];
    if (questions.length) {
      html += `<div class="section-title mt-16">${t('quizTitle')}</div>
        <div class="quiz-block">${renderQuizCards(questions)}</div>`;
    }

    html += `</div>`;
    main.innerHTML = html;
  }

  // ===== Quiz card rendering =====
  function renderQuizCards(questions) {
    const typeLabels = {
      choice: t('typeChoice'),
      judgment: t('typeJudgment'),
      whichD: t('typeWhichD'),
      scenario: t('typeScenario')
    };
    const dColors = { delegation: 'var(--d1)', description: 'var(--d2)', discernment: 'var(--d3)', diligence: 'var(--d4)', all: 'var(--accent)' };
    let html = '';
    questions.forEach((q, idx) => {
      const typeLabel = typeLabels[q.type] || t('typeDefault');
      const dc = dColors[q.relatedD] || 'var(--accent)';
      const qText = d(q, 'question', 'questionEn');
      const qOptions = S.lang === 'en' ? (q.optionsEn || q.options) : q.options;
      const qExplanation = d(q, 'explanation', 'explanationEn');

      html += `<div class="q-card" id="qc-${q.id}">
        <span class="q-type-tag" style="background:${dc}22;color:${dc}">${typeLabel}</span>
        <span class="q-type-tag" style="background:var(--bg-hover);color:var(--text-faint);margin-left:4px">${q.relatedLesson}</span>
        <div class="q-text">${idx + 1}. ${qText}</div>
        <div class="q-options" id="qo-${q.id}">`;
      if (q.type === 'judgment') {
        html += `<div class="q-opt" data-v="true" onclick="window._qSel(${q.id},true)"><span class="q-radio"></span>${t('optTrue')}</div>
                 <div class="q-opt" data-v="false" onclick="window._qSel(${q.id},false)"><span class="q-radio"></span>${t('optFalse')}</div>`;
      } else {
        qOptions.forEach((o, oi) => {
          html += `<div class="q-opt" data-v="${oi}" onclick="window._qSel(${q.id},${oi})"><span class="q-radio"></span>${o}</div>`;
        });
      }
      html += `</div>
        <button class="q-check-btn" onclick="window._qChk(${q.id})">${t('checkAnswer')}</button>
        <div class="q-feedback" id="qf-${q.id}"></div>
      </div>`;
    });
    return html;
  }

  // Quiz interaction
  const _qState = {};
  window._qSel = function (qid, val) {
    _qState[qid] = val;
    const c = document.getElementById('qo-' + qid);
    if (!c) return;
    c.querySelectorAll('.q-opt').forEach(el => {
      el.classList.toggle('selected', String(el.dataset.v) === String(val));
    });
  };
  window._qChk = function (qid) {
    const q = (typeof QUIZ_DATA !== 'undefined' ? QUIZ_DATA : []).find(x => x.id === qid);
    if (!q || _qState[qid] === undefined) return;
    const sel = _qState[qid];
    const ok = (sel === q.answer);
    const fb = document.getElementById('qf-' + qid);
    const explanation = d(q, 'explanation', 'explanationEn');
    if (fb) {
      fb.className = `q-feedback show ${ok ? 'ok' : 'no'}`;
      fb.innerHTML = `${ok ? t('answerCorrect') : t('answerWrong')} ${explanation}`;
    }
    const c = document.getElementById('qo-' + qid);
    if (c) {
      c.querySelectorAll('.q-opt').forEach(el => {
        const v = q.type === 'judgment' ? (el.dataset.v === 'true') : Number(el.dataset.v);
        if (v === q.answer) el.classList.add('correct');
        else if (String(v) === String(sel) && v !== q.answer) el.classList.add('wrong');
      });
    }
  };

  // ==========================================
  //  Search
  // ==========================================
  function initSearch() {
    const input = $('searchInput');
    const dropdown = $('searchDropdown');
    if (!input) return;
    input.addEventListener('input', () => {
      const q = input.value.trim().toLowerCase();
      if (!q) { dropdown.classList.remove('show'); return; }
      const results = [];
      COURSE_DATA.lessons.forEach(l => {
        const hay = [l.title, l.titleZh, l.oneLiner, l.oneLinerEn || '', l.coreGoal, l.coreGoalEn || '', ...(l.corePoints || []), ...(l.corePointsEn || []), ...(l.keyTakeaways || [])].join(' ').toLowerCase();
        if (hay.includes(q)) {
          const title = S.lang === 'en' ? `L${l.number} ${l.title}` : `L${l.number} ${l.titleZh}`;
          const ctx = d(l, 'oneLiner', 'oneLinerEn');
          results.push({ title, ctx, action: () => router.go('lesson', { lesson: l.id }) });
        }
      });
      COURSE_DATA.fourDs.forEach(dd => {
        const hay = [dd.name, dd.nameZh, dd.definition, dd.definitionEn || '', dd.oneLiner, dd.oneLinerEn || ''].join(' ').toLowerCase();
        if (hay.includes(q)) {
          results.push({ title: `${dd.icon} ${dd.name}（${dd.nameZh}）`, ctx: d(dd, 'oneLiner', 'oneLinerEn'), action: () => router.go('4ds') });
        }
      });
      COURSE_DATA.lessons.forEach(l => {
        (l.keyTerms || []).forEach(tm => {
          if ([tm.term, tm.zh, tm.def, tm.defEn || ''].join(' ').toLowerCase().includes(q)) {
            const def = d(tm, 'def', 'defEn');
            results.push({ title: `${tm.term}（${tm.zh}）`, ctx: `${def} — L${l.number}`, action: () => router.go('lesson', { lesson: l.id }) });
          }
        });
      });
      if (results.length > 0) {
        dropdown.innerHTML = results.slice(0, 8).map((r, i) => `
          <div class="search-item" onclick="window._sClick(${i})">
            <div class="search-item-title">${r.title}</div>
            <div class="search-item-ctx">${r.ctx}</div>
          </div>
        `).join('');
        dropdown.classList.add('show');
        window._sResults = results;
      } else {
        dropdown.innerHTML = `<div class="search-item"><div class="search-item-title">${t('searchNoResult')}</div></div>`;
        dropdown.classList.add('show');
      }
    });
    document.addEventListener('click', e => {
      if (!e.target.closest('.search-wrap')) dropdown.classList.remove('show');
    });
  }
  window._sClick = function (i) {
    if (window._sResults && window._sResults[i]) {
      window._sResults[i].action();
      $('searchDropdown').classList.remove('show');
      $('searchInput').value = '';
    }
  };

  // ===== Init =====
  function init() {
    // Apply English data overlays
    if (typeof window._applyI18nData === 'function') {
      window._applyI18nData();
    }
    renderHome();
    initSearch();
  }
  init();
})();
