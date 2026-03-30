// AI Fluency - Lessons 8-11 + 跨章节整合 + 自测题数据
const LESSONS_PART3 = [
  // ========== LESSON 8 ==========
  {
    id: 'L8',
    number: 8,
    title: 'A closer look at Discernment',
    titleZh: '深入 Discernment（辨别）',
    duration: '约 5.2 分钟',
    oneLiner: 'Discernment 是 AI 协作里的质检系统：不只是看输出，还要看过程与互动。',
    coreGoal: '掌握 Discernment 的三层结构：结果判断、过程判断、互动判断',
    position: '4D 深挖第三课',
    corePoints: [
      '课程把 Discernment 定义为：评估 AI 的 outputs、processes、behaviors 的能力，也就是判断 AI 产物、AI 做事方式、以及 AI 与你互动方式是否合适。',
      '它把 Discernment 描述成 Description 的"另一面"：Description 是你清楚表达需求，Discernment 是你判断返回结果是否真的满足这些需求。',
      '课程强调，Discernment 的作用是：识别 AI 输出什么时候有价值、什么时候有问题；什么时候可直接用，什么时候还需要改；什么时候应该停下来重新思考。',
      '想做好 Discernment，需要两类能力：一是领域知识，二是对 AI 典型缺陷的理解。因为没有判断基准的人，很难做好验收。',
      '第一类是 product discernment（结果判断）。你要检查：事实是否正确？是否适合目标受众与目的？结构是否清楚？是否满足要求？是否真正解决了问题？',
      '也就是说，"看起来像答案"并不等于"可以交付"。',
      '第二类是 process discernment（过程判断）。这里不是看结果表面，而是看 AI 是如何走到这个结果的。',
      '课程提醒你留意：逻辑错误、注意力滑移、采用了不恰当步骤、被某个细节卡住无法转向、循环论证等问题。',
      '它给了一个很典型的例子：你与 AI 一起从 5 个大纲方案里选一个，来回几轮后，AI 又把你已淘汰的元素偷偷带回来了。这就不是单纯的 product 问题，而是 process 失焦。',
      '课程指出，复杂任务里"对过程的信任"极其关键。因为这类任务不总有立刻可验证的唯一正确答案，所以你必须看 AI 是否在沿着正确方向推进。',
      '第三类是 performance discernment（互动表现判断）。课程特别区分了 process 与 performance：前者是 AI 在做什么工作，后者是它在做这份工作时，和你配合得好不好。',
      '你可以检查：它传递信息的方式是否有助于你理解？是否对反馈反应良好？沟通是否过度复杂或过于简略？',
      '课程举的例子很贴近日常：有时你需要直接答案，它却不停追问；有时你需要细致分析，它却只给一小段敷衍总结。这都属于 performance 不匹配。',
      '课程接着说，Discernment 不是停在挑错；当你发现问题时，还要给反馈。',
      '有效反馈至少包含四件事：明确指出问题是什么；解释为什么它是问题；给出改进方向；必要时修正你的说明或示例。',
      '这里课程给出了一个关键关系：当 Discernment 发现问题时，很多时候解决方案是更好的 Description。',
      '不过课程也提醒：并不是所有问题都能靠改 prompt 解决。有时你需要回到 Delegation，承认自己选错了工具、选错了做法，甚至问题路径本身就不对。',
      '最后总结：product + process + performance 三者合起来，构成完整的 Discernment；它确保 AI 协作最终仍受人类判断主导。'
    ],
    keyTakeaways: [
      '如果你做业务文档、分析、代码或方案设计，建议把验收固定拆成三问：结果对吗？路径靠谱吗？互动舒服吗？',
      '很多人只会改内容，不会改互动方式。其实 performance 调好后，效率会大幅提升。',
      'Discernment 还告诉你：不要把"修改 prompt"当唯一解法。模型、工具、数据接入方式、任务分工都有可能需要重做。'
    ],
    misconceptions: [
      { wrong: 'Discernment 就是查事实', correct: '其实它还包括过程与互动判断。' },
      { wrong: '有 AI 就不需要我懂行', correct: '课程明确：相反，越重要的任务越需要你的领域判断。' },
      { wrong: '发现问题就是 AI 不行', correct: '也可能是 Description 不够好，或 Delegation 一开始就错了。' }
    ],
    practiceQuestions: [
      '我在验收 AI 输出时，最常忽视的是结果、过程还是互动？',
      '有没有一次我以为是内容问题，其实是 performance 不匹配？',
      '怎样把我的反馈写得更具体，让 AI 真正改到点上？'
    ],
    officeAutomation: [
      { scenario: '文档/方案验收', mapping: '三维验收：结果质量→推理过程→互动方式', risk: '只看"输出看起来像答案"就直接用，不检查推理过程。' }
    ],
    keyTerms: [
      { term: 'Product Discernment', zh: '结果判断', def: '检查 AI 输出的事实正确性、适用性和完整性' },
      { term: 'Process Discernment', zh: '过程判断', def: '审视 AI 推理和工作过程的合理性' },
      { term: 'Performance Discernment', zh: '互动判断', def: '评估 AI 与你的配合方式是否合适' }
    ]
  },

  // ========== LESSON 9 ==========
  {
    id: 'L9',
    number: 9,
    title: 'Project execution with Description-Discernment loops（练习）',
    titleZh: 'Description-Discernment 循环执行项目（练习）',
    duration: '练习：30-60 分钟',
    oneLiner: '真正高质量的人机协作，不是一轮完成，而是持续在描述与判断之间来回迭代。',
    coreGoal: '通过实际项目练习 Description-Discernment 循环',
    position: '第二次实操练习，与 L5 形成完整项目闭环',
    corePoints: [
      '这节要求你把 Lesson 5 选好的项目重新拿出来，并用 Description 与 Discernment 的循环真正把它做完。',
      '第 1 步是复盘 project plan：快速回看你之前关于 Delegation 的决定——哪些任务由人主导，哪些适合 AI，哪些需要协作。必要时可根据新理解修正计划。',
      '第 2 步是准备你的 Description 策略，而且要求你从三个层面来想。',
      '第一是 Product Description：每个任务你具体要 Claude 产出什么？格式是什么？风格是什么？长度多长？细节深度到哪一层？',
      '第二是 Process Description：你希望 Claude 怎么做？用什么方法、框架、步骤、视角、标准？',
      '第三是 Performance Description：在合作中你希望 Claude 如何表现？简洁还是详细？挑战你还是支持你？偏创意还是偏分析？',
      '课程明确要求：在真正执行前，先把这三个层面想清楚，而不是一边乱试一边碰运气。',
      '第 3 步是进入 Description-Discernment loop。对每个任务，你先清楚描述，再评估收到的内容，然后根据判断去修正与迭代。',
      '课程把 Discernment 也对应拆成三个层面：Product Discernment、Process Discernment、Performance Discernment。',
      '也就是说，你不只看内容本身，还看它的做法是否得当、互动方式是否帮到你。',
      '在 refine（细化）阶段，课程建议你清楚告诉 AI：哪些地方有效、哪些地方不行、你要怎样调整说明、以及你希望看到怎样的下一轮。',
      '课程还非常强调 human expertise：你要把自己的视角、知识、创造力与判断真正加进去，而不是把最终决策交给 AI。',
      '最终责任仍在人：保留什么、修改什么、丢弃什么，都应由你做决定。',
      '课程反思题也值得认真做：哪些描述方式最有效？Description 和 Discernment 哪个更费力？项目实际执行与原计划相比改了什么？为什么？'
    ],
    keyTakeaways: [
      '这节其实在教你一个通用工作流：先定义，再生成，再验收，再纠偏；这和写代码、做方案、做调研、做自动化都非常一致。',
      '如果你将来训练自己的 agent 或团队成员，也可以直接把这个 loop 当成 SOP：需求定义 → 初版 → 结果验收/过程验收/互动验收 → 反馈 → 下一轮。',
      '你可以把每次迭代留下一个简短日志：我改了什么、为什么改、下一轮想看到什么。这会显著提高协作质量。'
    ],
    misconceptions: [
      { wrong: '多轮迭代说明我 prompt 写得不行', correct: '课程反而认为迭代是正常状态。' },
      { wrong: '有了好 prompt 就不需要 Discernment', correct: '错，判断与修正是核心价值所在。' },
      { wrong: '最终成果主要是 AI 的', correct: '课程明确：人类要把自己的专业与判断放进去，并对成品负责。' }
    ],
    practiceQuestions: [
      '在我自己的项目里，Product / Process / Performance 三种描述，哪一种最容易被我忽略？',
      '我给反馈时，是不是只会说"不对"，却没说"为什么不对、怎么改"？',
      '我能不能把下一次 AI 协作用日志方式记录下来？'
    ],
    officeAutomation: [
      { scenario: 'Vibe Coding 开发循环', mapping: '需求定义→初版代码→三维验收(功能/实现/配合)→反馈→迭代', risk: '不做过程验收，只看"代码能跑"就上线。' }
    ],
    keyTerms: [
      { term: 'Description-Discernment Loop', zh: '描述-辨别循环', def: '在描述需求和评估结果之间反复迭代的协作模式' },
      { term: 'Refine', zh: '细化/修正', def: '根据验收结果调整描述和要求的过程' }
    ]
  },

  // ========== LESSON 10 ==========
  {
    id: 'L10',
    number: 10,
    title: 'A closer look at Diligence',
    titleZh: '深入 Diligence（审慎）',
    duration: '约 7.0 分钟',
    oneLiner: 'Diligence 让 AI 使用不只追求结果，还兼顾风险、透明与责任。',
    coreGoal: '掌握 Diligence 的三层结构：创建审慎、透明审慎、部署审慎',
    position: '4D 深挖第四课，伦理与安全的落地',
    corePoints: [
      '课程指出，前三个能力更偏向 effectiveness 与 efficiency，而 Diligence 则把 ethical 与 safe 这两半补齐。',
      'Diligence 的核心不是"小心一点"这么简单，而是对 AI 互动承担责任，让整个过程更严谨（rigorous）、透明（transparent）、可问责（accountable）。',
      '课程用开车类比：我们开车不只追求尽快到达，也要守规则、注意安全、考虑自己对他人的影响。AI 使用同理。',
      '它提醒我们，AI 协作从不发生在真空里：你的输入、你的输出、你的决定，都可能影响同事、客户、读者、候选人、学生、用户或公众。',
      '因此，Diligence 从"对系统有批判意识"开始：这个系统怎么训练的？用了什么数据？我输入的数据归谁？谁可能访问？会有什么外部影响？它符合我的价值观和组织政策吗？',
      '课程给出一个很实用的场景：把公司敏感信息输入 AI 之前，你必须先确认该服务的数据保护政策，以及组织是否允许这样做。',
      '第一部分叫 creation diligence（创建/使用前审慎）。它指你在选择使用哪个 AI 系统、以及如何使用时，是否有意识、有批判性、有边界。关键词：系统选择、数据保护、隐私、安全、价值观对齐、组织政策对齐。',
      '第二部分叫 transparency diligence（透明审慎）。不同情境——个人、学术、创意、职业——对是否披露 AI 参与、披露到什么程度，要求可能不同。',
      '但课程把责任放回给使用者：你必须主动思考谁需要知道 AI 参与、什么时候告知、告知到什么粒度最合适。',
      '透明不是为了走形式，而是为了维持信任与尊重。被影响的人有权知道 AI 是否在其中扮演了重要角色。',
      '课程举例：如果你用 AI 帮团队提案起草草稿，就应向同事说明哪些部分由 AI 辅助，以便大家在同一事实基础上协作。',
      '第三部分叫 deployment diligence（部署/发布审慎）。课程说得很直接：对外分享 AI 生成内容时，责任主体是你，不是 AI。',
      '因此你要做事实核验、偏见检查、准确性确认、使用权/版权检查，以及其他一切足以让你能为产出背书的审查。',
      '课程用记者写稿的例子说明：即便 AI 参与起草，最终发布标准仍然与纯人工作品一样高，不能降低要求。',
      'Diligence 的难点在于：不同组织、行业、情境的标准可能不同，而且法律法规仍在变化中。',
      '所以课程建议你建立自己的使用准则，同时在职业环境中熟悉组织政策与行业标准，并持续关注法规变化。',
      '最后总结为三部分：creation diligence、transparency diligence、deployment diligence 共同构成完整的 Diligence competency。',
      '课程最后一句很重要：如果我们想要 AI 更公平、更安全、更有益，用户自己的行为就是塑造这一切的重要变量。'
    ],
    keyTakeaways: [
      '如果你要把 AI 用进真实业务，Diligence 不能等到项目结束再想，而要从工具选择、权限设计、数据流向、披露机制、上线前审查就开始。',
      '你可以为自己做一个简单 checklist：这能不能输？谁会看到？需不需要说明 AI 参与？我愿不愿意对最终结果签字？',
      '对 Agent 场景尤其要注意：越自动、越独立，越要提前设计边界、日志、审计和人工兜底。'
    ],
    misconceptions: [
      { wrong: 'Diligence 只是法律部门的事', correct: '错，任何使用者都在做选择与承担后果。' },
      { wrong: '只要 AI 先写，我就不必负责', correct: '课程明确反对这一点。' },
      { wrong: '披露 AI 参与会显得不专业', correct: '事实上，恰当透明往往更有助于建立信任。' }
    ],
    practiceQuestions: [
      '我现在最常输入 AI 的信息里，哪些其实不应该直接输入？',
      '在我的工作场景里，什么情况下应该明确披露 AI 的参与？',
      '如果一个产出出问题，我是否能清楚说出"是谁决定上线的"？'
    ],
    officeAutomation: [
      { scenario: '自动发送客户邮件', mapping: '创建审慎(选择安全的AI服务)→透明审慎(团队知晓AI参与)→部署审慎(发送前人工审核)', risk: 'AI 生成邮件自动发出，无人审核内容准确性。' },
      { scenario: '数据处理自动化', mapping: '确认数据合规→设计日志审计→保留人工审批节点→明确责任归属', risk: '敏感客户数据直接输入AI，未确认数据保护政策。' }
    ],
    keyTerms: [
      { term: 'Creation Diligence', zh: '创建审慎', def: '选择和开始使用AI时的审慎考量' },
      { term: 'Transparency Diligence', zh: '透明审慎', def: '关于AI参与的恰当披露' },
      { term: 'Deployment Diligence', zh: '部署审慎', def: '发布AI产出前的审查责任' },
      { term: 'Accountability', zh: '可问责性', def: '对AI使用结果承担责任' }
    ]
  },

  // ========== LESSON 11 ==========
  {
    id: 'L11',
    number: 11,
    title: 'Conclusion',
    titleZh: '总结',
    duration: '约 5.6 分钟',
    oneLiner: '结课不是结束，而是要求你把 4D 变成长期、可迁移的工作习惯。',
    coreGoal: '总结 4D 框架，建立持续改进的习惯',
    position: '课程终章，从学习到行动',
    corePoints: [
      '结尾首先回顾四个 D：Delegation 负责决定人机分工；Description 负责把需求、过程和互动方式说清；Discernment 负责持续评估质量；Diligence 负责责任、透明与安全。',
      '课程把 Description 与 Discernment 的三个子维度再次并列：product / process / performance；把 Diligence 的三个子维度再次并列：creation / transparency / deployment。',
      '课程提醒：这四种能力适用于三种互动方式——automation、augmentation、agency。也就是说，框架不是只为聊天式问答设计的。',
      '在 Delegation 上，结语再次强调：你的专业知识与判断仍然是 AI 高质量使用的基础。AI 不会替代你对问题本身的理解。',
      '它认为最强结果往往出现在人和 AI 迭代叠加彼此长处的时候，也就是双方都不是独立完成，而是共同把结果推到任何一方单独做不到的位置。',
      '在 Description 上，课程再次提醒：最有效的并不总是超长 prompt，而常常是有上下文、有例子、有反馈的 thoughtful conversation（有思考的对话）。',
      '在 Discernment 上，课程把批判性评估定为不可协商责任（non-negotiable responsibility）。这意味着：你不能因为 AI 很流畅，就放弃验收义务。',
      '在 Diligence 上，课程强调人类必须对 AI 的使用方式及其对他人的影响负责；恰当披露 AI 角色，是信任与完整性的组成部分。',
      '课程还特别指出，这些能力不会一夜练成，而是在反复练习中自然增长：你每一次更好地委派、描述、判断、负责，AI fluency 就更强一点。',
      '课程说它不追求完美，而追求 awareness、commitment、intentionality——也就是有意识、有投入、有意图地与 AI 工作。',
      '它再次说明，这个框架设计成"跨工具、跨时代"可用，但是否真正受益，取决于用户是否持续应用、持续更新自己。',
      '结语也很朴素：AI 不是银弹，不是魔法；它有用和安全到什么程度，很大程度取决于我们如何使用它。',
      '因此，课程最后给出三条总提醒：继续提升自己的专业能力；练习 Description + Discernment 的来回对话；始终对协作结果与影响承担责任。'
    ],
    keyTakeaways: [
      '如果你准备长期把 AI 纳入工作流，最值得带走的不是某个技巧，而是一个稳定习惯：先想分工，再说清需求，再严肃验收，最后担责上线。',
      '对你这样的实践者，结语最有价值的一点是：把 AI 当作"可设计的协作系统"，而不是一次次零散问答。',
      '当工具更新时，不必慌；只要 4D 在，你很快就能判断新工具该放到流程哪里。'
    ],
    misconceptions: [
      { wrong: '学完整门课就算"掌握 AI"', correct: '课程明确说，这只是开始。' },
      { wrong: '只要模型进步，人的 4D 能力就不重要', correct: '实际上模型越强，人的判断与责任越重要。' },
      { wrong: 'AI fluency 的目标是完美', correct: '课程更强调持续改进。' }
    ],
    practiceQuestions: [
      '如果我要把整门课压缩成我的个人工作原则，会写成哪 4 句？',
      '我接下来最需要刻意练习的是哪一环？',
      '我怎样把 4D 变成一个固定模板，而不是看完课就忘？'
    ],
    officeAutomation: [
      { scenario: '建立个人 AI 工作流', mapping: '把 4D 固化为工作 SOP：每个 AI 项目都过一遍 Delegation→Description→Discernment→Diligence', risk: '学完课程但不建立固定习惯，仅停留在零散使用。' }
    ],
    keyTerms: [
      { term: 'Non-negotiable Responsibility', zh: '不可协商的责任', def: '对AI输出的批判性评估是使用者不可放弃的义务' },
      { term: 'Intentionality', zh: '有意图性', def: '有目的、有意识地与AI协作' }
    ]
  }
];

