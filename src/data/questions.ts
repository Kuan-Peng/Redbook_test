export type QuestionOption = {
  label: string;
  score: number;
};

export type Question = {
  id: number;
  title: string;
  hint: string;
  options: QuestionOption[];
};

export const questions: Question[] = [
  {
    id: 1,
    title: "周末突然空出半天，你最像哪种打开方式？",
    hint: "选第一反应就行。",
    options: [
      { label: "先去街上走走，让状态自己亮起来", score: 4 },
      { label: "约个人喝点东西，边聊边找感觉", score: 3 },
      { label: "待在熟悉的地方，慢慢回温", score: 2 },
      { label: "先把通知关一会儿，给自己留白", score: 1 }
    ]
  },
  {
    id: 2,
    title: "新群聊突然热起来时，你通常会怎么接？",
    hint: "没有标准答案。",
    options: [
      { label: "很快接梗，让气氛继续往前走", score: 4 },
      { label: "看准节奏再说一句有参与感的话", score: 3 },
      { label: "点个表情，先在线围观", score: 2 },
      { label: "安静划过，等日常感觉回来再说", score: 1 }
    ]
  },
  {
    id: 3,
    title: "朋友临时说今晚一起出门，你的第一反应更像？",
    hint: "代入最近的自己。",
    options: [
      { label: "行，换衣服就出发", score: 4 },
      { label: "可以，给我一点准备时间", score: 3 },
      { label: "想去，但更想先确认现场状态", score: 2 },
      { label: "今天更想把活力留给自己", score: 1 }
    ]
  },
  {
    id: 4,
    title: "拍照时，你更容易出现哪种风格？",
    hint: "按你最常见的来。",
    options: [
      { label: "不用提醒，我自己就能进入在线状态", score: 4 },
      { label: "别人一带节奏，我就慢慢放开", score: 3 },
      { label: "前几张还在找表达倾向，后面才顺", score: 2 },
      { label: "镜头一来，我的日常感觉立刻想撤退", score: 1 }
    ]
  },
  {
    id: 5,
    title: "一天里最容易让你恢复活力的瞬间是？",
    hint: "选最贴近的一项。",
    options: [
      { label: "和喜欢的人聊点有火花的东西", score: 4 },
      { label: "出门吹吹风，状态会明显回来", score: 3 },
      { label: "把节奏放慢，自己待一会儿", score: 2 },
      { label: "先什么都不接，让自己静音充电", score: 1 }
    ]
  },
  {
    id: 6,
    title: "你在聚会里的社交气质更接近哪种？",
    hint: "不用想得太复杂。",
    options: [
      { label: "带动气氛的人，哪里空就去哪里接", score: 4 },
      { label: "熟一点以后，表达倾向会越来越明显", score: 3 },
      { label: "更喜欢一对一或小范围慢慢聊", score: 2 },
      { label: "存在感偏低，但并不代表没在场", score: 1 }
    ]
  },
  {
    id: 7,
    title: "如果今天必须见很多人，你会怎么调频道？",
    hint: "按真实习惯选。",
    options: [
      { label: "直接上，边走边把活力拉满", score: 4 },
      { label: "先热机一下，过会儿就顺了", score: 3 },
      { label: "把重点表达留给最需要的场合", score: 2 },
      { label: "提前给自己留几个安静空档", score: 1 }
    ]
  },
  {
    id: 8,
    title: "当场面突然冷下来时，你更可能怎么做？",
    hint: "凭直觉作答。",
    options: [
      { label: "主动接一句，把状态重新拉起来", score: 4 },
      { label: "顺着别人刚说的点，轻轻续一下", score: 3 },
      { label: "等一个自然的切入口再说", score: 2 },
      { label: "我会先观察，不急着出声", score: 1 }
    ]
  },
  {
    id: 9,
    title: "刷到想发的内容时，你一般会？",
    hint: "代入常态。",
    options: [
      { label: "马上转发，顺手配一句自己的感觉", score: 4 },
      { label: "发，但会改成更适合自己的风格", score: 3 },
      { label: "先收藏，等更有表达感觉时再发", score: 2 },
      { label: "多数时候留在自己这边就够了", score: 1 }
    ]
  },
  {
    id: 10,
    title: "遇到好久不见的人时，你的状态更像？",
    hint: "选最常见的。",
    options: [
      { label: "自然接上，像电量一直都在线", score: 4 },
      { label: "前几分钟慢热，后面就会很顺", score: 3 },
      { label: "要看当天活力和场合配不配合", score: 2 },
      { label: "会先保留一点，再慢慢进入状态", score: 1 }
    ]
  },
  {
    id: 11,
    title: "如果今天只能保留一种日常感觉，你会选？",
    hint: "不用过度斟酌。",
    options: [
      { label: "轻松发光，见人见事都能接得住", score: 4 },
      { label: "稳定在线，不慌不赶但有回应", score: 3 },
      { label: "慢速舒展，按自己的节奏来", score: 2 },
      { label: "安静省电，先让自己舒服最重要", score: 1 }
    ]
  },
  {
    id: 12,
    title: "测完以后你更想把结果发给谁？",
    hint: "最后一题。",
    options: [
      { label: "谁都能发，我已经准备好截图了", score: 4 },
      { label: "发给熟人，顺便看看对方怎么说", score: 3 },
      { label: "先留着，等合适的聊天窗口出现", score: 2 },
      { label: "先自己看完，今天的表达倾向到这里就够了", score: 1 }
    ]
  }
];
