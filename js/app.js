// AI Fluency 学习系统 — 完整应用逻辑
// 以课程地图为核心导航，支持浏览/精读双模式，6层课程页
(function () {
  'use strict';

  // ===== 合并数据 =====
  COURSE_DATA.lessons = COURSE_DATA.lessons.concat(LESSONS_PART2, LESSONS_PART3);

  // ===== 状态 =====
  const S = {
    mode: 'browse',        // browse | study
    page: 'home',          // home | lesson | 4ds | goals | review
    lessonId: null,
    scrollPositions: {}
  };

  const $ = id => document.getElementById(id);
  const main = $('main');

  // ===== 路由 =====
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

  // ===== 模式切换 =====
  window.switchMode = function (mode) {
    S.mode = mode;
    document.querySelectorAll('.mode-btn').forEach(b =>
      b.classList.toggle('active', b.dataset.mode === mode));
    render();
  };

  // ===== 导航高亮 =====
  function updateNavHighlight() {
    document.querySelectorAll('.nav-link').forEach(a => {
      a.classList.toggle('active', a.dataset.page === S.page);
    });
  }

  // ===== 渲染调度 =====
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
  //  首页 — 课程地图 + 课程概览 + 入口
  // ==========================================
  function renderHome() {
    const lessons = COURSE_DATA.lessons;
    const ds = COURSE_DATA.fourDs;

    // XMind 风格课程地图数据
    const mapBranches = [
      {
        title: '基础模块',
        nodes: [
          { id: 'L1', icon: '📖', label: 'L1 AI 素养导论', hint: '框架与方法论总论' },
          { id: 'L2A', icon: '💡', label: 'L2A 为什么需要 AI 素养', hint: '三种互动模式' },
          { id: 'L2B', icon: '🧩', label: 'L2B 4D 框架', hint: '核心能力闭环' },
        ]
      },
      {
        title: '技术理解',
        nodes: [
          { id: 'L3A', icon: '🔬', label: 'L3A 生成式 AI 深入', hint: 'LLM / Transformer / 训练原理' },
          { id: 'L3B', icon: '⚖️', label: 'L3B 能力与局限', hint: '六大优势 + 六类限制' },
        ]
      },
      {
        title: 'Delegation 委派',
        nodes: [
          { id: 'L4', icon: '🧭', label: 'L4 深入 Delegation', hint: '问题认知 → 平台认知 → 任务委派', tag: 'D1', tagColor: 'var(--d1)' },
          { id: 'L5', icon: '📋', label: 'L5 项目规划练习', hint: '把 Delegation 变成项目计划', tag: '练习', tagColor: 'var(--amber)' },
        ]
      },
      {
        title: 'Description 描述',
        nodes: [
          { id: 'L6', icon: '📝', label: 'L6 深入 Description', hint: 'Product / Process / Performance', tag: 'D2', tagColor: 'var(--d2)' },
          { id: 'L7', icon: '⚡', label: 'L7 提示技巧深入', hint: '6 个基础技巧', tag: '深入', tagColor: 'var(--cyan)' },
        ]
      },
      {
        title: 'Discernment 辨别',
        nodes: [
          { id: 'L8', icon: '🔍', label: 'L8 深入 Discernment', hint: '结果 / 过程 / 互动判断', tag: 'D3', tagColor: 'var(--d3)' },
          { id: 'L9', icon: '🔄', label: 'L9 D-D 循环练习', hint: 'Description-Discernment 迭代', tag: '练习', tagColor: 'var(--amber)' },
        ]
      },
      {
        title: 'Diligence 审慎 + 总结',
        nodes: [
          { id: 'L10', icon: '🔒', label: 'L10 深入 Diligence', hint: '创建 / 透明 / 部署审慎', tag: 'D4', tagColor: 'var(--d4)' },
          { id: 'L11', icon: '🏁', label: 'L11 总结', hint: '长期习惯与行动' },
        ]
      },
    ];

    let html = `<div class="animate">`;

    // ===== 课程地图 =====
    html += `<div class="course-map">
      <div class="map-title">🗺️ 课程地图</div>
      <div class="map-subtitle">点击任意节点进入对应课程精读页面。课程按「基础 → 技术 → 4D 逐层深入 → 总结」编排。</div>
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

    // ===== 4D / 目标 / 自测 入口 =====
    html += `<div class="entry-cards mb-32">
      <div class="entry-card" onclick="router.go('4ds')">
        <div class="entry-card-icon">🧩</div>
        <div class="entry-card-title">4Ds 核心框架</div>
        <div class="entry-card-desc">Delegation · Description · Discernment · Diligence — 四个核心能力的完整定义与组成部分。</div>
      </div>
      <div class="entry-card" onclick="router.go('goals')">
        <div class="entry-card-icon">🎯</div>
        <div class="entry-card-title">四重目标</div>
        <div class="entry-card-desc">Effective · Efficient · Ethical · Safe — AI Fluency 的衡量标准以及与 4Ds 的关系。</div>
      </div>
      <div class="entry-card" onclick="router.go('review')">
        <div class="entry-card-icon">📝</div>
        <div class="entry-card-title">自测与复习</div>
        <div class="entry-card-desc">判断题、场景题、"这属于哪个D？" — 测试你的理解深度，不只考定义。</div>
      </div>
    </div>`;

    // ===== 课程概览 =====
    html += `<div class="section-title">📚 全部课程</div>
      <div class="section-subtitle">每张卡片显示课程定位与一句话总结。点击进入精读页面。</div>
      <div class="overview-grid">`;
    lessons.forEach(l => {
      const color = lessonColor(l);
      html += `<div class="lesson-card" onclick="router.go('lesson',{lesson:'${l.id}'})">
        <div class="lesson-card-accent" style="background:${color}"></div>
        <div class="lesson-card-num" style="color:${color}">Lesson ${l.number}</div>
        <div class="lesson-card-title">${l.titleZh}</div>
        <div class="lesson-card-liner">${l.oneLiner}</div>
        <div class="lesson-card-meta"><span>${l.duration}</span></div>
      </div>`;
    });
    html += `</div></div>`;

    main.innerHTML = html;
  }

  // ==========================================
  //  课程精读 / 浏览页
  // ==========================================
  function renderLesson() {
    const lesson = COURSE_DATA.lessons.find(l => l.id === S.lessonId);
    if (!lesson) { router.go('home'); return; }
    const color = lessonColor(lesson);
    const isBrowse = S.mode === 'browse';

    let html = `<div class="lesson-page animate">`;

    // 面包屑
    html += `<div class="breadcrumb"><a onclick="router.go('home')">课程地图</a> › Lesson ${lesson.number}</div>`;

    // 头部
    html += `<div class="lesson-header">
      <div class="lesson-header-num" style="color:${color}">LESSON ${lesson.number}${isBrowse ? '' : ' · 精读模式'}</div>
      <div class="lesson-header-title">${lesson.title}</div>
      <div class="lesson-header-sub">${lesson.titleZh} · ${lesson.duration}${lesson.position ? ' · ' + lesson.position : ''}</div>
    </div>`;

    if (isBrowse) {
      // ===== 浏览模式：扫描层 =====
      html += renderScanCard('💡 一句话定位', lesson.oneLiner);
      html += renderScanCard('🎯 核心目标', lesson.coreGoal);

      // 关键术语
      if (lesson.keyTerms && lesson.keyTerms.length) {
        html += `<div class="scan-card">
          <div class="scan-card-label">📘 关键术语</div>
          <div class="scan-terms">${lesson.keyTerms.map(t => `<span class="term-tag">${t.term}（${t.zh}）</span>`).join('')}</div>
        </div>`;
      }

      // 要点
      html += `<div class="scan-card">
        <div class="scan-card-label">⭐ 学习要点</div>
        ${lesson.keyTakeaways.map(t => `<div class="k-point">${t}</div>`).join('')}
      </div>`;

      // 切换提示
      html += `<div style="text-align:center;margin:28px 0">
        <button class="q-check-btn" onclick="switchMode('study')" style="padding:10px 28px;font-size:.9rem">切换到精读模式，查看完整内容 →</button>
      </div>`;

    } else {
      // ===== 精读模式：6 层 =====

      // 第 1 层：30 秒总览
      html += makeLayer('layer-1', '1', '30 秒总览', `
        <div class="scan-card" style="border:none;padding:0">
          <div style="margin-bottom:10px"><strong>核心目标：</strong>${lesson.coreGoal}</div>
          <div style="margin-bottom:10px"><strong>一句话定位：</strong>${lesson.oneLiner}</div>
          ${lesson.position ? `<div style="margin-bottom:10px"><strong>课程位置：</strong>${lesson.position}</div>` : ''}
          ${lesson.keyTerms && lesson.keyTerms.length ? `
            <div class="scan-card-label" style="margin-top:12px">关键术语</div>
            <div class="scan-terms">${lesson.keyTerms.map(t => `<span class="term-tag">${t.term}（${t.zh}）</span>`).join('')}</div>
          ` : ''}
        </div>
      `, true);

      // 第 2 层：课程内结构地图
      html += makeLayer('layer-2', '2', '课程结构地图', buildLocalMap(lesson), true);

      // 第 3 层：完整知识点（按卡片分组）
      html += makeLayer('layer-3', '3', '完整知识点', buildKnowledgeCards(lesson), true);

      // 第 4 层：直白解释（展开默认）
      html += makeLayer('layer-4', '4', '学习时特别要抓住的点', `
        <div class="knowledge-cards">
          ${lesson.keyTakeaways.map(t => `<div class="k-point">${t}</div>`).join('')}
        </div>
      `, true);

      // 第 5 层：延伸解读（默认折叠，明确标记）
      html += makeLayer('layer-5', '5', '延伸解读 · 常见误区 · 办公映射', `
        <div class="ext-badge">🔖 以下内容为延伸解读，非课程原文</div>
        ${lesson.misconceptions && lesson.misconceptions.length ? `
          <div class="section-title" style="font-size:.95rem;margin-top:12px">❌ 常见误区</div>
          ${lesson.misconceptions.map(m => `
            <div class="misconception">
              <div class="misc-wrong"><span class="misc-icon">❌</span> ${m.wrong}</div>
              <div class="misc-correct"><span class="misc-icon">✅</span> ${m.correct}</div>
            </div>
          `).join('')}
        ` : ''}
        ${lesson.officeAutomation && lesson.officeAutomation.length ? `
          <div class="section-title" style="font-size:.95rem;margin-top:20px">🏢 办公自动化 / Vibe Coding 映射</div>
          ${lesson.officeAutomation.map(oa => `
            <div class="k-card" style="margin-bottom:10px">
              <div class="k-card-title">${oa.scenario}</div>
              <div class="k-point"><strong>映射：</strong>${oa.mapping}</div>
              <div class="k-point" style="color:var(--red)"><strong>风险：</strong>${oa.risk}</div>
            </div>
          `).join('')}
        ` : ''}
      `, false);

      // 第 6 层：自测
      html += makeLayer('layer-6', '6', '自测题', buildLessonQuiz(lesson), false);

      // 术语表
      if (lesson.keyTerms && lesson.keyTerms.length) {
        html += `<div class="scan-card mt-16">
          <div class="scan-card-label">📘 术语速查</div>
          ${lesson.keyTerms.map(t => `
            <div style="display:grid;grid-template-columns:140px 90px 1fr;gap:10px;padding:8px 0;border-bottom:1px solid var(--border);font-size:.88rem">
              <div style="font-weight:600;color:var(--accent)">${t.term}</div>
              <div style="color:var(--text-dim)">${t.zh}</div>
              <div>${t.def}</div>
            </div>
          `).join('')}
        </div>`;
      }
    }

    // 前后导航
    html += buildLessonNav(lesson);
    html += `</div>`;
    main.innerHTML = html;
  }

  // ===== 知识点按子主题分组为卡片 =====
  function buildKnowledgeCards(lesson) {
    const points = lesson.corePoints;
    if (!points || !points.length) return '<p style="color:var(--text-dim)">暂无</p>';
    // 每 4-5 个点一张卡
    const cards = [];
    const chunkSize = 4;
    for (let i = 0; i < points.length; i += chunkSize) {
      cards.push(points.slice(i, i + chunkSize));
    }
    let html = '<div class="knowledge-cards">';
    cards.forEach((chunk, idx) => {
      html += `<div class="k-card">
        <div class="k-card-title">要点 ${idx + 1}</div>
        ${chunk.map(p => `<div class="k-point">${highlightTerms(p)}</div>`).join('')}
      </div>`;
    });
    html += '</div>';
    return html;
  }

  // ===== 高亮关键术语 =====
  function highlightTerms(text) {
    const terms = ['Delegation', 'Description', 'Discernment', 'Diligence',
      'automation', 'augmentation', 'agency',
      'product', 'process', 'performance',
      'problem awareness', 'platform awareness', 'task delegation',
      'creation diligence', 'transparency diligence', 'deployment diligence',
      'context window', 'hallucination', 'LLM', 'Transformer',
      'few-shot', 'chain-of-thought', 'effective', 'efficient', 'ethical', 'safe'];
    let result = text;
    terms.forEach(t => {
      const re = new RegExp(`(${t})`, 'gi');
      result = result.replace(re, '<span class="k-highlight">$1</span>');
    });
    return result;
  }

  // ===== 课程内结构地图 =====
  function buildLocalMap(lesson) {
    // 从 keyTerms 和 takeaways 生成结构节点
    const nodes = [];
    if (lesson.keyTerms) {
      lesson.keyTerms.forEach(t => nodes.push(t.term + '（' + t.zh + '）'));
    }
    if (nodes.length === 0 && lesson.keyTakeaways) {
      lesson.keyTakeaways.forEach((t, i) => nodes.push('要点 ' + (i + 1)));
    }
    return `<div class="local-map" style="border:none;padding:0">
      <div class="local-map-title">本课知识结构</div>
      <div class="local-map-nodes">
        ${nodes.map(n => `<span class="lm-node">${n}</span>`).join('')}
      </div>
    </div>`;
  }

  // ===== 课程内自测题 =====
  function buildLessonQuiz(lesson) {
    const qs = (typeof QUIZ_DATA !== 'undefined' ? QUIZ_DATA : [])
      .filter(q => q.relatedLesson === lesson.id);
    if (qs.length === 0) {
      // 用练习问题兜底
      if (lesson.practiceQuestions && lesson.practiceQuestions.length) {
        return `<div>
          <div style="font-size:.88rem;color:var(--text-dim);margin-bottom:12px">以下问题可用来自测和复盘：</div>
          ${lesson.practiceQuestions.map((q, i) => `
            <div class="k-point"><strong>${i + 1}.</strong> ${q}</div>
          `).join('')}
        </div>`;
      }
      return '<p style="color:var(--text-dim)">暂无自测题</p>';
    }
    return renderQuizCards(qs);
  }

  // ===== 折叠层 =====
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

  // ===== 扫描卡 =====
  function renderScanCard(label, text) {
    return `<div class="scan-card">
      <div class="scan-card-label">${label}</div>
      <div class="scan-card-text">${text}</div>
    </div>`;
  }

  // ===== 课程前后导航 =====
  function buildLessonNav(lesson) {
    const all = COURSE_DATA.lessons;
    const idx = all.findIndex(l => l.id === lesson.id);
    const prev = idx > 0 ? all[idx - 1] : null;
    const next = idx < all.length - 1 ? all[idx + 1] : null;
    let html = '<div class="lesson-nav">';
    if (prev) {
      html += `<div class="lesson-nav-btn" onclick="router.go('lesson',{lesson:'${prev.id}'})">
        <div class="lesson-nav-btn-label">← 上一课</div>
        <div class="lesson-nav-btn-title">L${prev.number} ${prev.titleZh}</div>
      </div>`;
    } else { html += '<div></div>'; }
    if (next) {
      html += `<div class="lesson-nav-btn" onclick="router.go('lesson',{lesson:'${next.id}'})" style="text-align:right">
        <div class="lesson-nav-btn-label">下一课 →</div>
        <div class="lesson-nav-btn-title">L${next.number} ${next.titleZh}</div>
      </div>`;
    }
    html += '</div>';
    return html;
  }

  // ===== 课程颜色 =====
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
  //  4Ds 页
  // ==========================================
  function render4Ds() {
    const ds = COURSE_DATA.fourDs;
    let html = `<div class="animate" style="max-width:var(--content-max);margin:0 auto">
      <div class="breadcrumb"><a onclick="router.go('home')">课程地图</a> › 4Ds 核心框架</div>
      <div class="map-title">🧩 4Ds 核心框架</div>
      <div class="map-subtitle">四个核心能力构成人机协作的完整闭环。点击各 D 下的课程链接可跳转到对应精读页。</div>

      <div class="flow-row mb-32">
        <span class="flow-step" style="border-left:3px solid var(--d1)">🧭 Delegation 搭框架</span>
        <span class="flow-arrow">→</span>
        <span class="flow-step" style="border-left:3px solid var(--d2)">📝 Description 执行沟通</span>
        <span class="flow-arrow">→</span>
        <span class="flow-step" style="border-left:3px solid var(--d3)">🔍 Discernment 验收判断</span>
        <span class="flow-arrow">→</span>
        <span class="flow-step" style="border-left:3px solid var(--d4)">🔒 Diligence 责任兜底</span>
      </div>`;

    ds.forEach(d => {
      html += `<div class="d-section">
        <div class="d-header">
          <div class="d-icon">${d.icon}</div>
          <div><span class="d-name">${d.name}</span><span class="d-name-zh">（${d.nameZh}）</span></div>
        </div>
        <div class="d-def" style="border-color:${d.color}">${d.definition}</div>

        <div class="section-title" style="font-size:.92rem">组成部分</div>
        ${d.components.map(c => `
          <div class="d-comp">
            <div class="d-comp-name">${c.name}</div>
            <div class="d-comp-desc">${c.desc}</div>
          </div>
        `).join('')}

        <div class="section-title" style="font-size:.92rem;margin-top:16px">常见误区</div>
        ${d.commonMisconceptions.map(m => `
          <div class="misconception"><div class="misc-wrong"><span class="misc-icon">❌</span> ${m}</div></div>
        `).join('')}

        <div class="section-title" style="font-size:.92rem;margin-top:16px">办公映射</div>
        ${d.officeMapping.map(m => `<div class="k-point">${m}</div>`).join('')}

        <div style="margin-top:12px">
          <span class="lm-node" onclick="router.go('lesson',{lesson:'${d.lessonRef}'})">
            查看 Lesson ${d.lessonRef.replace('L', '')} 完整内容 →
          </span>
        </div>
      </div>`;
    });

    html += `</div>`;
    main.innerHTML = html;
  }

  // ==========================================
  //  四重目标页
  // ==========================================
  function renderGoals() {
    const goals = COURSE_DATA.fourGoals;
    const goalColors = { effective: 'var(--amber)', efficient: '#3b82f6', ethical: 'var(--purple)', safe: 'var(--red)' };

    let html = `<div class="animate" style="max-width:var(--content-max);margin:0 auto">
      <div class="breadcrumb"><a onclick="router.go('home')">课程地图</a> › 四重目标</div>
      <div class="map-title">🎯 四重目标</div>
      <div class="map-subtitle">AI Fluency 的衡量标准：做得对（Effective）、做得快（Efficient）、做得正（Ethical）、做得稳（Safe）。</div>

      <div class="scan-card mb-24" style="background:linear-gradient(135deg,rgba(129,140,248,.05),rgba(74,222,128,.03))">
        <div class="scan-card-label">4Ds 与四重目标的关系</div>
        <div class="scan-card-text">
          <strong>4Ds = 能力/操作框架</strong>（告诉你"怎么做"）<br>
          <strong>四重目标 = 结果/评价标准</strong>（告诉你"做得好不好"）<br><br>
          Delegation / Description / Discernment 更偏向 effectiveness 和 efficiency。<br>
          Diligence 强烈关联 ethical 和 safe。<br>
          但四个 D 最终都服务于四重目标。
        </div>
      </div>

      <div class="grid-2 mb-32">
        ${goals.map(g => `
          <div class="goal-card" style="border-top-color:${goalColors[g.id]}">
            <div class="goal-icon">${g.icon}</div>
            <div class="goal-name">${g.name}</div>
            <div class="goal-name-zh">${g.nameZh}</div>
            <div class="goal-desc">${g.detail}</div>
            <div class="goal-rel">关联 D：${g.relatedDs.join('、')}</div>
          </div>
        `).join('')}
      </div>

      <div class="section-title">🏢 案例：客户询盘 → 报价 → 回复</div>
      <div class="scan-card">
        <div class="scan-card-text" style="line-height:2">
          <strong style="color:var(--amber)">Effective：</strong>报价是否准确、完整、能推动成交？<br>
          <strong style="color:#3b82f6">Efficient：</strong>从询盘到报价的时间是否缩短？人力是否合理？<br>
          <strong style="color:var(--purple)">Ethical：</strong>报价是否诚实？有没有夸大产品能力？<br>
          <strong style="color:var(--red)">Safe：</strong>客户数据是否安全？发送前是否审核？
        </div>
      </div>
    </div>`;
    main.innerHTML = html;
  }

  // ==========================================
  //  自测/复习页
  // ==========================================
  function renderReview() {
    let html = `<div class="animate" style="max-width:var(--content-max);margin:0 auto">
      <div class="breadcrumb"><a onclick="router.go('home')">课程地图</a> › 自测与复习</div>
      <div class="map-title">📝 自测与复习</div>
      <div class="map-subtitle">不只考定义，更考判断能力。测试你的 4D 掌握情况。</div>`;

    // 复习清单
    if (typeof CROSS_LESSON_DATA !== 'undefined') {
      html += `<div class="scan-card mb-24">
        <div class="scan-card-label">✅ 一页式复习清单</div>
        ${CROSS_LESSON_DATA.reviewChecklist.map(c => `<div class="k-point">${c}</div>`).join('')}
      </div>`;

      // 12 条原则
      const p12 = CROSS_LESSON_DATA.sections.find(s => s.principles);
      if (p12) {
        html += `<div class="scan-card mb-24">
          <div class="scan-card-label">📜 ${p12.title}</div>
          <ol style="padding-left:20px">
            ${p12.principles.map(p => `<li style="padding:6px 0;line-height:1.7">${p}</li>`).join('')}
          </ol>
        </div>`;
      }
    }

    // 自测题
    const questions = typeof QUIZ_DATA !== 'undefined' ? [...QUIZ_DATA].sort(() => Math.random() - .5) : [];
    if (questions.length) {
      html += `<div class="section-title mt-16">📋 自测题</div>
        <div class="quiz-block">${renderQuizCards(questions)}</div>`;
    }

    html += `</div>`;
    main.innerHTML = html;
  }

  // ===== 自测题卡片渲染 =====
  function renderQuizCards(questions) {
    const typeLabels = { choice: '选择题', judgment: '判断题', whichD: '哪个D？', scenario: '场景题' };
    const dColors = { delegation: 'var(--d1)', description: 'var(--d2)', discernment: 'var(--d3)', diligence: 'var(--d4)', all: 'var(--accent)' };
    let html = '';
    questions.forEach((q, idx) => {
      const typeLabel = typeLabels[q.type] || '题目';
      const dc = dColors[q.relatedD] || 'var(--accent)';
      html += `<div class="q-card" id="qc-${q.id}">
        <span class="q-type-tag" style="background:${dc}22;color:${dc}">${typeLabel}</span>
        <span class="q-type-tag" style="background:var(--bg-hover);color:var(--text-faint);margin-left:4px">${q.relatedLesson}</span>
        <div class="q-text">${idx + 1}. ${q.question}</div>
        <div class="q-options" id="qo-${q.id}">`;
      if (q.type === 'judgment') {
        html += `<div class="q-opt" data-v="true" onclick="window._qSel(${q.id},true)"><span class="q-radio"></span>正确</div>
                 <div class="q-opt" data-v="false" onclick="window._qSel(${q.id},false)"><span class="q-radio"></span>错误</div>`;
      } else {
        q.options.forEach((o, oi) => {
          html += `<div class="q-opt" data-v="${oi}" onclick="window._qSel(${q.id},${oi})"><span class="q-radio"></span>${o}</div>`;
        });
      }
      html += `</div>
        <button class="q-check-btn" onclick="window._qChk(${q.id})">确认答案</button>
        <div class="q-feedback" id="qf-${q.id}"></div>
      </div>`;
    });
    return html;
  }

  // 自测交互
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
    const ok = (q.type === 'judgment') ? (sel === q.answer) : (sel === q.answer);
    const fb = document.getElementById('qf-' + qid);
    if (fb) {
      fb.className = `q-feedback show ${ok ? 'ok' : 'no'}`;
      fb.innerHTML = `${ok ? '✅ 正确！' : '❌ 不对。'} ${q.explanation}`;
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
  //  搜索
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
        const hay = [l.title, l.titleZh, l.oneLiner, l.coreGoal, ...(l.corePoints || []), ...(l.keyTakeaways || [])].join(' ').toLowerCase();
        if (hay.includes(q)) {
          results.push({ title: `L${l.number} ${l.titleZh}`, ctx: l.oneLiner, action: () => router.go('lesson', { lesson: l.id }) });
        }
      });
      COURSE_DATA.fourDs.forEach(d => {
        const hay = [d.name, d.nameZh, d.definition, d.oneLiner].join(' ').toLowerCase();
        if (hay.includes(q)) {
          results.push({ title: `${d.icon} ${d.name}（${d.nameZh}）`, ctx: d.oneLiner, action: () => router.go('4ds') });
        }
      });
      COURSE_DATA.lessons.forEach(l => {
        (l.keyTerms || []).forEach(t => {
          if ([t.term, t.zh, t.def].join(' ').toLowerCase().includes(q)) {
            results.push({ title: `${t.term}（${t.zh}）`, ctx: `${t.def} — L${l.number}`, action: () => router.go('lesson', { lesson: l.id }) });
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
        dropdown.innerHTML = '<div class="search-item"><div class="search-item-title">未找到</div></div>';
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

  // ===== 初始化 =====
  function init() {
    renderHome();
    initSearch();
  }
  init();
})();
