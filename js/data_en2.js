// AI Fluency — English content for Lessons 4-11
// Continues from data_en.js
(function() {
  'use strict';

  const EN2 = {
    'L4': {
      oneLinerEn: 'Good Delegation starts not with researching models, but with getting your problem, platform, and division of work straight.',
      coreGoalEn: 'Master the three-part Delegation process: Problem Awareness → Platform Awareness → Task Delegation.',
      positionEn: 'First D deep dive — translates framework into actionable delegation methodology',
      corePointsEn: [
        'Delegation primarily serves effective and efficient goals — making the right decisions about who does what.',
        'The surface meaning of Delegation is "deciding who does what," but the real difficulty lies in simultaneously understanding goals, task structure, human capabilities, AI capabilities, and risk boundaries.',
        'Truly good delegation doesn\'t primarily rely on AI knowledge — it first relies on your own professional understanding. The strongest AI users are often domain experts first, AI delegators second.',
        'Problem Awareness: Before invoking AI, answer these — what exactly do I need to accomplish? What problem am I solving? What does success look like?',
        'The course also asks you to identify work characteristics: which parts are simple but time-consuming? Which involve uncertainty and need a thinking partner? Which are knowledge gaps needing more information? Which require critical judgment?',
        'This step determines whether subsequent delegation can be done correctly. If the goal itself is unclear, even the strongest AI can\'t rescue the situation.',
        'Platform Awareness: You need a basic understanding of the AI ecosystem — different models, platforms, and applications vary greatly in speed, depth, accuracy, creativity, and tool integration.',
        'The course explicitly states: effective delegation isn\'t "find one universal model" but understanding the relative strengths of available options.',
        'This field changes extremely quickly, so platform awareness can\'t rely on memorizing comparison tables once — it requires continuous hands-on experimentation to form your own experienced judgment.',
        'Task Delegation: With both previous elements clear, you enter the actual division of work — which steps are best automated? Which benefit from collaboration? Which judgments must stay with humans? Which repeated interactions can be given to agents?',
        'This requires identifying different types of steps in your workflow, not generically "throwing the whole project to AI."',
        'Delegation = Problem Awareness + Platform Awareness + Task Delegation. Miss any one element and delegation easily goes wrong.'
      ],
      keyTakeawaysEn: [
        'Apply Delegation directly to project kickoff: map the workflow, identify time-consuming steps, judgment steps, data steps, exception steps, then decide which can be given to AI.',
        'When facing new tools, don\'t ask "which is best" but "which is best for this step." This is the core of platform awareness.',
        'Many "AI can\'t help" cases are fundamentally Delegation failures: the problem wasn\'t defined clearly, the wrong platform was chosen, or steps that shouldn\'t have been delegated were handed off.'
      ],
      misconceptionsEn: [
        { wrong: 'Delegation = automate everything you can', correct: 'The course emphasizes thinking about where human judgment should be preserved.' },
        { wrong: 'Try the model first, define needs later', correct: 'The more reliable order is the reverse — define the problem first.' },
        { wrong: 'Delegation only happens at the start', correct: 'You constantly re-delegate as projects evolve.' }
      ],
      practiceQuestionsEn: [
        'What are the success criteria for a current project of mine?',
        'In my workflow, which steps are "time-consuming but don\'t require much judgment" — most suitable for AI first?',
        'Which steps should I not fully outsource to AI even if it could do them?'
      ]
    },
    'L5': {
      oneLinerEn: 'This isn\'t a homework assignment — it\'s a method for turning Delegation from concept into actual project planning.',
      coreGoalEn: 'Apply Delegation through a hands-on project: select a project, clarify goals via conversation with AI, break down tasks, and make delegation decisions.',
      positionEn: 'Practice exercise for Delegation — creates the project plan used in later lessons',
      corePointsEn: [
        'Choose a medium-complexity, multi-step project you\'re genuinely interested in completing, as the practice subject for the remaining course exercises.',
        'Project selection criteria: substantial enough to contain multiple task types; not too large — completable in about 1 hour; must be something you actually want to do.',
        'The course offers multiple directions: communication (presentations, social posts, proposals, bios), research (trend studies, data analysis, product comparisons), creative (short stories, website structure, product concepts), learning (study plans, resource collections, tutorials).',
        'Step 2 is conversing with Claude to clarify project vision and goals. The course doesn\'t want you to "fire off requirements in one sentence" but encourages AI to ask questions back until you yourself are clearer about success criteria.',
        'Step 3 enters the Delegation perspective: work with Claude to break out major tasks.',
        'For each task, discuss individually: what skills, knowledge, or AI capabilities are needed? Which parts rely more on human strengths? Which are suitable for AI assistance? Where is collaboration most valuable?',
        'The course specifically warns: don\'t treat this step mechanically. Engage in genuine dialogue, question assumptions, and remain open to unexpected insights.',
        'The final output is a project plan containing both major tasks and corresponding delegation decisions.',
        'Save this plan — later Lesson 9 will continue building on it with Description and Discernment practice.',
        'The reflection questions also matter: What insights emerged during planning conversation? What\'s the hardest part of delegation? What additional information or skills do you need for better delegation?'
      ],
      keyTakeawaysEn: [
        'If you want to make the course truly useful, don\'t skip this lesson. Only by applying the 4Ds to your own real project will Description, Discernment, and Diligence come alive later.',
        'Consider creating your project plan with four columns: Task, Success Criteria, Human Lead Points, AI Can Handle Points.',
        'The best project for you might be: a business process upgrade plan, an AI service proposal, an automation system blueprint, a mini SOP, or an agent capability design.'
      ],
      misconceptionsEn: [
        { wrong: 'The bigger the practice project, the better', correct: 'The course explicitly requires medium complexity, completable in about 1 hour.' },
        { wrong: 'The project needs to be perfectly clear from the start', correct: 'The course encourages you to clarify through conversation with AI.' },
        { wrong: 'Delegation is just "assigning AI some work"', correct: 'It also helps you understand the project itself in reverse.' }
      ],
      practiceQuestionsEn: [
        'Does my chosen project truly meet the criteria: medium complexity, multiple steps, completable in 1 hour?',
        'What parts of this project are most worth keeping for human judgment?',
        'If I started today, what 5 tasks would I break out first?'
      ]
    },
    'L6': {
      oneLinerEn: 'Description isn\'t "write a longer prompt" — it\'s designing output, method, and collaborative behavior clearly.',
      coreGoalEn: 'Master the three dimensions of Description: Product (what output), Process (how to approach), and Performance (how to interact).',
      positionEn: 'Second D deep dive — the ability to communicate effectively with AI',
      corePointsEn: [
        'Description is defined as the ability to communicate with AI, not just a collection of "advanced prompt tricks."',
        'Description encompasses many actions: explaining tasks, asking questions, supplementing context, correcting wrong directions, guiding AI\'s thinking, and creating better "shared thinking environments."',
        'The course uses the contrast between "make dinner" and "providing a recipe, ingredients, and steps" to illustrate: AI output quality highly depends on how clearly you explain.',
        'AI doesn\'t read minds. Wherever you assume "it should know," it\'s worth considering whether you need to say it explicitly.',
        'Product Description: specify what output you want — task, context, format, audience, tone.',
        'AI shouldn\'t have to guess whether you want a checklist, summary, report, dialogue script, code, or analytical framework — these are best specified by you.',
        'Process Description: sometimes you need to specify not just the endpoint but how AI should get there.',
        'The core isn\'t "retraining the model" but translating your own experience and requirements in a specific context to the model.',
        'Performance Description: the course considers this the part most people overlook but find extremely valuable.',
        'AI isn\'t a database or vending machine — it\'s an interactive system that performs differently in different contexts.',
        'Product, Process, and Performance together constitute the complete Description competency.',
        'The course\'s conclusion is clear: when Description is done well, AI transforms from a "generic assistant" into a "collaborator tailored to your task."'
      ],
      keyTakeawaysEn: [
        'When writing prompts, don\'t just think about "what result I want" — also consider "how should it approach this" and "how should it work with me."',
        'Often poor results aren\'t because content details were missing, but because performance wasn\'t specified. For example, wanting fewer questions and direct outputs, or wanting it to challenge your assumptions like a consultant.',
        'For agent or system design, Description thinking transforms into: output specifications, process specifications, behavior specifications.'
      ],
      misconceptionsEn: [
        { wrong: 'Description = longer is better', correct: 'Not about length — about completeness, clarity, and actionability of relevant information.' },
        { wrong: 'Just specify the deliverable', correct: 'For complex tasks, process and interaction style are equally important.' },
        { wrong: 'Only applies to text tasks', correct: 'Design, analysis, programming, tutoring, and planning all need Description.' }
      ],
      practiceQuestionsEn: [
        'What do I most often miss: product, process, or performance?',
        'Is there a scenario where I actually wanted a "challenging partner" but didn\'t say so?',
        'How can I translate my own working methods into a process description?'
      ]
    },
    'L7': {
      oneLinerEn: 'The most useful part of prompting isn\'t fancy tricks — it\'s turning Description into a set of iterable communication actions.',
      coreGoalEn: 'Learn six foundational prompting techniques as practical implementations of Description: context, examples, constraints, steps, think first, and role/style/tone.',
      positionEn: 'Practical deep dive for Description — the most technique-heavy lesson',
      corePointsEn: [
        'Prompting sounds technical, but the core is quite simple — like delegating a task to a helpful new colleague: explain the direction, background, standards, and expectations clearly.',
        'The course defines prompting as the practical form of Description competency: clearly expressing what you want, how you want it done, and how you want to interact.',
        'Truly effective prompting combines "universal human communication principles" with "AI-specific considerations."',
        'The course presents 6 foundational techniques: providing context, giving examples, specifying constraints, breaking complex tasks into steps, asking AI to think before answering, and defining role/style/tone.',
        'Technique 1 — Context: The example improves from vague "Tell me about climate change" to specific "Explain three major impacts of climate change on tropical agriculture, incorporating real examples from the past decade."',
        'Context\'s role isn\'t making prompts look professional — it\'s narrowing AI\'s guessing space so answers align with your real scenario.',
        'Technique 2 — Examples: Sometimes "show, don\'t tell" is more effective than lengthy style descriptions. Few-shot prompting essentially provides pattern samples.',
        'Don\'t pile on examples from the start — first see if the model\'s default output already satisfies. Use examples only when you need a very specific, hard-to-describe style.',
        'Technique 3 — Output constraints: You can specify format, length, language, layout, color scheme, listing style — helping AI directly approach a deliverable result.',
        'Technique 4 — Breaking complex tasks into steps: If you only give goals without specifying process, AI may complete the task in ways you don\'t expect.',
        'Technique 5 — Think first: When you need more thorough consideration, explicitly require analysis of factors, constraints, and options before giving conclusions.',
        'Technique 6 — Define role, style, and tone: You can specify AI\'s persona, audience, and communication approach.',
        'Prompting is iterative and experimental. The first attempt being imperfect is normal — refine based on results by adding context, restructuring, changing formats, requesting multiple versions.',
        'Common mistakes: assuming AI can guess your intent; cramming too many unrelated tasks into one prompt; not defining success criteria; not giving feedback on poor output.'
      ],
      keyTakeawaysEn: [
        'Build a personal prompt template: task overview / scenario context / output format / process requirements / collaboration style / constraints / examples.',
        'For coding, automation, or solution design, role + constraints + steps are usually the three highest-value components.',
        'When output is poor, don\'t rush to switch models. First check: insufficient context? Better examples needed? Not enough constraints? Wrong interaction mode?'
      ],
      misconceptionsEn: [
        { wrong: 'Prompt engineering is a secret technical art', correct: 'The course emphasizes it\'s fundamentally a communication skill.' },
        { wrong: 'More examples is always better', correct: 'Examples should be representative, not piled in quantity.' },
        { wrong: 'The model automatically understands your identity, goals, and context', correct: 'This information is often worth explicitly providing.' }
      ],
      practiceQuestionsEn: [
        'If I were to upgrade my most-used prompt to a "professional version," which 3 types of information would I add?',
        'Was my most recent failed output lacking context, examples, or constraints?',
        'Can I make "asking AI to help me write prompts" a regular workflow?'
      ]
    },
    'L8': {
      oneLinerEn: 'Discernment is the quality system in AI collaboration: evaluate not just output, but also process and interaction.',
      coreGoalEn: 'Master three-dimensional evaluation: Product Discernment (output), Process Discernment (approach), Performance Discernment (interaction quality).',
      positionEn: 'Third D deep dive — the evaluation and judgment competency',
      corePointsEn: [
        'Discernment is defined as the ability to evaluate AI outputs, processes, and behaviors — judging whether AI products, approaches, and interaction patterns are appropriate.',
        'It\'s described as the "other side" of Description: Description is clearly expressing needs, Discernment is judging whether results truly meet those needs.',
        'Discernment\'s role: identifying when AI output has value and when it has problems; when it can be used directly and when it needs revision; when to stop and rethink.',
        'Good Discernment requires two types of capability: domain knowledge and understanding of typical AI shortcomings. Without a basis for judgment, verification is difficult.',
        'Product Discernment: Check — are the facts correct? Does it fit the target audience and purpose? Is the structure clear? Are requirements met? Does it truly solve the problem?',
        '"Looks like an answer" does not equal "ready to deliver."',
        'Process Discernment: Don\'t just look at the surface result — examine how AI arrived there. Watch for logical errors, attention drift, inappropriate steps, getting stuck on details, circular reasoning.',
        'A classic example: After several rounds of narrowing from 5 outline options, AI sneaks previously eliminated elements back in. This isn\'t a product problem — it\'s a process focus loss.',
        'For complex tasks, "trust in the process" is crucial because these tasks don\'t always have immediately verifiable single correct answers.',
        'Performance Discernment: Is the way AI communicates information helpful? Does it respond well to feedback? Is the communication too complex or too brief?',
        'Discernment doesn\'t stop at finding problems — when you discover issues, you should also provide feedback.',
        'Effective feedback includes at least four things: clearly stating what the problem is, explaining why it\'s a problem, suggesting improvement direction, and revising your instructions or examples when necessary.',
        'A critical relationship: when Discernment reveals problems, the solution is often better Description.',
        'But not all problems can be solved by fixing prompts. Sometimes you need to go back to Delegation — acknowledging the wrong tool, wrong approach, or even wrong problem path.'
      ],
      keyTakeawaysEn: [
        'For business documents, analysis, code, or design, fix acceptance into three questions: Is the result correct? Is the approach sound? Is the interaction effective?',
        'Many people only know how to modify content, not interaction style. Tuning performance can dramatically improve efficiency.',
        'Discernment also teaches: don\'t treat "modify the prompt" as the only solution. The model, tools, data integration, and task division may all need rethinking.'
      ],
      misconceptionsEn: [
        { wrong: 'Discernment is just fact-checking', correct: 'It also includes process and interaction evaluation.' },
        { wrong: 'With AI, I don\'t need domain expertise', correct: 'The more important the task, the more you need your domain judgment.' },
        { wrong: 'Finding problems means AI is bad', correct: 'It could mean Description was insufficient or Delegation was wrong from the start.' }
      ],
      practiceQuestionsEn: [
        'When reviewing AI output, what do I most often overlook — result, process, or interaction?',
        'Was there a time I thought it was a content problem but it was actually a performance mismatch?',
        'How can I make my feedback more specific so AI actually improves on the right point?'
      ]
    },
    'L9': {
      oneLinerEn: 'Truly high-quality human-AI collaboration isn\'t one-shot — it\'s continuous iteration between Description and Discernment.',
      coreGoalEn: 'Apply Description-Discernment loops to execute the project plan from Lesson 5, with each dimension evaluated across Product, Process, and Performance.',
      positionEn: 'Practice exercise combining Description + Discernment — the iterative workflow',
      corePointsEn: [
        'This lesson requires you to take out the project selected in Lesson 5 and truly complete it using Description-Discernment iterative loops.',
        'Step 1: Review your project plan — quickly revisit your Delegation decisions. Which tasks are human-led, which suit AI, which need collaboration? Revise the plan if new understanding warrants it.',
        'Step 2: Prepare your Description strategy across three dimensions.',
        'Product Description: What specifically should Claude produce for each task? Format, style, length, detail depth?',
        'Process Description: How should Claude approach it? Using what methods, frameworks, steps, perspectives, standards?',
        'Performance Description: How should Claude behave during collaboration? Concise or detailed? Challenging or supportive? Creative or analytical?',
        'The course explicitly requires: think through these three dimensions before executing, rather than trying randomly and hoping for luck.',
        'Step 3: Enter the Description-Discernment loop. For each task, describe clearly first, then evaluate the received content, then refine and iterate.',
        'Discernment also maps to three levels: Product Discernment, Process Discernment, Performance Discernment.',
        'In the refine phase, clearly tell AI: what worked, what didn\'t, how you want to adjust instructions, and what you want to see in the next round.',
        'The course strongly emphasizes human expertise: bring your own perspective, knowledge, creativity, and judgment into the process rather than outsourcing final decisions to AI.',
        'Ultimate responsibility remains with humans: what to keep, modify, discard, and publish should all be your decisions.'
      ],
      keyTakeawaysEn: [
        'This lesson teaches a universal workflow: define → generate → verify → correct; this applies consistently to writing code, creating proposals, doing research, and building automation.',
        'If you\'ll be training your own agent or team members, this loop can directly serve as SOP: requirement definition → first draft → result/process/interaction review → feedback → next round.',
        'Keep a brief log for each iteration: what I changed, why I changed it, what I want to see in the next round. This significantly improves collaboration quality.'
      ],
      misconceptionsEn: [
        { wrong: 'Multiple iterations means my prompt was bad', correct: 'The course considers iteration the normal state of quality collaboration.' },
        { wrong: 'Good prompts eliminate the need for Discernment', correct: 'Judgment and refinement are where core value lies.' },
        { wrong: 'The final output is mainly AI\'s work', correct: 'Humans must inject their expertise and judgment, and take responsibility for the product.' }
      ],
      practiceQuestionsEn: [
        'Among Product/Process/Performance descriptions, which did I most often neglect in my own project?',
        'When giving feedback, do I only say "not right" without explaining "why it\'s wrong and how to fix it"?',
        'Can I record my next AI collaboration session in a log format?'
      ]
    },
    'L10': {
      oneLinerEn: 'Diligence means AI use goes beyond pursuing results to also consider risk, transparency, and responsibility.',
      coreGoalEn: 'Master three dimensions of Diligence: Creation (choosing AI responsibly), Transparency (disclosing AI involvement appropriately), Deployment (taking responsibility for AI-assisted outputs).',
      positionEn: 'Fourth D deep dive — the ethical and safety competency',
      corePointsEn: [
        'The first three competencies lean toward effectiveness and efficiency, while Diligence completes the ethical and safe halves.',
        'Diligence\'s core isn\'t simply "be careful" — it\'s taking responsibility for AI interactions, making the process rigorous, transparent, and accountable.',
        'The course uses a driving analogy: we don\'t just aim to arrive as fast as possible — we also follow rules, ensure safety, and consider our impact on others. The same applies to AI use.',
        'AI collaboration never happens in a vacuum: your inputs, outputs, and decisions may affect colleagues, clients, readers, candidates, students, users, or the public.',
        'Diligence starts with "system awareness": How was this system trained? What data was used? Who owns my input data? Who might access it? What external impacts might occur? Does it align with my values and organizational policies?',
        'Creation Diligence: When choosing which AI system to use, are you intentional, critical, and boundary-aware? Key concerns include system selection, data protection, privacy, security, and value alignment.',
        'A practical scenario: before inputting sensitive company information into AI, you must first confirm the service\'s data protection policies and whether your organization allows it.',
        'Transparency Diligence: Different contexts — personal, academic, creative, professional — may have different requirements for disclosing AI involvement and to what extent.',
        'Transparency isn\'t about going through the motions — it\'s about maintaining trust and respect. People affected have the right to know whether AI played a significant role.',
        'Deployment Diligence: When sharing AI-generated content externally, you are the responsible party, not the AI. Fact verification, bias checking, accuracy confirmation, and rights checking are essential.',
        'The course states directly: even with AI involvement in drafting, final publication standards remain as high as for purely human work — requirements cannot be lowered.',
        'Creation + Transparency + Deployment together constitute the complete Diligence competency.',
        'If we want AI to be fairer, safer, and more beneficial, user behavior itself is an important variable shaping these outcomes.'
      ],
      keyTakeawaysEn: [
        'If you want AI in real business processes, Diligence can\'t wait until project completion — it starts with tool selection, permission design, data flow, disclosure mechanisms, and pre-launch review.',
        'Create a simple checklist: Can this data be input? Who will see it? Should AI involvement be disclosed? Am I willing to sign off on the final result?',
        'For agent scenarios especially: the more automated and independent, the more you need pre-designed boundaries, logging, auditing, and human fallback.'
      ],
      misconceptionsEn: [
        { wrong: 'Diligence is only for legal departments', correct: 'Every user makes choices and bears consequences.' },
        { wrong: 'If AI writes it first, I\'m not responsible', correct: 'The course explicitly rejects this view.' },
        { wrong: 'Disclosing AI involvement looks unprofessional', correct: 'Appropriate transparency often builds greater trust.' }
      ],
      practiceQuestionsEn: [
        'Among the information I most commonly input to AI, which should I actually not input directly?',
        'In my work scenarios, when should I explicitly disclose AI involvement?',
        'If output goes wrong, can I clearly state "who decided to go live"?'
      ]
    },
    'L11': {
      oneLinerEn: 'The course ending isn\'t the end — it requires you to turn the 4Ds into long-term, transferable work habits.',
      coreGoalEn: 'Synthesize all 4Ds into a sustainable practice: framework review, ongoing skill development, and taking responsibility for AI collaboration outcomes.',
      positionEn: 'Course conclusion — from learning to long-term habit formation',
      corePointsEn: [
        'The conclusion first reviews the four Ds: Delegation determines human-AI division of work; Description makes needs, process, and interaction clear; Discernment continuously evaluates quality; Diligence ensures responsibility, transparency, and safety.',
        'Description and Discernment each have three sub-dimensions (product/process/performance); Diligence has three sub-dimensions (creation/transparency/deployment).',
        'The four competencies apply to all three interaction modes — automation, augmentation, and agency.',
        'On Delegation, the conclusion re-emphasizes: your professional knowledge and judgment remain the foundation of high-quality AI use. AI will not replace your understanding of the problem itself.',
        'The strongest results often emerge when humans and AI iterate, complementing each other\'s strengths — neither side working alone but pushing results to levels neither could achieve independently.',
        'On Description, the most effective approach isn\'t always the longest prompt, but often a thoughtful conversation with context, examples, and feedback.',
        'On Discernment, the course defines critical evaluation as a non-negotiable responsibility. You cannot abandon your verification duty just because AI sounds fluent.',
        'On Diligence, humans must take responsibility for how AI is used and its impact on others; appropriately disclosing AI\'s role is an integral part of trust and integrity.',
        'These capabilities won\'t develop overnight — they grow naturally through repeated practice. Each time you better delegate, describe, evaluate, and take responsibility, AI fluency strengthens.',
        'The course doesn\'t pursue perfection — it pursues awareness, commitment, and intentionality in working with AI.',
        'The framework is designed to be "cross-tool, cross-era" applicable, but whether you truly benefit depends on continuous application and ongoing self-improvement.',
        'AI isn\'t a silver bullet or magic. How useful and safe it is depends largely on how we use it.',
        'Three final reminders: continue developing your professional expertise; practice Description + Discernment dialogues; always take responsibility for collaboration outcomes and their impact.'
      ],
      keyTakeawaysEn: [
        'For long-term AI integration into workflows, the most valuable takeaway isn\'t any single technique but a stable habit: first think about division of work, then describe needs clearly, then verify rigorously, finally take responsibility for going live.',
        'The most valuable point from the conclusion: treat AI as a "designable collaboration system" rather than one-off, scattered Q&A.',
        'When tools update, don\'t panic — as long as the 4Ds are in place, you can quickly judge where a new tool fits in your workflow.'
      ],
      misconceptionsEn: [
        { wrong: 'Completing the course means "mastering AI"', correct: 'The course is clear: this is just the beginning.' },
        { wrong: 'As models improve, human 4D capabilities become less important', correct: 'The stronger the model, the more human judgment and responsibility matter.' },
        { wrong: 'The goal of AI fluency is perfection', correct: 'The course emphasizes continuous improvement over perfection.' }
      ],
      practiceQuestionsEn: [
        'If I had to compress the entire course into my personal work principles, what would the 4 sentences be?',
        'Which link do I most need to deliberately practice next?',
        'How can I turn the 4Ds into a fixed template rather than something I forget after watching?'
      ]
    }
  };

  // Merge into lesson objects
  const origApply = window._applyI18nData;
  window._applyI18nData = function() {
    if (origApply) origApply();
    // Apply EN2
    [COURSE_DATA.lessons,
     typeof LESSONS_PART2 !== 'undefined' ? LESSONS_PART2 : [],
     typeof LESSONS_PART3 !== 'undefined' ? LESSONS_PART3 : []
    ].forEach(arr => {
      arr.forEach(lesson => {
        const en = EN2[lesson.id];
        if (en) Object.assign(lesson, en);
      });
    });
  };
})();
