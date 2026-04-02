// AI Fluency — English content for cross-lesson data and quiz
(function() {
  'use strict';

  // Cross-lesson English data
  if (typeof CROSS_LESSON_DATA !== 'undefined') {
    CROSS_LESSON_DATA.sectionsEn = [
      {
        title: 'What a Mature AI Workflow Looks Like',
        steps: [
          'Define goals and success criteria: what exactly do I need to accomplish, and what counts as acceptable?',
          'Identify task type and interaction mode: is this automation, augmentation, or agency?',
          'Delegate: map tasks, identify human judgment points, choose models and tools, decide division of work',
          'Describe: specify output, process, and interaction style clearly; supplement with context, examples, constraints as needed',
          'Generate initial output: drafts, plans, analyses, code, outlines, classification results, etc.',
          'Discern: check output quality, process correctness, interaction fit',
          'Iterate as needed: revise description, change methods, switch tools, redo division of work',
          'Exercise Diligence: confirm data, disclosure, responsibility, risks, pre-launch standards',
          'Final delivery: humans make decisions to keep, modify, discard, and publish'
        ]
      },
      {
        title: 'The 4Ds Relationship Map',
        items: [
          'Delegation determines "who does what"',
          'Description determines "how to tell AI to do it"',
          'Discernment determines "whether the output is worth using"',
          'Diligence determines "whether this is appropriate, and who is responsible"'
        ],
        flow: 'Delegation sets the framework → Description drives execution → Discernment continuously verifies → Diligence sets boundaries and baselines at key points'
      },
      {
        title: 'The 12 Principles You Should Remember',
        principles: [
          'AI doesn\'t read minds — vague input amplifies vague output.',
          'The clearer the problem definition, the easier Delegation becomes.',
          'Complex tasks should be layered: goals, steps, judgment points, risk points.',
          'AI\'s strength isn\'t "always being correct" but "rapidly generating, transforming, synthesizing, and expanding."',
          'AI\'s fluent expression does not equal factual reliability.',
          'New problems aren\'t always solved by changing prompts — sometimes you need different tools or division of work.',
          'Description and Discernment naturally appear as a pair.',
          'Context, examples, constraints, and role are the most common and stable prompt improvement levers.',
          'Interaction style (performance) is often overlooked but directly impacts efficiency.',
          'Transparent disclosure and taking responsibility for outcomes cannot be outsourced to AI.',
          'Truly high-value results often come from human-AI complementarity, not simple replacement.',
          'AI fluency is a long-term habit, not a one-time set of tricks.'
        ]
      },
      {
        title: 'Connection Between Lesson 5 and Lesson 9',
        content: 'L5 uses Delegation to plan the project; L9 uses Description-Discernment loops to execute it. This is critical for vibe coding: break down tasks → draft → review → revise → form a stable workflow.'
      }
    ];
    CROSS_LESSON_DATA.reviewChecklistEn = [
      'Have I defined goals and success criteria first?',
      'Have I determined whether this is more like automation, augmentation, or agency?',
      'Have I done Delegation: clarified problem, platform, and task layers?',
      'Have I done Description: specified output, process, and performance?',
      'Have I done Discernment: checked result, process, and interaction?',
      'Have I done Diligence: confirmed data, disclosure, and responsibility?',
      'Am I treating AI as a mind-reading, blame-absorbing, always-correct system?',
      'Have I switched models, connected external tools, or redesigned division of work when necessary?',
      'Have I retained final human judgment and publishing responsibility?'
    ];
  }

  // Quiz English
  if (typeof QUIZ_DATA !== 'undefined') {
    const qEn = {
      1: { questionEn: 'Which four dimensions are included in the definition of AI fluency?', optionsEn: ['Effective, Efficient, Ethical, Safe', 'Fast, Accurate, Cost-saving, Powerful', 'Understanding, Application, Analysis, Creation', 'Input, Processing, Output, Feedback'], explanationEn: 'The course defines AI fluency as interacting with AI in ways that are effective, efficient, ethical, and safe.' },
      2: { questionEn: 'Augmentation means AI completely does the task for you.', explanationEn: 'Augmentation means you and AI complete the task together, with AI serving as a creative thinking partner — not replacing you.' },
      3: { questionEn: 'AI generated a customer email and sent it automatically without human review. Which D should be prioritized here?', optionsEn: ['Delegation', 'Description', 'Discernment', 'Diligence'], explanationEn: 'Auto-sending involves deployment diligence — ensuring human review before publication and taking responsibility for output.' },
      4: { questionEn: 'Getting different answers when asking AI the same question twice means the model is broken.', explanationEn: 'This may be normal non-deterministic behavior. Models perform probabilistic generation, not deterministic output.' },
      5: { questionEn: 'Prompt results have inconsistent formatting each time. Which D needs improvement?', optionsEn: ['Delegation', 'Description', 'Discernment', 'Diligence'], explanationEn: 'Output constraints in Description were not specified clearly, causing AI to generate different formats each time.' },
      6: { questionEn: 'What are the three components of Delegation?', optionsEn: ['Input, Processing, Output', 'Problem Awareness, Platform Awareness, Task Delegation', 'Plan, Execute, Review', 'Requirements, Design, Acceptance'], explanationEn: 'Delegation = Problem Awareness + Platform Awareness + Task Delegation.' },
      7: { questionEn: 'Code runs but crashes on all edge cases. Which competency are you most lacking?', optionsEn: ['Delegation', 'Description', 'Discernment', 'Diligence'], explanationEn: 'This is insufficient verification — failing to check boundary cases and exception handling. A Product/Process Discernment gap.' },
      8: { questionEn: 'Description means the longer the prompt, the better.', explanationEn: 'It\'s not about length but about relevant information being complete, clear, and actionable. Quality over quantity.' },
      9: { questionEn: 'You want to use AI to draft a market analysis report for your team. Which approach best demonstrates Diligence?', optionsEn: ['Paste competitor\'s internal data directly into AI', 'First confirm the AI service\'s data protection policies, then decide what information can be input', 'Use the longest possible prompt to ensure report quality', 'Have AI automatically send the report to clients'], explanationEn: 'This reflects Creation Diligence: confirming data protection and compliance before using AI.' },
      10: { questionEn: 'You discover AI snuck previously rejected elements back into its proposed plan. Which D is this about?', optionsEn: ['Delegation', 'Description', 'Discernment', 'Diligence'], explanationEn: 'This is a Process Discernment issue — AI\'s reasoning process showed "attention drift," not following prior discussion conclusions.' },
      11: { questionEn: 'What are the three dimensions of Description?', optionsEn: ['Input, Middle, Output', 'Product, Process, Performance', 'Text, Image, Code', 'Simple, Medium, Complex'], explanationEn: 'Description includes Product Description (output), Process Description (approach), and Performance Description (interaction style).' },
      12: { questionEn: 'In a "customer inquiry → quote → reply" workflow, which step most requires human judgment?', optionsEn: ['Formatting inquiry content', 'Translating customer email', 'Determining final quote amount', 'Generating email template'], explanationEn: 'Pricing involves business judgment, customer relationships, and risk assessment — a high-judgment step that must be kept with humans. Core Delegation thinking.' },
      13: { questionEn: 'The 4D framework only applies to chat-style AI interactions (like ChatGPT conversations).', explanationEn: 'The course explicitly states the 4Ds apply to automation, augmentation, and agency — far beyond chat scenarios.' },
      14: { questionEn: 'You find AI always replies in overly technical language, but your target audience is non-technical. Which D is primarily at issue?', optionsEn: ['Delegation', 'Description', 'Discernment', 'Diligence'], explanationEn: 'This is a Performance Description gap — you didn\'t specify the target audience and expected language style.' },
      15: { questionEn: 'You used AI to generate an SOP containing some fabricated step details. What should you do?', optionsEn: ['Send it directly to the team', 'Have an internal expert verify every step\'s accuracy first', 'Let AI verify its own accuracy', 'Just add an "AI-generated" label'], explanationEn: 'This requires both Discernment (verifying content accuracy) and Diligence (pre-deployment review). AI-generated SOPs must be verified by someone who knows the actual process.' }
    };
    QUIZ_DATA.forEach(q => {
      const en = qEn[q.id];
      if (en) Object.assign(q, en);
    });
  }
})();
