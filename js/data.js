// AI Fluency Framework & Foundations - 课程数据
// 基于 AI_Fluency_超详细学习笔记_批注版.docx 完整结构化

const COURSE_DATA = {
  meta: {
    title: 'AI Fluency Framework & Foundations',
    subtitle: '超详细学习笔记与批注版',
    source: '基于 Lesson 1-11 字幕/文本资源整理',
    date: '2026-03-29',
    description: '这门课的中心，不是教你几个"厉害 prompt"，也不是单纯介绍 AI 技术原理；它更像是一套人与 AI 协作的方法论。课程要解决的问题是：当 AI 变成可对话、可协作、可代理执行的系统后，人应该怎样高效、稳妥、负责地把它纳入自己的工作流。'
  },

  // 三种与 AI 互动的方式
  interactionModes: [
    {
      id: 'automation',
      name: 'Automation（自动化）',
      nameZh: '自动化',
      description: '你告诉 AI 要做什么，AI 执行。例如总结文档、写邮件、生成图片、做旅行行程。',
      detail: '前提往往是：你已经比较清楚想要什么结果。若你的目标本身还模糊，它就不一定是最好起点。',
      officeExample: '重复规则明确的任务偏向 automation'
    },
    {
      id: 'augmentation',
      name: 'Augmentation（增强）',
      nameZh: '增强协作',
      description: '你与 AI 共同完成任务，AI 不只是替你做，而是作为创意思考伙伴帮助你推进。例如角色设定、产品思考、复杂研究课题、架构问题。',
      detail: '更适合问题未定型、需要探索、需要反复来回打磨的场景。它体现出 AI 作为"认知放大器"的价值。',
      officeExample: '流程设计与方案探索做 augmentation'
    },
    {
      id: 'agency',
      name: 'Agency（代理）',
      nameZh: '代理执行',
      description: 'AI 代表你行动。你不再逐条编写动作，而是为其设定知识、规则、行为模式或目标。例子包括邮件分类、初步响应、网站互动角色、游戏角色等。',
      detail: '本质是：你从"写脚本的人"转向"设定愿景与边界的人"。',
      officeExample: '连续运行的流程节点做 agency'
    }
  ],

  // 四重目标
  fourGoals: [
    {
      id: 'effective',
      name: 'Effective',
      nameZh: '有效',
      description: '你是否真正达成目标',
      detail: '强调的是结果质量——AI 的产出是否真正解决了问题、满足了需求。不是"看起来像答案"，而是"确实能用"。',
      relatedDs: ['Delegation', 'Description', 'Discernment'],
      icon: '🎯'
    },
    {
      id: 'efficient',
      name: 'Efficient',
      nameZh: '高效',
      description: '过程中是否少走弯路、少浪费时间和精力',
      detail: '关注资源投入与产出比——时间、精力、成本。好的 AI 协作不应该让你花更多时间在修补上。',
      relatedDs: ['Delegation', 'Description'],
      icon: '⚡'
    },
    {
      id: 'ethical',
      name: 'Ethical',
      nameZh: '合乎伦理',
      description: '是否诚实、公平、合宜',
      detail: '涉及信息真实性、偏见控制、透明度、对他人的公平性。AI 输出发给客户/同事/公众前，你是否确认了它的公正与准确？',
      relatedDs: ['Diligence', 'Discernment'],
      icon: '⚖️'
    },
    {
      id: 'safe',
      name: 'Safe',
      nameZh: '安全',
      description: '是否保护自己和他人的隐私与安全',
      detail: '数据保护、隐私边界、系统安全、对外发送前的人工审核。尤其在自动化场景中，安全是不可妥协的底线。',
      relatedDs: ['Diligence'],
      icon: '🛡️'
    }
  ],

  // 4Ds 框架
  fourDs: [
    {
      id: 'delegation',
      name: 'Delegation',
      nameZh: '委派',
      lessonRef: 'L4',
      color: '#4F46E5',
      icon: '🧭',
      oneLiner: '决定"谁做什么"',
      definition: '不是简单地"把能自动化的都自动化"，而是同时理解目标、任务结构、人的能力、AI 的能力和风险边界后，做出最合适的分工决策。',
      components: [
        { name: 'Problem Awareness（问题认知）', desc: '我到底要完成什么？我要解决什么问题？我心中的成功长什么样？' },
        { name: 'Platform Awareness（平台认知）', desc: '不同模型、平台、应用在速度、深度、准确性、创造性、工具连接能力上差异很大。' },
        { name: 'Task Delegation（任务分工）', desc: '哪些步骤自动化最好？哪些步骤人机协作？哪些判断必须保留给人？' }
      ],
      commonMisconceptions: [
        'Delegation = 把能自动化的都自动化。课程没有这么说，它强调思考何处应保留人类判断。',
        '先试模型，再说需求。更稳妥的顺序恰恰相反。',
        '委派只发生在项目开始。实际上随着项目推进，你会不断重新委派。'
      ],
      officeMapping: [
        '可以把 Delegation 直接套进项目启动：先画流程，再标出耗时步骤、判断步骤、数据步骤、例外步骤，最后决定哪些能给 AI。',
        '面对新工具时，不要问"哪个最好"，而要问"哪个最适合我这一步"。'
      ]
    },
    {
      id: 'description',
      name: 'Description',
      nameZh: '描述',
      lessonRef: 'L6',
      color: '#0891B2',
      icon: '📝',
      oneLiner: '决定"怎么告诉 AI 去做"',
      definition: '不是"把 prompt 写长一点"，而是把输出、方法和协作行为都设计清楚。Description 是人与 AI 沟通的能力。',
      components: [
        { name: 'Product Description（产品/输出描述）', desc: '你要说明想让 AI 产出什么：任务是什么、背景是什么、输出要什么格式、面向谁、风格如何。' },
        { name: 'Process Description（过程描述）', desc: '有时你不仅要说明终点，还要说明 AI 应如何走过去。包括总体原则、逐步流程、具体示例等。' },
        { name: 'Performance Description（表现/互动描述）', desc: '你需要什么样的思考伙伴？是发散还是收敛？要挑战你还是顺着你？要详细解释还是简短直给？' }
      ],
      commonMisconceptions: [
        'Description = 越长越好。并不是越长越好，而是相关信息要完整、清楚、可执行。',
        '只要说交付物即可。很多复杂任务里，过程和互动方式同样重要。',
        '只适合文字任务。实际上设计、分析、编程、辅导、规划都需要 Description。'
      ],
      officeMapping: [
        '写提示时，最好不要只问"我要什么结果"，还要同步想"它怎么做比较好"以及"它该怎么跟我配合"。',
        '如果做 agent 或系统设计，Description 的思维会变成：输出规范、流程规范、行为规范。'
      ]
    },
    {
      id: 'discernment',
      name: 'Discernment',
      nameZh: '辨别',
      lessonRef: 'L8',
      color: '#059669',
      icon: '🔍',
      oneLiner: '决定"做出来的东西值不值得用"',
      definition: 'AI 协作里的质检系统：不只是看输出，还要看过程与互动。识别 AI 输出什么时候有价值、什么时候有问题。',
      components: [
        { name: 'Product Discernment（结果判断）', desc: '检查：事实是否正确？是否适合目标受众与目的？结构是否清楚？是否满足要求？是否真正解决了问题？' },
        { name: 'Process Discernment（过程判断）', desc: '看 AI 是如何走到这个结果的。注意逻辑错误、注意力滑移、不恰当步骤、被某个细节卡住、循环论证等。' },
        { name: 'Performance Discernment（互动表现判断）', desc: '它传递信息的方式是否有助于你理解？是否对反馈反应良好？沟通是否过度复杂或过于简略？' }
      ],
      commonMisconceptions: [
        'Discernment 就是查事实。其实它还包括过程与互动判断。',
        '有 AI 就不需要我懂行。课程明确：相反，越重要的任务越需要你的领域判断。',
        '发现问题就是 AI 不行。也可能是 Description 不够好，或 Delegation 一开始就错了。'
      ],
      officeMapping: [
        '建议把验收固定拆成三问：结果对吗？路径靠谱吗？互动舒服吗？',
        '很多人只会改内容，不会改互动方式。其实 performance 调好后，效率会大幅提升。'
      ]
    },
    {
      id: 'diligence',
      name: 'Diligence',
      nameZh: '审慎',
      lessonRef: 'L10',
      color: '#DC2626',
      icon: '🔒',
      oneLiner: '决定"这样做是否合适，以及谁来负责"',
      definition: '不是"最后看一眼"，而是从设计阶段就考虑责任与风险。让整个过程更严谨、透明、可问责。',
      components: [
        { name: 'Creation Diligence（创建/使用前审慎）', desc: '选择使用哪个 AI 系统时，是否有意识、有批判性、有边界。关键词：系统选择、数据保护、隐私、安全、价值观对齐。' },
        { name: 'Transparency Diligence（透明审慎）', desc: '不同情境——个人、学术、创意、职业——对是否披露 AI 参与、披露到什么程度，要求可能不同。' },
        { name: 'Deployment Diligence（部署/发布审慎）', desc: '对外分享 AI 生成内容时，责任主体是你，不是 AI。要做事实核验、偏见检查、准确性确认、使用权/版权检查。' }
      ],
      commonMisconceptions: [
        'Diligence 只是法律部门的事。错，任何使用者都在做选择与承担后果。',
        '只要 AI 先写，我就不必负责。课程明确反对这一点。',
        '披露 AI 参与会显得不专业。事实上，恰当透明往往更有助于建立信任。'
      ],
      officeMapping: [
        '越自动、越独立，越要提前设计边界、日志、审计和人工兜底。',
        '为自己做一个简单 checklist：这能不能输？谁会看到？需不需要说明 AI 参与？我愿不愿意对最终结果签字？'
      ]
    }
  ],

  // 课程内容 - 完整 Lessons
  lessons: []
};

