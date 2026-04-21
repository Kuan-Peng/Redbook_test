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
    title: "周末白捡半天，你会把自己丢去哪回血？",
    hint: "别想太久，第一反应就行。",
    options: [
      { label: "先出去晃晃，等人味自己回来", score: 4 },
      { label: "拉个熟人见面，边聊边充电", score: 3 },
      { label: "窝进熟悉角落，慢慢把状态捂热", score: 2 },
      { label: "直接静音失联，谁都别碰我这点电", score: 1 }
    ]
  },
  {
    id: 2,
    title: "群里突然开始热聊，你通常怎么上线？",
    hint: "嘴硬没用，点你最像的。",
    options: [
      { label: "秒接梗，能插一句是一句", score: 4 },
      { label: "先看看风向，熟了再开麦", score: 3 },
      { label: "偶尔丢个表情，证明我还活着", score: 2 },
      { label: "默默围观，今天不想营业", score: 1 }
    ]
  },
  {
    id: 3,
    title: "朋友临时喊你出门，你第一反应更像哪句？",
    hint: "别装稳，选你平时那套。",
    options: [
      { label: "走啊，我刚好想出去透口气", score: 4 },
      { label: "看跟谁，熟人局我能立刻起飞", score: 3 },
      { label: "让我缓十分钟，我得先热个机", score: 2 },
      { label: "下次吧，我今天只想和床绑定", score: 1 }
    ]
  },
  {
    id: 4,
    title: "你最近的聊天状态，更像下面哪种？",
    hint: "第一反应最诚实，别回头洗白。",
    options: [
      { label: "回复很快，梗也很多", score: 4 },
      { label: "看心情，有感觉就多说两句", score: 3 },
      { label: "不是不回，是回电比较慢", score: 2 },
      { label: "能发表情绝不打长句", score: 1 }
    ]
  },
  {
    id: 5,
    title: "一个人待着的时候，你最常进入哪种模式？",
    hint: "别想太久，手感选就行。",
    options: [
      { label: "随便搞点事，越待越来劲", score: 4 },
      { label: "刷着刷着就又想找人说话", score: 3 },
      { label: "安静待会儿，人会慢慢亮起来", score: 2 },
      { label: "彻底省电，谁来也别想把我拽出去", score: 1 }
    ]
  },
  {
    id: 6,
    title: "面对陌生局，你的电量变化通常是？",
    hint: "选最像的，不用当场优化自己。",
    options: [
      { label: "越热闹越兴奋，直接自动开机", score: 4 },
      { label: "前半段观察，后半段开始有戏", score: 3 },
      { label: "熟之前省电，熟之后才放电", score: 2 },
      { label: "全程保电，能躲就躲", score: 1 }
    ]
  },
  {
    id: 7,
    title: "如果今天必须出门见人，你会怎么给自己打气？",
    hint: "想太多就不像了，直接点。",
    options: [
      { label: "换身衣服，状态立刻跟上", score: 4 },
      { label: "先找个搭子，有人我就敢去", score: 3 },
      { label: "慢慢磨一会儿，别一下把我推出去", score: 2 },
      { label: "嘴上说行，身体已经开始装死", score: 1 }
    ]
  },
  {
    id: 8,
    title: "压力有点顶的时候，你最像哪种自救方式？",
    hint: "别端着，选你常用那招。",
    options: [
      { label: "出去走走，让脑子重新过风", score: 4 },
      { label: "找人吐槽，吐完就轻一点", score: 3 },
      { label: "先安静待会儿，不想立刻被打扰", score: 2 },
      { label: "直接缩回壳里，今天谁都不见", score: 1 }
    ]
  },
  {
    id: 9,
    title: "你在社交里最常被朋友说像什么？",
    hint: "别装酷，别人平时都怎么形容你。",
    options: [
      { label: "气氛一到就自动发电", score: 4 },
      { label: "看着冷，其实熟了挺会接梗", score: 3 },
      { label: "慢热型，得给点启动时间", score: 2 },
      { label: "人到了，魂还在路上", score: 1 }
    ]
  },
  {
    id: 10,
    title: "突然需要表达自己时，你更像哪种状态？",
    hint: "想太久就不准了，凭手感点。",
    options: [
      { label: "张口就来，想到哪说到哪", score: 4 },
      { label: "先听别人讲，再选时机开口", score: 3 },
      { label: "脑子里有话，但得缓缓才说得顺", score: 2 },
      { label: "算了，今天先把表达权外包给表情包", score: 1 }
    ]
  },
  {
    id: 11,
    title: "最近的你，更接近哪种生活画风？",
    hint: "你自己最清楚，别选理想版。",
    options: [
      { label: "到处晃、到处感受、到处有电", score: 4 },
      { label: "一半在线，一半看心情营业", score: 3 },
      { label: "慢慢回暖，偶尔也能小活一下", score: 2 },
      { label: "主打低耗运行，先把自己顾明白", score: 1 }
    ]
  },
  {
    id: 12,
    title: "如果把你最近的状态发成一句朋友圈，会更像？",
    hint: "最后一题，点完就出结果。",
    options: [
      { label: "今天这电量，够我乱窜一整天", score: 4 },
      { label: "能聊，能笑，但得看场子", score: 3 },
      { label: "别催，我正在慢慢回到人间", score: 2 },
      { label: "目前仅支持基础营业，感谢理解", score: 1 }
    ]
  }
];