// 跨章节整合数据
const CROSS_LESSON_DATA = {
  title: '跨章节整合：把整门课真正串起来',
  sections: [
    {
      title: '一个成熟的 AI 工作流长什么样',
      steps: [
        '先定义目标与成功标准：我到底要完成什么，什么才算合格',
        '识别任务类型与互动模式：这是 automation、augmentation 还是 agency',
        '做 Delegation：梳理任务、识别人类判断点、选择模型与工具、决定分工',
        '做 Description：把输出、过程和互动方式说清楚，必要时补背景、示例、约束',
        '让 AI 产出初版：草稿、方案、分析、代码、提纲、分类结果等',
        '做 Discernment：检查结果质量、过程正确性、互动适配度',
        '必要时迭代：改描述、换方法、换工具、重做分工',
        '做 Diligence：确认数据、披露、责任、风险、上线标准',
        '最终落地：由人类作出保留、修改、放弃和发布的决定'
      ]
    },
    {
      title: '四个 D 的关系图（文字版）',
      items: [
        'Delegation 决定"谁做什么"',
        'Description 决定"怎么告诉 AI 去做"',
        'Discernment 决定"做出来的东西值不值得用"',
        'Diligence 决定"这样做是否合适，以及谁来负责"'
      ],
      flow: 'Delegation 先搭框 → Description 发动执行 → Discernment 连续校检 → Diligence 在关键节点设边界与底线'
    },
    {
      title: '你最应该记住的 12 条原则',
      principles: [
        'AI 不会读心，模糊输入会放大模糊输出',
        '问题定义越清楚，Delegation 越容易做对',
        '复杂任务最好分层：目标、步骤、判断点、风险点',
        'AI 的强项不是"永远正确"，而是"快速生成、变换、综合和扩展"',
        'AI 的流畅表达不等于事实可靠',
        '新问题不一定只靠换 prompt 解决，也可能要换工具、换分工',
        'Description 与 Discernment 是天然成对出现的',
        '上下文、示例、约束、角色，是最常见也最稳的 prompt 提升杠杆',
        '互动方式（performance）常被忽视，但直接影响效率',
        '透明披露与结果负责，不能外包给 AI',
        '真正高价值的结果，常来自人机互补，而不是简单替代',
        'AI fluency 是长期习惯，不是一组一次性技巧'
      ]
    },
    {
      title: 'Lesson 5 与 Lesson 9 的关联',
      content: 'L5 用 Delegation 规划项目，L9 用 Description-Discernment loops 执行项目。这对于 vibe coding 非常关键，对应：先拆任务→再出草稿→再 review→再修正→再形成稳定工作流。'
    }
  ],
  reviewChecklist: [
    '我有没有先定义目标与成功标准？',
    '我有没有判断当前更像 automation、augmentation 还是 agency？',
    '我有没有做 Delegation：想清 problem、platform、task 三层？',
    '我有没有做 Description：说清 output、process、performance？',
    '我有没有做 Discernment：检查 result、process、interaction？',
    '我有没有做 Diligence：确认 data、disclosure、responsibility？',
    '我是不是把 AI 当成了会读心、会背锅、永远正确的系统？',
    '我有没有在必要时切换模型、接外部工具、或重新设计分工？',
    '我是否保留了最终的人类判断与发布责任？'
  ]
};