// 分离 lessons 数据以便管理
COURSE_DATA.lessons = [
  // ========== LESSON 1 ==========
  {
    id: 'L1',
    number: 1,
    title: 'Introduction to AI Fluency',
    titleZh: 'AI 素养导论',
    duration: '约 4.6 分钟',
    oneLiner: '这门课想要训练的不是"会不会下指令"，而是"会不会和 AI 一起工作"。',
    coreGoal: '建立 AI Fluency 的整体框架认知，理解这不是 prompt 技巧课，而是人机协作方法论课',
    position: '课程开篇，建立框架与预期',

    corePoints: [
      '开场明确课程焦点：重点不是 AI 技术本身，而是人类如何与 AI 系统互动与协作。这门课关心的是"协作关系"，不是"技术炫技"。',
      '课程反复把 AI 比当"高级拼写检查器"或"会说话的工具箱"。它希望你把 AI 看成可信的伙伴，用在更有创造性、探索性和复杂问题解决的工作里。',
      '课程试图解决一种现实困境：AI 变化太快，很多人既兴奋又迷惑，不知道从哪里开始，也不知道怎样长期跟上变化。',
      '因此，课程目标不是给你一套很快过时的 prompt 小抄，而是给你一个稳定框架，让你不被下一波"提示工程潮流"牵着走。',
      '课程给出 AI fluency 的总定义：以有效（effective）、高效（efficient）、合乎伦理（ethical）、安全（safe）的方式与 AI 互动。',
      '课程认为，真正重要的是"how to think with AI（如何与 AI 一起思考）"，而不只是"how to use AI（怎么使用 AI）"。这意味着你要学会协同思考、共同推进、共同生成。',
      '它指出 AI 已经从较专门的技术，变成日常可交互系统，被学校、工作、家庭大规模使用；这带来巨大机会，也带来使用上的不适应、误解和策略缺失。',
      '课程存在的理由，是帮助用户跨越"AI 能做很多"与"我不知道怎么自然地把它纳入工作"之间的落差。',
      '课程的整体路线：先讲 AI fluency 框架，再讲三种人机互动方式与四个核心能力（4Ds），然后分别深挖 Delegation、Description、Discernment、Diligence。',
      '课程还预告：你会接触 Anthropic 团队关于生成式 AI 特性、能力边界与实操技巧的说明；也就是说，这不是纯理论课，理论与实作会穿插。',
      '课程强调：很多 AI 培训只教战术层面的"调参数、写提示词、换工具"，但这些内容更新很快；相比之下，核心能力和理解框架更耐用。',
      '学习完成后，你应当获得四类结果：有一套判断框架；更有信心决定何时、如何用 AI；拥有更流畅的协作技巧；并且能对协作结果负责。'
    ],

    keyTakeaways: [
      '如果你以后做自动化、agent、办公系统或内容生产，这节的意义是：别把 AI 当万能快捷键，而要把它纳入一个"由你主导"的协作系统。',
      '从第一节开始就要建立一个概念：模型越强，越需要你会定义问题、设定边界、做判断，而不是越可以完全不动脑。',
      '这节也在帮你校准预期：学习 AI，不等于背会几十条 prompt；真正进步的标志，是你会把 AI 放在正确的位置。'
    ],

    misconceptions: [
      { wrong: 'AI fluency = prompt engineering', correct: '实际上 prompt 只是 Description 的一部分。' },
      { wrong: '课程重点是模型原理', correct: '实际上模型原理只服务于更好的协作判断。' },
      { wrong: '框架是抽象的，实战里没用', correct: '恰恰相反，抽象框架的价值在于它能跨模型、跨场景复用。' }
    ],

    practiceQuestions: [
      '如果让我用 2 句话向别人解释这门课，我会怎么说？',
      '我现在最常把 AI 当成什么：工具、伙伴、还是代理？为什么？',
      '在我自己的工作中，最需要补的是 4D 里的哪一块？'
    ],

    officeAutomation: [
      {
        scenario: '日常办公',
        mapping: '不要一上来就问"让 AI 帮我做什么"，而是先识别你的任务属于 automation、augmentation 还是 agency，再决定 AI 介入方式。',
        risk: '把 AI 当万能快捷键，忽略了需要人类判断的环节。'
      }
    ],

    keyTerms: [
      { term: 'AI Fluency', zh: 'AI 素养/AI 流利度', def: '以有效、高效、合乎伦理且安全的方式与 AI 互动的能力' },
      { term: 'Automation', zh: '自动化', def: '你告诉 AI 做什么，AI 执行' },
      { term: 'Augmentation', zh: '增强协作', def: '你与 AI 共同完成任务' },
      { term: 'Agency', zh: '代理', def: 'AI 代表你行动' }
    ]
  },

  // ========== LESSON 2A ==========
  {
    id: 'L2A',
    number: '2A',
    title: 'Why do we need AI Fluency',
    titleZh: '为什么需要 AI 素养',
    duration: '约 6.2 分钟',
    oneLiner: '有 AI 可用，不等于你真的会用 AI；会用几个技巧，也不等于会负责任地协作。',
    coreGoal: '理解 AI fluency 的必要性，区分"能接触到 AI"和"真正具备 AI fluency"',
    position: '课程第二节（上），深化动机与框架',

    corePoints: [
      '这节从现实经验切入：很多人已经把 AI 用在写作、头脑风暴、研究、决策支持等场景，但"能接触到 AI"与"真正具备 AI fluency"是两回事。',
      '课程列举了几种典型痛点：AI 回答出乎意料时你不知道怎么接；你说不清楚自己要什么，结果很糟糕；你担心自己输入的信息是否被妥善保护。',
      '这些痛点说明，问题不在于"你还没听说 AI"，而在于你还没有形成一套成熟的协作能力。',
      'AI fluency 不是成为技术专家，也不是背诵"本月最热 10 个 prompt 模板"；它是一组会随着技术变化继续有用的技能、知识、洞见和价值判断。',
      '课程再次给出四重目标：有效、高效、伦理、安全。注意这里不是只讲效果，还包含资源投入与责任问题。',
      'effective 强调你是否真正达成目标；efficient 强调过程中是否少走弯路、少浪费时间和精力；ethical 强调是否诚实、公平、合宜；safe 强调是否保护自己和他人的隐私与安全。',
      '课程把人与 AI 的互动分成三种主要方式。第一种是 automation：你告诉 AI 要做什么，AI 执行。例如总结文档、写邮件、生成图片、做旅行行程。',
      'automation 的前提往往是：你已经比较清楚想要什么结果。若你的目标本身还模糊，它就不一定是最好起点。',
      '第二种是 augmentation：你与 AI 共同完成任务，AI 不只是替你做，而是作为创意思考伙伴帮助你推进。例如角色设定、产品思考、复杂研究课题、架构问题。',
      'augmentation 更适合问题未定型、需要探索、需要反复来回打磨的场景。它体现出 AI 作为"认知放大器"的价值。',
      '第三种是 agency：AI 代表你行动。你不再逐条编写动作，而是为其设定知识、规则、行为模式或目标。例子包括邮件分类、初步响应、网站互动角色、游戏角色等。',
      'agency 的本质是：你从"写脚本的人"转向"设定愿景与边界的人"。',
      '课程强调三种模式没有高低之分，也可能在同一项目中并存。比如你先用 augmentation 跟 AI 共创方案，再用 automation 输出内容，最后用 agency 让代理持续执行某类流程。',
      '课程认为，虽然很多人是从 automation 开始接触 AI，但 augmentation 与 agency 往往更能体现 AI 的独特价值，也更容易催生创造性结果。',
      '因此，AI 不只是工具，也可能是媒介、伙伴、共同创作者，甚至多种身份叠加。这要求人类也发展新的角色与能力。'
    ],

    keyTakeaways: [
      '当你面对一个需求时，先别急着问"让 AI 帮我做什么"，而要先问"这个场景更像 automation、augmentation，还是 agency？"',
      '如果你在做办公自动化或业务系统升级：重复规则明确的任务偏向 automation；流程设计与方案探索做 augmentation；连续运行的流程节点做 agency。',
      '这节也在提醒你：对 AI 的期待要跟问题成熟度匹配。目标越清晰，越适合 automation；目标越模糊，越需要 augmentation。'
    ],

    misconceptions: [
      { wrong: 'agency 就是更高级的 automation', correct: '两者差异很大，agency 更强调持续行为、规则、边界与代理性。' },
      { wrong: 'augmentation 就是"让 AI 陪我聊天"', correct: '不对，它是有明确任务推进目标的协作式思考。' },
      { wrong: '会用 automation 就够了', correct: '很多真正高价值的用法，恰恰出现在 augmentation 和 agency。' }
    ],

    practiceQuestions: [
      '我现在手头哪个任务更适合 augmentation，而不是 automation？',
      '如果我要把一个重复流程做成 agent，哪些规则必须先由我写清？',
      '在我的行业里，哪些环节仍然必须由人类主导？'
    ],

    officeAutomation: [
      {
        scenario: '业务流程升级',
        mapping: '识别任务类型：重复明确→automation，方案设计→augmentation，持续执行→agency',
        risk: '一上来只会把 AI 当"自动写字机"，错过 augmentation 和 agency 的价值。'
      }
    ],

    keyTerms: [
      { term: 'Automation', zh: '自动化', def: '你告诉 AI 做什么，AI 执行特定任务' },
      { term: 'Augmentation', zh: '增强', def: '你与 AI 共同推进，AI 作为思考伙伴' },
      { term: 'Agency', zh: '代理', def: 'AI 代表你持续行动，你设定规则和边界' }
    ]
  },

  // ========== LESSON 2B ==========
  {
    id: 'L2B',
    number: '2B',
    title: 'The 4D Framework',
    titleZh: '4D 框架',
    duration: '约 5.5 分钟',
    oneLiner: '4D 不是四个孤立技巧，而是一套完整的人机协作闭环。',
    coreGoal: '理解 4Ds 框架的整体结构及其与三种互动模式的关系',
    position: '课程第二节（下），提出核心框架',

    corePoints: [
      '这节把前面的总目标进一步结构化，提出四个核心能力：Delegation、Description、Discernment、Diligence。',
      '这四个能力适用于任何互动模式——automation、augmentation、agency 都要用到它们，只是侧重点不同。',
      'Delegation 关注大局：你到底想达成什么？任务由哪些工作构成？哪些应由人做，哪些适合 AI 做，哪些适合人机配合做？',
      '课程给的研究项目例子很重要：可以让 AI 先读大量文档和数据，再与你讨论含义与发现，但保留关键分析与最终结论给人类。这展示了"先筛、再议、再定"的委派思路。',
      'Description 关注沟通质量。课程通过"做一个 logo"与"说明品牌价值、受众、配色、风格"等对比，说明上下文越完整，协作越有效。',
      'Description 也包括你希望 AI 采取什么方式帮助你，例如当 tutor 时，你可以要求它"不要直接告诉我答案，而是一步一步引导我理解"。',
      '课程把 Description 扩展成：你要说清输出格式、AI 应如何处理任务、它需要哪些背景信息，以及你希望怎样的互动语气或风格。',
      'Discernment 是判断力。面对 AI 给出的营销方案、分析结论或建议，你不能只看是否"像那么回事"，而要检查事实、逻辑、价值观、适配性和是否真能推动问题前进。',
      '课程指出，多数真实协作都会出现 Description 与 Discernment 的小循环：你描述需求，AI 给出东西，你判断质量，再修正描述。',
      'Diligence 关注负责任的使用：公平性、偏见控制、信息核验、数据保护、披露 AI 参与情况，以及对结果承担责任。',
      '在招聘、审稿、分析等高风险场景里，Diligence 不是附加项，而是底线能力。',
      '课程最后强调 4D 之所以有价值，恰恰因为它们不绑死在某个模型或技巧上，所以能在技术快速变化中保持长期有效。'
    ],

    keyTakeaways: [
      '可以把 4D 理解成一个最小工作流：先分工（D1），再沟通（D2），再验收（D3），最后确认合规负责（D4）。',
      '你做任何 AI 项目时，都能把这四个问题写在纸上：目标怎么分？我要怎么说？我怎么验？我怎么负责？',
      '如果你的 AI 使用经常"结果漂"、"返工多"、"不敢上线"，通常不是模型不够强，而是 4D 中至少有一环没做实。'
    ],

    misconceptions: [
      { wrong: '4D 是线性的', correct: '实际上它们常常循环往复，尤其是 Description 和 Discernment。' },
      { wrong: 'Diligence 只跟大公司合规有关', correct: '实际上个人、学生、自由职业者同样要面对隐私、透明与责任问题。' },
      { wrong: 'Delegation 只是任务分配', correct: '实际上它也包含问题理解与平台理解。' }
    ],

    practiceQuestions: [
      '我做一个 AI 项目时，最容易跳过的是哪个 D？',
      '有没有一个失败案例，回头看其实是某个 D 没做好？',
      '如果我用一句话定义每个 D，我会怎么写？'
    ],

    officeAutomation: [
      {
        scenario: '任何 AI 项目启动',
        mapping: '把 4D 当 checklist：先定义问题和分工(D1)→再说清需求(D2)→再验收质量(D3)→最后确认合规(D4)',
        risk: '跳过任何一个 D 都会导致项目风险增加。'
      }
    ],

    keyTerms: [
      { term: 'Delegation', zh: '委派', def: '决定什么由谁做' },
      { term: 'Description', zh: '描述', def: '清楚表达需求与期望' },
      { term: 'Discernment', zh: '辨别', def: '判断 AI 产出的质量' },
      { term: 'Diligence', zh: '审慎', def: '负责任地使用 AI' }
    ]
  },

  // ========== LESSON 3A ==========
  {
    id: 'L3A',
    number: '3A',
    title: 'What is Generative AI (Deep Dive)',
    titleZh: '什么是生成式 AI（深入版）',
    duration: '约 6.3 分钟',
    oneLiner: '生成式 AI 的核心不是"查到答案"，而是基于训练中学到的模式，生成新的内容。',
    coreGoal: '理解生成式 AI 的工作原理、LLM 的本质特征',
    position: '技术基础课，为后续判断提供原理支撑',

    corePoints: [
      '这节回答一个基础但关键的问题：什么叫 generative AI（生成式 AI）？课程的定义是：能创建新内容，而不只是分析已有数据的 AI 系统。',
      '课程用垃圾邮件分类与写全新邮件来对比传统 AI 与生成式 AI：前者偏识别/分类，后者偏生成/创作。',
      'LLM（Large Language Model，大语言模型）是生成式 AI 的典型代表。之所以叫 language model，是因为它处理和生成语言；之所以叫 large，是因为参数量巨大。',
      '参数（parameters）可以粗略理解为影响模型如何处理信息的数学权重。课程借用"大脑突触连接"的类比，帮助你建立直觉，但它并不是生物神经系统的直接复制。',
      '课程强调，今天的生成式 AI 并不是突然出现，而是三个因素在同一时期成熟后共同推动的结果。',
      '第一个因素是算法与架构突破，尤其是 2017 年的 Transformer 架构。它擅长处理文本序列，并维护长文本中词与词之间的关系，这对理解上下文非常关键。',
      '第二个因素是数字化数据大爆发。现代 LLM 从网站、代码仓库与各类文本中学习，由此获得广泛而细腻的语言与概念模式。',
      '第三个因素是算力激增。GPU、TPU 与分布式集群使大规模训练成为可能；没有算力，前两项再好也无法转化为今天的模型能力。',
      '这三者叠加后，研究者发现了 scaling laws（规模定律）：模型规模更大、数据更多、算力更强时，性能会以较可预测的方式提升。',
      '更重要的是，随着规模增长，一些并未被显式写入的新能力会涌现（emergent capabilities），例如更好的逐步推理适应、较少示例下完成新任务等。',
      '课程随后解释 pre-training（预训练）：模型看海量文本，不断预测下一个 token/词片/词，从而学到语言与知识中的统计关系。',
      '预训练不是"背文章"，而是在大量例子中形成一个关于语言模式、概念关系与表达结构的高维地图。',
      '预训练后通常还要 fine-tuning（微调）与对齐训练，让模型更会听指令、更有帮助、也尽量避免有害输出。这里会用到人工反馈与强化学习等方法。',
      '当你使用 Claude 或其他 LLM 时，模型不是从数据库里检索一段预先写好的答案再贴给你；它是在你给出的上下文上继续生成最可能合适的文本。',
      '因此，prompt 的作用可以理解成：给模型设定当前"继续生成"的起点、范围和方向。',
      '课程引入 context window（上下文窗口）概念，它像 AI 的工作记忆，包含你的提示、AI 的回复以及当前会话里共享的其他内容。',
      '上下文窗口不是无限的；如果超出模型当前能处理的范围，它就无法同时考虑全部信息。没有外部工具时，它也不能跳出当前上下文自动访问世界上的最新资料。',
      '最后，课程总结现代生成式 AI 强大的三个原因：训练时读过超大量信息；具备 in-context learning（基于上下文指令与示例快速适应任务）的能力；以及随规模出现的涌现能力。'
    ],

    keyTakeaways: [
      '理解"它是在生成，不是在精确检索"这件事，会直接改变你对 AI 的期待：它擅长生成、改写、综合、变换，但不天然等于精确事实库。',
      '理解 context window，会让你更重视：分段输入、提供必要上下文、别把关键条件埋在很早以前的对话里。',
      '理解 pre-training / fine-tuning / in-context learning 的差别，会帮助你判断：什么问题靠多给上下文能改善，什么问题需要换模型或接工具。'
    ],

    misconceptions: [
      { wrong: 'LLM 是在网上现查现答', correct: '并不总是，除非它接入了 web search 或其他外部工具。' },
      { wrong: '参数越多就必然什么都对', correct: '规模会提升能力，但不会自动消除错误。' },
      { wrong: '模型懂"意思"的方式与人类完全相同', correct: '课程没有这么说；它强调的是统计模式学习与能力涌现。' }
    ],

    practiceQuestions: [
      '如果让我向完全不懂 AI 的人解释"生成式 AI 为什么和搜索引擎不同"，我怎么说？',
      '我最近一次因为没考虑 context window 而得到差结果的场景是什么？',
      '我的工作里，哪些任务主要依赖生成能力，哪些任务更依赖外部事实检索？'
    ],

    officeAutomation: [
      {
        scenario: '理解 AI 能力边界',
        mapping: '区分"模型本身能力"和"外部系统能力"：模型负责理解、生成、归纳；系统负责真值数据、权限、执行与记录。',
        risk: '把 AI 的流畅输出等同于事实正确，忽略了需要外部数据验证的环节。'
      }
    ],

    keyTerms: [
      { term: 'Generative AI', zh: '生成式 AI', def: '能创建新内容的 AI 系统' },
      { term: 'LLM', zh: '大语言模型', def: 'Large Language Model，处理和生成语言的大规模模型' },
      { term: 'Parameters', zh: '参数', def: '影响模型处理信息的数学权重' },
      { term: 'Transformer', zh: 'Transformer 架构', def: '2017年提出的擅长处理序列数据的架构' },
      { term: 'Pre-training', zh: '预训练', def: '模型从海量文本中学习语言模式' },
      { term: 'Fine-tuning', zh: '微调', def: '在预训练基础上进一步调整模型行为' },
      { term: 'Context Window', zh: '上下文窗口', def: '模型一次能处理的信息量范围' },
      { term: 'Scaling Laws', zh: '规模定律', def: '模型规模、数据、算力增长带来可预测的性能提升' },
      { term: 'Emergent Capabilities', zh: '涌现能力', def: '随规模增长而突然出现的新能力' },
      { term: 'In-context Learning', zh: '上下文学习', def: '基于提示中的指令和示例快速适应任务' }
    ]
  },

  // ========== LESSON 3B ==========
  {
    id: 'L3B',
    number: '3B',
    title: 'Capabilities & Limitations',
    titleZh: '能力与局限',
    duration: '约 7.3 分钟',
    oneLiner: '想把 AI 用好，先要像认识新同事一样，知道它的长处、短板和边界。',
    coreGoal: '系统了解 AI 的六大优势与六类局限，建立务实预期',
    position: '技术基础课第二部分，能力与限制的全景图',

    corePoints: [
      '这节以"认识一位新同事"为类比，告诉你：想高质量协作，必须同时知道 AI 能做什么与不能做什么。',
      '课程先讲优势。现代 LLM 在语言处理上极强：代写/改写邮件、长文总结、翻译、跨领域解释复杂概念等都很擅长。',
      '它们的一大特点是 task generality（任务通用性）：同一个系统不需要重新训练，就能在诗歌、生日创意、量子计算解释、商业分析之间切换。',
      '模型还擅长保持对话脉络：你前面提到的项目截日、背景条件或目标，后面再提及时它通常能接上。',
      '现代 LLM 还可以通过外部工具扩大能力，如联网搜索、处理文件、调用其他应用；这会显著扩展它的可用边界。',
      '然后课程转到限制。第一类限制来自 training cutoff（知识截止）。模型的原生知识停留在训练数据结束之前，对之后发生的事没有"天然知道"的能力。',
      '因此，问最新新闻、价格、政策、近期变化时，仅靠基础模型记忆不可靠，通常需要 web search 或其他外部数据源。',
      '第二类限制来自训练数据本身。训练过程不会逐条验证数据真伪，所以模型可能吸收并复现训练语料中的错误。',
      '此外，模型也会在组合已有知识时犯错，于是出现 hallucination（幻觉）：说得像真的，但其实不对。',
      '课程特别提醒：LLM 与搜索引擎不同。搜索引擎主要检索现成文档；LLM 主要按统计模式生成语言，因此更有可能一本正经地"编"。',
      '第三类限制是 context window。模型一次能处理的信息量有限，超过后会有信息被挤出，常见表现是遗忘前文、忽略早先条件或处理超长文档不完整。',
      '课程指出，窗口限制的典型机制近似"先进先出"：超出范围后，较早信息可能失效。',
      '第四类限制是 non-determinism（非确定性）。同一个问题问两次，答案可能略有不同，因为模型是在做概率性生成，而不是传统软件式的完全确定输出。',
      '这种随机性对发散创意有帮助，但在追求一致性、可复核性、精确性时就要特别小心。',
      '课程提到某些接口会允许调 temperature（温度）等参数，以控制随机性与创造性程度。',
      '第五类限制是复杂推理能力。虽然模型进步很快，但传统 LLM 在逐步数学/逻辑推理上历来容易出错；新一代 reasoning / extended thinking models 在这方面改善明显。',
      '第六类限制是工具与数据可达性。再聪明的模型，如果没有你公司内网数据库、没有某个专业工具、没有实时数据，它也无法凭空回答相关问题。',
      '因此，"它答不上来"很多时候不表示模型笨，而是因为完成任务所需数据或工具根本不在它可接触范围内。',
      '课程还提到，业界正在用 RAG（retrieval-augmented generation，检索增强生成）、更强工具使用能力和更好的推理架构来缓解这些限制。',
      '不过课程也很审慎：即使限制会变化，某些边界在可见未来仍会存在，所以持续学习与实验很重要。',
      '结尾再次强调互补性：人类带来判断、价值观、创造力与伦理监督；AI 带来速度、规模、模式识别与海量信息处理。高价值应用通常来自两者互补，而不是单方替代。'
    ],

    keyTakeaways: [
      '这节最实用的启发是：当 AI 给出差答案时，不要只说"模型不行"，而要具体判断问题属于哪一类——截止问题、幻觉问题、窗口问题、随机性问题，还是工具缺失问题。',
      '在日常工作里，你可以建立一个习惯：凡是"最新、价格、法规、具体事实、内部数据"类问题，优先想"它是否需要外部数据源"。',
      '如果你想做流程自动化，应该把模型能力和外部系统能力拆开看：模型负责理解、生成、归纳；系统负责真值数据、权限、执行与记录。'
    ],

    misconceptions: [
      { wrong: 'AI 说得流畅 = 事实正确', correct: '错，流畅度和真实性不是一回事。' },
      { wrong: '同一问题两次回答不完全一样，说明模型坏了', correct: '并不一定，这可能是非确定性的正常表现。' },
      { wrong: '模型很强，就不需要数据接口', correct: '恰恰相反，高质量落地往往靠"模型 + 数据 + 工具"组合。' }
    ],

    practiceQuestions: [
      '我最近碰到的一次 hallucination，本质上是什么类型的问题？',
      '我的场景里哪些任务可以只靠模型，哪些任务必须接数据库/网页/文件系统？',
      '如果我要向同事解释"为什么 AI 会一本正经地胡说"，我怎么用类比说明？'
    ],

    officeAutomation: [
      {
        scenario: '评估 AI 在业务中的适用性',
        mapping: '把"模型能力"和"外部系统能力"拆开看：模型负责理解和生成，系统负责数据、权限和执行。',
        risk: '以为模型很强就不需要数据接口，忽略了外部数据源的必要性。'
      }
    ],

    keyTerms: [
      { term: 'Training Cutoff', zh: '知识截止', def: '模型训练数据的截止时间点' },
      { term: 'Hallucination', zh: '幻觉', def: '模型生成看似正确但实际不对的内容' },
      { term: 'Non-determinism', zh: '非确定性', def: '同一输入可能产生不同输出' },
      { term: 'Temperature', zh: '温度', def: '控制模型输出随机性的参数' },
      { term: 'RAG', zh: '检索增强生成', def: 'Retrieval-Augmented Generation，结合检索与生成' },
      { term: 'Task Generality', zh: '任务通用性', def: '同一模型无需重训即可处理多种任务' }
    ]
  }
];
