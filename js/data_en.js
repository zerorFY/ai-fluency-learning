// AI Fluency — English content overlay for all lessons
// This file adds English fields to existing lesson data
// English content based on original SRT subtitles from Anthropic Academy course
(function() {
  'use strict';

  const EN = {
    'L1': {
      oneLinerEn: 'This course isn\'t about learning prompts — it\'s about learning how to work with AI.',
      coreGoalEn: 'Establish the AI Fluency framework: not just how to use AI, but how to think with AI.',
      positionEn: 'Course opener — sets the tone and expectations for the entire course',
      corePointsEn: [
        'The course explicitly states its focus: not AI technology itself, but how humans interact and collaborate with AI systems. In other words, this course is about the "collaborative relationship," not "technical tricks."',
        'The course repeatedly warns against treating AI as just a "next level spell checker." It encourages you to see AI as a trusted partner for creative, exploratory, and complex problem-solving work.',
        'The course aims to address a real challenge: AI is changing extremely quickly, and many people feel both excited and confused, not knowing where to start or how to keep up long-term.',
        'Therefore, the course goal is not to give you a set of prompt tips that quickly become outdated, but to provide a stable framework — so you\'re not led around by the next "prompt engineering fad."',
        'The course defines AI fluency as: our ability to engage with AI systems in ways that are effective, efficient, ethical, and safe.',
        'The course believes what truly matters is learning "how to think with AI," not just "how to use AI." This means learning to co-think, co-advance, and co-create.',
        'AI has transformed from specialized technologies to interactive systems that millions use daily at school, at work, and at home. This brings both enormous opportunities and challenges.',
        'The course exists to help bridge the gap between what\'s possible with AI and what feels comfortable and intuitive.',
        'The course outline: first an overview of the AI fluency framework, then three interaction modes and four core competencies (the 4Ds), followed by deep dives into Delegation, Description, Discernment, and Diligence.',
        'The course also includes perspectives directly from Anthropic about what makes today\'s AI different, real capabilities and limitations, and practical techniques applying the 4Ds.',
        'Most AI training focuses solely on tactical skills — specific prompts, settings, or tools. While useful, these can quickly become outdated. This course takes a different approach, focusing on core competencies and deep understanding.',
        'By the end, you\'ll have: a framework to guide your interactions, confidence in deciding when and how to engage AI, practical skills for fluid human-AI collaboration, and the ability to evaluate and take responsibility for outcomes.'
      ],
      keyTakeawaysEn: [
        'If you want to use AI in automation, agent workflows, or business systems, this lesson is crucial: don\'t treat AI as a "magic quick key" — integrate it into a "human-led" collaborative system.',
        'From the very first lesson, establish a mindset: the stronger the model, the more you need to define problems, set boundaries, and make judgments — not the more you can completely disengage your brain.',
        'This lesson also calibrates expectations: learning AI doesn\'t mean memorizing dozens of prompts. Real progress means putting AI in the right place.'
      ],
      misconceptionsEn: [
        { wrong: 'AI fluency = prompt engineering', correct: 'Prompting is only part of Description — one of four competencies.' },
        { wrong: 'The course focuses on model internals', correct: 'Model understanding only serves better collaboration judgment.' },
        { wrong: 'The framework is abstract and has no practical use', correct: 'Abstract frameworks are valuable precisely because they transfer across models and scenarios.' }
      ],
      practiceQuestionsEn: [
        'If I had to explain this course in 2 sentences to someone else, what would I say?',
        'What do I currently treat AI as most: tool, partner, or agent? Why?',
        'In my own work, which of the 4Ds do I most need to improve?'
      ]
    },
    'L2A': {
      oneLinerEn: 'Having access to AI doesn\'t mean you truly know how to use it; knowing a few tricks doesn\'t mean you can collaborate responsibly.',
      coreGoalEn: 'Define AI fluency, introduce three interaction modes (Automation, Augmentation, Agency), and explain why fluency goes beyond prompt engineering.',
      positionEn: 'The "why" chapter — explains why we need the framework before diving into specifics',
      corePointsEn: [
        'This lesson starts from real experience: many people already use AI for writing, brainstorming, research, and decision support, but "having access to AI" and "truly having AI fluency" are two different things.',
        'The course lists typical pain points: AI responds unexpectedly and you don\'t know how to proceed; you struggle to explain what you need and leave frustrated; you worry whether information you\'re sharing is being properly protected.',
        'These pain points show that the problem isn\'t "you haven\'t heard of AI" but that you haven\'t formed a mature set of collaboration competencies.',
        'AI fluency isn\'t being a technical expert or memorizing "this month\'s 10 hottest prompt templates." It\'s a collection of practical skills, knowledge, insights, and values that adapt as technology changes.',
        'The course reiterates four goals: effective, efficient, ethical, and safe. Note this isn\'t only about outcomes — it also encompasses resource investment and responsibility.',
        'The first interaction mode is Automation: you tell AI what to do, AI executes. For example, summarizing documents, writing emails, generating images, planning itineraries.',
        'Automation works best when you already have a clear outcome in mind. When your goal itself is fuzzy, it may not be the best starting point.',
        'The second mode is Augmentation: you and AI complete tasks together. AI doesn\'t just work for you but serves as a creative thinking partner. Examples include character development, product thinking, complex research.',
        'Augmentation excels when problems are ill-defined, need exploration, and require iterative refinement. It reflects AI\'s value as a "cognitive amplifier."',
        'The third mode is Agency: AI acts on your behalf. You establish knowledge, rules, behavior patterns, or goals rather than scripting individual actions.',
        'The course emphasizes the three modes aren\'t ranked — they can coexist in a single project. While most people start with automation, augmentation and agency often better leverage AI\'s unique capabilities.',
        'Therefore, AI isn\'t just a tool — it can also be a medium, partner, co-creator, or even multiple roles simultaneously. This requires humans to develop new roles and skills too.'
      ],
      keyTakeawaysEn: [
        'When facing a requirement, don\'t rush to ask "what should AI do for me" — first ask "is this scenario more like automation, augmentation, or agency?"',
        'For office automation or business system upgrades: repetitive, well-defined tasks lean toward automation; process design and exploration lean toward augmentation; continuous-running process nodes lean toward agency.',
        'This lesson also reminds: your expectations of AI should match the maturity of your problem definition. The clearer the goal, the better automation fits; the fuzzier the goal, the more you need augmentation.'
      ],
      misconceptionsEn: [
        { wrong: 'Agency is just more advanced automation', correct: 'They differ significantly — agency emphasizes persistent behavior, rules, boundaries, and autonomy.' },
        { wrong: 'Augmentation is just "chatting with AI"', correct: 'It\'s purposeful, goal-driven collaborative thinking, not casual conversation.' },
        { wrong: 'Knowing automation is enough', correct: 'Many of the highest-value use cases emerge in augmentation and agency.' }
      ],
      practiceQuestionsEn: [
        'Which task at hand is better suited for augmentation rather than automation?',
        'If I want to turn a repetitive workflow into an agent, which rules must I define first?',
        'In my industry, which aspects must still be led by humans?'
      ]
    },
    'L2B': {
      oneLinerEn: 'The 4Ds aren\'t four isolated skills — they\'re a complete human-AI collaboration loop.',
      coreGoalEn: 'Introduce the four core competencies (Delegation, Description, Discernment, Diligence) as a structured framework for all AI interaction modes.',
      positionEn: 'Framework overview — establishes the 4D model before deep dives',
      corePointsEn: [
        'This lesson further structures the overall objectives, proposing four core competencies: Delegation, Description, Discernment, and Diligence.',
        'These four competencies apply to all interaction modes — automation, augmentation, and agency all use them, just with different emphases.',
        'Delegation focuses on the big picture: What exactly do you want to achieve? What work components make up the task? Which should humans do, which suit AI, which benefit from human-AI collaboration?',
        'The research project example is important: you can have AI read extensive documents and data, then discuss implications and findings with you, but keep key analysis and final conclusions for humans. This demonstrates the "filter, then discuss, then decide" delegation approach.',
        'Description focuses on communication quality. The course uses the contrast between "make a logo" and "specify brand values, audience, color palette, style" to show that more complete context leads to more effective collaboration.',
        'Description also includes how you want AI to approach helping you. For example, when tutoring, you can ask it "don\'t give me the answer directly, but guide me step by step."',
        'Discernment is judgment. When facing AI-generated marketing plans, analysis conclusions, or suggestions, you can\'t just look at whether it "looks right" — you need to verify facts, logic, value alignment, and whether it truly advances the problem.',
        'The course points out that most real collaborations involve Description-Discernment micro-loops: you describe needs, AI provides output, you evaluate quality, then refine your description.',
        'Diligence addresses responsible use: fairness, bias control, information verification, data protection, disclosing AI involvement, and taking responsibility for outcomes.',
        'In high-stakes scenarios like hiring, auditing, and analysis, Diligence isn\'t an add-on — it\'s a baseline competency.',
        'The course emphasizes the 4Ds are valuable precisely because they aren\'t tied to any specific model or technique, so they remain effective through rapid technological change.'
      ],
      keyTakeawaysEn: [
        'Think of the 4Ds as a minimum workflow: first divide work (D1), then communicate (D2), then verify (D3), finally confirm compliance and responsibility (D4).',
        'For any AI project, you can write four questions: How to divide? How to describe? How to verify? How to take responsibility?',
        'If your AI outputs often "look nice" but "need rework" or "can\'t go live," it usually means at least one of the 4Ds wasn\'t done properly — not that the model isn\'t strong enough.'
      ],
      misconceptionsEn: [
        { wrong: 'The 4Ds are linear', correct: 'They often cycle back, especially Description and Discernment.' },
        { wrong: 'Diligence is only for large companies\' compliance', correct: 'Individuals, students, and freelancers equally face privacy, transparency, and responsibility issues.' },
        { wrong: 'Delegation is just task assignment', correct: 'It also includes problem understanding and platform awareness.' }
      ],
      practiceQuestionsEn: [
        'When I do an AI project, which D am I most likely to skip?',
        'Is there a past failure that in hindsight was really a particular D done poorly?',
        'If I had to define each D in one sentence, how would I write it?'
      ]
    },
    'L3A': {
      oneLinerEn: 'The core of generative AI isn\'t "finding answers" — it\'s generating new content based on patterns learned during training.',
      coreGoalEn: 'Explain what generative AI is, how LLMs work (pre-training, fine-tuning, context window), and why this understanding matters for collaboration.',
      positionEn: 'Technical foundation — provides the "how it works" knowledge needed for informed delegation',
      corePointsEn: [
        'This lesson answers a fundamental but crucial question: what is generative AI? The course defines it as AI systems that can create new content, rather than just analyzing existing data.',
        'The course uses spam email classification versus writing entirely new emails to contrast traditional AI with generative AI: the former focuses on identification/classification, the latter on generation/creation.',
        'LLM (Large Language Model) is the typical representative of generative AI. It\'s called a language model because it processes and generates language; it\'s called large because of its enormous number of parameters.',
        'Parameters can be roughly understood as mathematical weights that influence how the model processes information. The course uses the analogy of "brain synaptic connections" to build intuition, though it\'s not a direct biological replica.',
        'Today\'s generative AI didn\'t appear suddenly — it was driven by three factors maturing at the same time.',
        'The first factor is algorithmic and architectural breakthroughs, especially the 2017 Transformer architecture. It excels at processing text sequences and maintaining relationships between words across long texts, which is critical for understanding context.',
        'The second factor is the explosion of digitized data. Modern LLMs learn from websites, code repositories, and all kinds of text, gaining broad and nuanced language and conceptual patterns.',
        'The third factor is massive increases in compute power. GPUs, TPUs, and distributed clusters made large-scale training possible — without compute, the other two couldn\'t translate into today\'s model capabilities.',
        'When these three factors combined, researchers discovered scaling laws: as model size increases, data grows, and compute strengthens, performance improves in relatively predictable ways.',
        'More importantly, as models scale up, emergent capabilities appear that weren\'t explicitly designed — such as better multi-step reasoning and completing new tasks with fewer examples.',
        'Pre-training works by having the model see massive amounts of text and continuously predict the next token, thereby learning statistical relationships in language and knowledge.',
        'Pre-training isn\'t "memorizing texts" — it\'s forming a high-dimensional map of language patterns, conceptual relationships, and expression structures from vast examples.',
        'After pre-training, models typically undergo fine-tuning and alignment training to make them better at following instructions, being helpful, and avoiding harmful outputs.',
        'When you use Claude or other LLMs, the model isn\'t retrieving a pre-written answer from a database — it\'s continuing to generate the most contextually appropriate text based on your input.',
        'The course introduces the context window concept — like AI\'s working memory, containing your prompt, AI\'s responses, and other shared content in the current session.',
        'Context windows are limited; when exceeded, the model cannot simultaneously consider all information. Without external tools, it also cannot access the latest real-world information beyond its current context.'
      ],
      keyTakeawaysEn: [
        'Understanding "it\'s generating, not precisely retrieving" directly changes your expectations: AI excels at generating, rewriting, synthesizing, and transforming — but isn\'t inherently a precision fact database.',
        'Understanding context windows makes you more deliberate about: inputting in stages, providing necessary context, not burying key conditions deep in earlier conversation turns.',
        'Understanding pre-training / fine-tuning / in-context learning differences helps you judge: what problems can be improved by providing more context, and what problems require switching models or adding tools.'
      ],
      misconceptionsEn: [
        { wrong: 'LLMs search the internet in real-time for answers', correct: 'Not always — only when connected to web search or other external tools.' },
        { wrong: 'More parameters automatically means correct about everything', correct: 'Scale improves capability but doesn\'t automatically eliminate errors.' },
        { wrong: 'The model understands "meaning" exactly like humans do', correct: 'The course emphasizes statistical pattern learning and capability emergence, not identical understanding.' }
      ],
      practiceQuestionsEn: [
        'If I had to explain "why generative AI is different from a search engine" to someone who knows nothing about AI, what would I say?',
        'What was a recent situation where I got poor results because I didn\'t consider the context window?',
        'In my work, which tasks primarily rely on generation ability vs. which require external fact retrieval?'
      ]
    },
    'L3B': {
      oneLinerEn: 'To use AI well, first get to know it like a new colleague — understand its strengths, weaknesses, and boundaries.',
      coreGoalEn: 'Map AI\'s capabilities and limitations so you can make informed delegation and collaboration decisions.',
      positionEn: 'Practical complement to L3A — translates technical understanding into collaboration awareness',
      corePointsEn: [
        'This lesson uses "getting to know a new colleague" as an analogy: for high-quality collaboration, you must simultaneously understand what AI can and cannot do.',
        'Modern LLMs are extremely strong in language processing: writing/rewriting emails, summarizing long documents, translating, explaining complex concepts across domains.',
        'A major feature is task generality: the same system doesn\'t need retraining to switch between poetry, birthday ideas, quantum computing explanations, and business analysis.',
        'Models also excel at maintaining conversational coherence: project deadlines, background conditions, or goals mentioned earlier are usually tracked in subsequent exchanges.',
        'Modern LLMs can expand their capabilities through external tools such as web search, file processing, and calling other applications — significantly extending their usable boundaries.',
        'The first limitation comes from training cutoff. The model\'s native knowledge stops at the end of training data — it has no "naturally knowing" ability for events that occurred after.',
        'For questions about latest news, prices, policies, or recent changes, the base model\'s memory alone is unreliable — typically requiring web search or other external data sources.',
        'The second limitation stems from training data. The training process doesn\'t individually verify data truth, so models may absorb and reproduce errors in training materials.',
        'Models can also make errors when combining existing knowledge, producing hallucinations: outputs that seem real but actually aren\'t.',
        'The course specifically reminds: LLMs and search engines are different. Search engines primarily retrieve existing documents; LLMs primarily generate language based on statistical patterns, making them more likely to confidently "fabricate."',
        'The third limitation is the context window. The amount of information a model can process at once is limited — exceeding it means earlier information may drop out.',
        'The fourth limitation is non-determinism. The same question asked twice may yield slightly different answers because models perform probabilistic generation, not traditional software-style deterministic output.',
        'The fifth limitation is complex reasoning ability. While improving rapidly, traditional LLMs have historically been error-prone in multi-step mathematical/logical reasoning; newer reasoning models show significant improvement.',
        'The sixth limitation is tool and data accessibility. Even the smartest model cannot answer questions that require your company\'s internal database, a specific professional tool, or real-time data when none are connected.',
        'The conclusion re-emphasizes complementarity: humans bring judgment, values, creativity, and ethical oversight; AI brings speed, scale, pattern recognition, and massive information processing. High-value applications typically come from combining both.'
      ],
      keyTakeawaysEn: [
        'When AI gives wrong answers, don\'t just say "the model is bad" — specifically diagnose whether it\'s a cutoff issue, hallucination, context window overflow, non-determinism, or tool gap.',
        'Build a daily habit: for questions involving "latest, prices, regulations, specific facts, internal data," first consider "does it need an external data source?"',
        'For workflow automation, separate model capabilities from external system capabilities: the model handles understanding, generation, and synthesis; the system handles real data, permissions, execution, and logging.'
      ],
      misconceptionsEn: [
        { wrong: 'AI sounds fluent = factually correct', correct: 'Fluency and truthfulness are not the same thing.' },
        { wrong: 'Different answers to the same question means the model is broken', correct: 'Not necessarily — this may be normal non-deterministic behavior.' },
        { wrong: 'A powerful enough model doesn\'t need data connections', correct: 'Quite the opposite — high-quality deployment typically relies on "model + data + tools" combined.' }
      ],
      practiceQuestionsEn: [
        'What\'s a recent hallucination I encountered, and what type of limitation was it fundamentally?',
        'In my scenarios, which tasks can rely solely on the model vs. which must connect to databases/web/file systems?',
        'If I had to explain "why AI confidently makes things up" to a colleague using an analogy, how would I do it?'
      ]
    }
  };

  // Apply English fields to existing lessons
  function applyEnglish() {
    const allLessons = COURSE_DATA.lessons.concat(
      typeof LESSONS_PART2 !== 'undefined' ? LESSONS_PART2 : [],
      typeof LESSONS_PART3 !== 'undefined' ? LESSONS_PART3 : []
    );
    // Also apply to source arrays directly
    [COURSE_DATA.lessons, 
     typeof LESSONS_PART2 !== 'undefined' ? LESSONS_PART2 : [],
     typeof LESSONS_PART3 !== 'undefined' ? LESSONS_PART3 : []
    ].forEach(arr => {
      arr.forEach(lesson => {
        const en = EN[lesson.id];
        if (en) Object.assign(lesson, en);
      });
    });
  }

  // Add keyTerms defEn
  const TERM_EN = {
    'AI fluency': 'Our ability to engage with AI systems in ways that are effective, efficient, ethical, and safe.',
    'effective': 'Whether you truly achieved the goal — outcome quality.',
    'efficient': 'Whether the process minimized wasted time and energy.',
    'ethical': 'Whether the interaction was honest, fair, and appropriate.',
    'safe': 'Whether privacy and security of yourself and others were protected.',
    'automation': 'AI completes a specific task based on your instructions.',
    'augmentation': 'You and AI collaborate together, with AI as a creative thinking partner.',
    'agency': 'AI works independently on your behalf based on established knowledge and rules.',
    'Delegation': 'Deciding what work should be done by humans vs. AI, based on understanding goals, capabilities, and risks.',
    'Description': 'The ability to communicate clearly with AI — specifying output, process, and interaction style.',
    'Discernment': 'Evaluating AI outputs, processes, and behaviors to determine quality and appropriateness.',
    'Diligence': 'Ensuring AI interaction is responsible, transparent, and accountable.',
    'generative AI': 'AI systems capable of creating new content rather than just analyzing existing data.',
    'LLM': 'Large Language Model — AI systems with massive parameters that process and generate language.',
    'Transformer': 'The 2017 architecture that excels at processing text sequences and maintaining long-range word relationships.',
    'parameters': 'Mathematical weights that influence how a model processes information — analogous to synaptic connections.',
    'pre-training': 'The initial phase where models learn language patterns by predicting next tokens across massive text data.',
    'fine-tuning': 'Post-training adjustment to make models better at following instructions and avoiding harmful outputs.',
    'context window': 'The model\'s working memory — containing prompts, responses, and shared content in the current session.',
    'in-context learning': 'The ability to quickly adapt to tasks based on instructions and examples within the current context.',
    'scaling laws': 'The predictable pattern where model performance improves with larger scale, more data, and more compute.',
    'emergent capabilities': 'New abilities that appear as models scale up — not explicitly programmed but emerging from scale.',
    'hallucination': 'Model outputs that seem real and confident but are actually fabricated or incorrect.',
    'training cutoff': 'The date at which a model\'s native knowledge ends — events after this aren\'t "naturally" known.',
    'non-determinism': 'The property where the same input may produce slightly different outputs due to probabilistic generation.',
    'task generality': 'The ability to handle diverse tasks without retraining — switching between poetry, analysis, coding, etc.',
    'RAG': 'Retrieval-Augmented Generation — combining model generation with external data retrieval.',
    'temperature': 'A parameter controlling the randomness/creativity of model outputs.',
    'problem awareness': 'Understanding what exactly needs to be accomplished, what problem is being solved, and what success looks like.',
    'platform awareness': 'Understanding the relative strengths and differences of available AI models, platforms, and applications.',
    'task delegation': 'Deciding which steps to automate, which to collaborate on, and which judgments to keep with humans.',
    'product description': 'Specifying what output you want from AI — task, context, format, audience, and tone.',
    'process description': 'Specifying how AI should approach the task — principles, steps, examples, methodology.',
    'performance description': 'Specifying the interaction style — divergent vs. convergent, challenging vs. supportive, detailed vs. concise.',
    'product discernment': 'Evaluating the output — facts, appropriateness, structure, requirements, problem resolution.',
    'process discernment': 'Evaluating how AI arrived at the result — logic, attention, steps, reasoning.',
    'performance discernment': 'Evaluating the interaction quality — communication clarity, responsiveness, collaboration fit.',
    'creation diligence': 'Being intentional and critical about which AI system to use, with attention to data protection and value alignment.',
    'transparency diligence': 'Thoughtfully disclosing AI involvement based on the context — personal, academic, creative, or professional.',
    'deployment diligence': 'Taking responsibility for AI-generated content shared externally — fact-checking, bias review, rights verification.',
    'chain-of-thought': 'A prompting technique that makes the desired reasoning process explicit before the final answer.',
    'few-shot prompting': 'Providing example input-output pairs to demonstrate the desired pattern to the model.',
    'Description-Discernment loop': 'The iterative cycle of describing needs, evaluating outputs, refining descriptions, and re-evaluating.'
  };

  function applyTermEn() {
    const allArrays = [
      COURSE_DATA.lessons,
      typeof LESSONS_PART2 !== 'undefined' ? LESSONS_PART2 : [],
      typeof LESSONS_PART3 !== 'undefined' ? LESSONS_PART3 : []
    ];
    allArrays.forEach(arr => {
      arr.forEach(lesson => {
        if (lesson.keyTerms) {
          lesson.keyTerms.forEach(tm => {
            if (TERM_EN[tm.term]) tm.defEn = TERM_EN[tm.term];
            else if (TERM_EN[tm.term.toLowerCase()]) tm.defEn = TERM_EN[tm.term.toLowerCase()];
          });
        }
      });
    });
  }

  // Execute when this script loads (before app.js merges arrays)
  window._applyI18nData = function() {
    applyEnglish();
    applyTermEn();
  };
})();