// 自测题数据
const QUIZ_DATA = [
  { id: 1, type: 'choice', question: 'AI fluency 的定义中包含哪四个维度？', options: ['有效、高效、伦理、安全', '快速、准确、节省、强大', '理解、应用、分析、创造', '输入、处理、输出、反馈'], answer: 0, explanation: '课程定义 AI fluency 为以有效（effective）、高效（efficient）、合乎伦理（ethical）、安全（safe）的方式与 AI 互动。', relatedD: 'all', relatedLesson: 'L1' },
  { id: 2, type: 'judgment', question: 'Augmentation 就是让 AI 完全替你做任务。', answer: false, explanation: 'Augmentation 是你与 AI 共同完成任务，AI 作为创意思考伙伴帮助你推进，而不是替你做。', relatedD: 'delegation', relatedLesson: 'L2A' },
  { id: 3, type: 'whichD', question: 'AI 生成了一封客户邮件并自动发出，没有经过人工审核。这里最优先需要考虑哪个 D？', options: ['Delegation', 'Description', 'Discernment', 'Diligence'], answer: 3, explanation: '自动发送涉及部署审慎（deployment diligence），需要确保发布前有人工审核，对输出负责。', relatedD: 'diligence', relatedLesson: 'L10' },
  { id: 4, type: 'judgment', question: '同一个问题问 AI 两次得到不同答案，说明模型出了故障。', answer: false, explanation: '这可能是非确定性（non-determinism）的正常表现。模型是概率性生成，而不是确定性输出。', relatedD: 'discernment', relatedLesson: 'L3B' },
  { id: 5, type: 'whichD', question: '提示词每次结果格式不一样，主要是哪块没做好？', options: ['Delegation', 'Description', 'Discernment', 'Diligence'], answer: 1, explanation: 'Description 中的输出约束（constraints）没有明确，导致 AI 每次生成不同格式。', relatedD: 'description', relatedLesson: 'L6' },
  { id: 6, type: 'choice', question: 'Delegation 的三个组成部分是什么？', options: ['输入、处理、输出', '问题认知、平台认知、任务委派', '计划、执行、反馈', '需求、设计、验收'], answer: 1, explanation: 'Delegation = Problem Awareness + Platform Awareness + Task Delegation', relatedD: 'delegation', relatedLesson: 'L4' },
  { id: 7, type: 'whichD', question: '代码能跑但异常输入全挂，说明你最缺哪项能力？', options: ['Delegation', 'Description', 'Discernment', 'Diligence'], answer: 2, explanation: '这属于验收不足——没有检查边界情况和异常处理，是 Discernment 中 product/process 判断的缺失。', relatedD: 'discernment', relatedLesson: 'L8' },
  { id: 8, type: 'judgment', question: 'Description 就是 prompt 越长越好。', answer: false, explanation: '不是越长越好，而是相关信息要完整、清楚、可执行。关键是质量而非长度。', relatedD: 'description', relatedLesson: 'L6' },
  { id: 9, type: 'scenario', question: '你要用 AI 帮团队起草一份市场分析报告。以下哪个做法最体现 Diligence？', options: ['直接把竞争对手的内部数据粘贴给 AI', '先确认 AI 服务的数据保护政策，再决定能输入哪些信息', '用最长的 prompt 确保报告质量', '让 AI 自动发送报告给客户'], answer: 1, explanation: '这是 creation diligence 的体现：在使用 AI 前先确认数据保护和合规性。', relatedD: 'diligence', relatedLesson: 'L10' },
  { id: 10, type: 'whichD', question: '你发现 AI 给出的方案里偷偷把你之前否决的元素又加回来了，这属于哪个 D 的问题？', options: ['Delegation', 'Description', 'Discernment', 'Diligence'], answer: 2, explanation: '这是 Process Discernment 的问题——AI 的推理过程出现了"注意力滑移"，没有遵循之前的讨论结论。', relatedD: 'discernment', relatedLesson: 'L8' },
  { id: 11, type: 'choice', question: 'Description 的三个层面是什么？', options: ['输入、中间、输出', 'Product、Process、Performance', '文字、图片、代码', '简单、中等、复杂'], answer: 1, explanation: 'Description 包含产品/输出描述（Product）、过程描述（Process）和表现/互动描述（Performance）。', relatedD: 'description', relatedLesson: 'L6' },
  { id: 12, type: 'scenario', question: '在"客户询盘→报价→回复"流程中，以下哪个环节最需要保留人类判断？', options: ['格式化询盘内容', '翻译客户邮件', '确定最终报价金额', '生成邮件模板'], answer: 2, explanation: '定价涉及商业判断、客户关系和风险评估，属于必须保留给人类的高判断力环节。这是 Delegation 的核心思考。', relatedD: 'delegation', relatedLesson: 'L4' },
  { id: 13, type: 'judgment', question: '4D 框架只适用于聊天式的 AI 互动（如 ChatGPT 对话）。', answer: false, explanation: '课程明确说 4D 适用于 automation、augmentation 和 agency 三种互动方式，远超聊天场景。', relatedD: 'all', relatedLesson: 'L11' },
  { id: 14, type: 'whichD', question: '你发现 AI 总是用太技术的语言回复，而你的目标读者是非技术人员。这主要是哪个 D 的问题？', options: ['Delegation', 'Description', 'Discernment', 'Diligence'], answer: 1, explanation: '这是 Performance Description 的缺失——你没有明确说明目标受众和期望的语言风格。', relatedD: 'description', relatedLesson: 'L6' },
  { id: 15, type: 'scenario', question: '你用 AI 生成了一份 SOP（标准操作流程），包含了一些你编造的步骤细节。你应该？', options: ['直接发给团队使用', '先让内部专家核实每个步骤的准确性', '让 AI 自己验证准确性', '加一个"AI 生成"的标签就行'], answer: 1, explanation: '这既是 Discernment（验证内容准确性）也是 Diligence（部署前审查）的要求。AI 生成的 SOP 必须由了解实际流程的人验证。', relatedD: 'diligence', relatedLesson: 'L10' }
];

