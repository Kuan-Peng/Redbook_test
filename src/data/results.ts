export type ResultBucket = {
  id: string;
  title: string;
  subtitle: string;
  energyLabel: string;
  tags: [string, string, string];
  description: string;
  shareText: string;
};

export const complianceLines = [
  "仅供娱乐",
  "非专业评估",
  "不构成医学/心理/诊断建议"
] as const;

export const resultBuckets: ResultBucket[] = [
  {
    id: "quiet-saver",
    title: "低电省电型",
    subtitle: "你的状态更像安静续航，先照顾好自己的节奏。",
    energyLabel: "活人感电量 20%",
    tags: ["状态偏慢热", "表达倾向留白", "日常感觉想省电"],
    description:
      "你最近的风格不是往外冲，而是先把活力留给真正想投入的人和事。社交气质更偏安静在线，熟起来以后会比第一眼更有温度。",
    shareText:
      "我测到的是「低电省电型」, 这阵子的状态更像安静续航。我的风格不是掉线，只是把活力留给更想认真接住的人和事。"
  },
  {
    id: "slow-warm",
    title: "慢热回温型",
    subtitle: "你不是没感觉，是需要一点时间把状态点亮。",
    energyLabel: "活人感电量 40%",
    tags: ["风格偏自然", "社交气质慢热", "活力在回温"],
    description:
      "你的日常感觉更适合从熟悉场合慢慢进入。只要节奏对了，表达倾向会越来越明显，整体风格也会从低调切到顺滑在线。",
    shareText:
      "我测到的是「慢热回温型」, 要给我一点时间，状态就会慢慢亮起来。我的社交气质偏自然，不抢节奏，但也不会一直安静。"
  },
  {
    id: "light-online",
    title: "轻亮在线型",
    subtitle: "你现在的状态刚刚好，轻松、顺手、能接得住场面。",
    energyLabel: "活人感电量 60%",
    tags: ["状态很顺手", "表达倾向稳定", "日常感觉轻亮"],
    description:
      "你的活力处在很舒服的位置，不需要硬撑，也不会完全省电。风格偏轻快，社交气质不压人，适合截图分享给熟人一起玩。",
    shareText:
      "我测到的是「轻亮在线型」, 现在的状态属于刚刚好的那种。表达倾向稳定，日常感觉轻快，发出去也不会有负担。"
  },
  {
    id: "full-presence",
    title: "满格在场型",
    subtitle: "你这阵子的活力很足，走到哪都像自带在线感。",
    energyLabel: "活人感电量 80%",
    tags: ["活力很在线", "社交气质有亮点", "风格更外放"],
    description:
      "你的状态很容易把场面带热，表达倾向直接，反应也快。整体风格属于看起来就有在场感的人，截图晒出来会很有记忆点。",
    shareText:
      "我测到的是「满格在场型」, 最近的活力是真的很在线。风格偏外放，社交气质也比较有亮点，难怪总有人说我一出现就有感觉。"
  },
  {
    id: "spark-leader",
    title: "全场带电型",
    subtitle: "你不是简单在线，你是那种能把活力传出去的人。",
    energyLabel: "活人感电量 100%",
    tags: ["状态高亮", "表达倾向直接", "社交气质带动感"],
    description:
      "你的风格非常有存在感，活力不仅自己够用，还会把周围人的状态一起带起来。日常感觉偏明快，适合做这套测试的截图分享担当。",
    shareText:
      "我测到的是「全场带电型」, 我的状态属于高亮在线那一档。表达倾向很直接，社交气质也自带带动感，截图发给朋友刚刚好。"
  }
];
