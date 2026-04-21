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
    title: "离线回血型",
    subtitle: "先别催，你现在最需要的是回魂。",
    energyLabel: "活人感电量 20%",
    tags: ["今天主打静音恢复", "社交权限暂时关闭", "先把自己救回来"],
    description:
      "你最近更像在安静补电，不是故意消失，是这点电真得省着花。先让自己缓过来，等状态回来了再出去浪也不迟。",
    shareText:
      "我测出来是「离线回血型」：最近真的偏低电，谁来都先缓缓，等我把自己充明白，再回来当活人。"
  },
  {
    id: "slow-warm",
    title: "省电营业型",
    subtitle: "人是在线的，电得省着花。",
    energyLabel: "活人感电量 40%",
    tags: ["能营业但别连轴转", "看场合分配电量", "回复速度随电量浮动"],
    description:
      "你不是不想搭理人，是最近更会挑场子挑时机。能上线，但不会乱开高耗模式，属于把电量精打细算那一挂。",
    shareText:
      "我测出来是「省电营业型」：不是不想社交，是最近电量比较珍贵，能上线，但要挑人、挑局、挑时机。"
  },
  {
    id: "light-online",
    title: "慢热回温型",
    subtitle: "你不是没活人感，你只是开机慢一点。",
    energyLabel: "活人感电量 60%",
    tags: ["慢热但不是没梗", "熟了以后自动续航", "低调回电中"],
    description:
      "你得先热机，状态才会慢慢亮起来。刚见面不一定最炸，但熟了以后很能接，也属于越待越顺那种人。",
    shareText:
      "我测出来是「慢热回温型」：得先给我一点时间，熟了以后其实不无聊，状态上来之后也能稳定在线。"
  },
  {
    id: "full-presence",
    title: "半糖在线型",
    subtitle: "你不是高调发光型，但挺耐聊。",
    energyLabel: "活人感电量 80%",
    tags: ["有空就能接上梗", "气氛对了就放电", "熟人局更有发挥"],
    description:
      "你的状态不算炸场，但胜在顺手又耐聊。人对了、场子对了，你很快就能切进活人模式，属于看着低调其实挺会玩的类型。",
    shareText:
      "我测出来是「半糖在线型」：不是那种走到哪都最炸的，但状态不差，场子对了、人对了，我也能立刻进入活人模式。"
  },
  {
    id: "spark-leader",
    title: "满电蹦跶型",
    subtitle: "你这不是在线，是电量外溢。",
    energyLabel: "活人感电量 100%",
    tags: ["气氛来了就发电", "看到人就自动亮", "今天属于高能量局"],
    description:
      "你最近就是那种一上线就有动静的人，热闹场子基本一碰就亮。不是硬撑出来的高能量，是你真的还蛮有电。",
    shareText:
      "我测出来是「满电蹦跶型」：最近真的很在线，情绪来得快，电量也回得快，热闹场子基本一碰就亮。"
  }
];