// 办公自动化场景数据
const OFFICE_AUTO_SCENARIOS = [
  {
    id: 'scenario1',
    title: '客户询盘 → 报价草稿',
    icon: '💼',
    description: '从客户发来的询盘邮件到生成报价草稿的完整流程',
    analysis: {
      aiSuitable: ['提取询盘中的产品型号、数量、交期要求', '查询历史报价和库存信息', '生成报价单初稿和回复邮件草稿', '翻译多语言询盘'],
      humanRequired: ['确定最终价格和折扣策略', '评估客户信用和付款条件', '审核报价单的商务条款', '决定是否接受订单'],
      descriptionDesign: '明确输出格式（报价单模板）、所需字段、语言风格（专业但友好）、定价规则的边界',
      discernmentChecklist: ['报价金额是否合理？', '产品型号是否匹配？', '交期是否可行？', '特殊条款是否被遗漏？'],
      diligenceRisks: ['客户敏感信息（联系方式、采购量）输入 AI 时的数据保护', '自动发送报价前必须人工审核', '报价承诺的法律风险']
    }
  },
  {
    id: 'scenario2',
    title: '表格清洗 → 型号匹配 → 异常识别',
    icon: '📊',
    description: '处理混乱的产品数据，进行型号匹配和异常检测',
    analysis: {
      aiSuitable: ['格式统一化和数据清洗', '模糊匹配产品型号', '标注可能的数据异常', '生成数据质量报告'],
      humanRequired: ['确认模糊匹配的最终结果', '判断异常数据的业务含义', '决定错误数据的处理方式', '制定数据质量标准'],
      descriptionDesign: '明确匹配规则、异常判断标准、输出格式、置信度阈值',
      discernmentChecklist: ['模糊匹配的准确率如何？', '是否有"看起来正确但实际错配"的情况？', '异常标注是否覆盖了所有风险？'],
      diligenceRisks: ['模糊匹配风险：错误匹配可能导致发错货', 'AI 与规则引擎的分工：精确规则用规则引擎，模糊判断用 AI', '异常数据的处理需要审计日志']
    }
  },
  {
    id: 'scenario3',
    title: '采购需求整理 → 供应商通知',
    icon: '📦',
    description: '从内部采购需求到生成供应商通知的流程',
    analysis: {
      aiSuitable: ['汇总分散的采购需求', '按供应商分类整理', '生成采购通知模板', '翻译多语言通知'],
      humanRequired: ['拆单与归类的最终确认', '与供应商的价格谈判', '审批采购金额', '紧急采购的优先级判断'],
      descriptionDesign: '明确分类规则、通知模板格式、供应商信息来源、语言要求',
      discernmentChecklist: ['分类是否准确？', '数量汇总是否正确？', '是否遗漏了某些需求？'],
      diligenceRisks: ['自动化边界：对外通知必须经过审核', '拆单逻辑的正确性影响成本', '供应商关系管理不能完全自动化']
    }
  },
  {
    id: 'scenario4',
    title: 'SOP 草稿 → 培训文档 / 操作说明',
    icon: '📋',
    description: '从标准操作流程到培训材料的生成',
    analysis: {
      aiSuitable: ['基于口述或粗略笔记生成 SOP 初稿', '将 SOP 转化为培训文档格式', '生成操作步骤的图文说明', '多语言版本生成'],
      humanRequired: ['验证每个操作步骤的准确性', '补充只有内部人才知道的业务细节', '审核安全注意事项', '确认流程是否符合最新规范'],
      descriptionDesign: '提供现有流程信息、目标读者水平、文档格式要求、关键术语的准确表述',
      discernmentChecklist: ['步骤是否与实际操作一致？', '是否省略了关键安全提醒？', '新手能否仅凭此文档操作？'],
      diligenceRisks: ['AI 生成"看起来专业但不符合实际流程"的内容', '安全相关的操作说明不能有任何错误', '需要标注哪些部分由 AI 辅助生成']
    }
  }
];
