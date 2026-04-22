import { useState } from "react";
import { ComplianceNotice } from "./components/ComplianceNotice";
import { QuestionCard } from "./components/QuestionCard";
import { ResultCard } from "./components/ResultCard";
import { questions } from "./data/questions";
import { getEnergyPercent, getProgressPercent, getResultBucket } from "./lib/scoring";

type Stage = "cover" | "intro" | "quiz" | "result";

const productTitle = "活人感电量测试";
const productSubtitle = "你今天是满电乱窜，还是勉强营业？";
const coverStickers = ["⚡ 满电乱窜", "🫠 勉强营业", "📵 低电静音"] as const;
const coverTags = ["1 分钟露馅", "群聊一甩就懂", "适合截图发人"];
const introBullets = [
  "共 12 题，选最像你的那一个。",
  "别回头改，越改越像在挽尊。",
  "做完直接见结果，顺手就能发人。"
] as const;

function App() {
  const [stage, setStage] = useState<Stage>("cover");
  const [answers, setAnswers] = useState<number[]>([]);
  const [copied, setCopied] = useState(false);

  const currentIndex = answers.length;
  const currentQuestion = questions[currentIndex];
  const totalScore = answers.reduce((sum, score) => sum + score, 0);
  const result = getResultBucket(totalScore);
  const progressPercent = getProgressPercent(currentIndex, questions.length);
  const energyPercent = getEnergyPercent(totalScore, questions.length, questions.length * 4);

  const startQuiz = () => {
    setCopied(false);
    setStage("quiz");
  };

  const restart = () => {
    setAnswers([]);
    setCopied(false);
    setStage("cover");
  };

  const handleAnswer = (score: number) => {
    setCopied(false);
    const nextAnswers = [...answers, score];
    setAnswers(nextAnswers);

    if (nextAnswers.length === questions.length) {
      setStage("result");
    }
  };

  const handleBack = () => {
    setCopied(false);
    setAnswers((prev) => prev.slice(0, -1));
  };

  const handleCopy = async () => {
    const text = [
      `我测到的是「${result.title}」`,
      result.subtitle,
      result.shareText,
      ...result.tags,
      "仅供娱乐",
      "非专业评估",
      "不构成医学/心理/诊断建议"
    ].join("\n");

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.setAttribute("readonly", "true");
      textarea.style.position = "absolute";
      textarea.style.left = "-9999px";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
    }
  };

  return (
    <div className={`app-shell app-shell--${stage}`}>
      <main className="app-frame">
        <header className="topbar">
          <div className="topbar__brand">
            <p className="eyebrow">原创在线测试页体验</p>
            <h1>{productTitle}</h1>
          </div>
          <span className="topbar__pill">结果可截图</span>
        </header>

        {stage === "cover" ? (
          <section className="panel hero-panel">
            <div className="hero-panel__content">
              <div className="hero-panel__spark">⚡</div>
              <p className="hero-panel__badge">⚡ 今日活人值速测</p>
              <h2>{productSubtitle}</h2>
              <p className="hero-panel__text">12 题就够，看你最近到底是⚡、🫠还是📵。</p>
              <div className="hero-sticker-row">
                {coverStickers.map((sticker) => (
                  <span key={sticker} className="hero-panel__sticker">
                    {sticker}
                  </span>
                ))}
              </div>
              <div className="chip-row">
                {coverTags.map((tag) => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="hero-panel__cta">
                <button type="button" className="primary-button" onClick={() => setStage("intro")}>
                  开始测测看
                </button>
                <p className="hero-panel__hint">先测再嘴硬，也还来得及。</p>
              </div>
            </div>
            <ComplianceNotice />
          </section>
        ) : null}

        {stage === "intro" ? (
          <section className="panel intro-panel">
            <p className="eyebrow">玩法说明</p>
            <h2>别演，按第一反应点。</h2>
            <ul className="check-list">
              {introBullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
            <div className="button-row">
              <button type="button" className="primary-button" onClick={startQuiz}>
                进入测试
              </button>
              <button type="button" className="ghost-button" onClick={() => setStage("cover")}>
                返回封面
              </button>
            </div>
          </section>
        ) : null}

        {stage === "quiz" && currentQuestion ? (
          <>
            <section className="progress-panel">
              <div className="progress-panel__meta">
                <span>当前进度</span>
                <span>{progressPercent}%</span>
              </div>
              <div className="progress-bar" aria-hidden="true">
                <div className="progress-bar__fill" style={{ width: `${progressPercent}%` }} />
              </div>
            </section>
            <QuestionCard
              current={currentIndex + 1}
              total={questions.length}
              question={currentQuestion}
              onSelect={handleAnswer}
              onBack={handleBack}
              canGoBack={currentIndex > 0}
            />
          </>
        ) : null}

        {stage === "result" ? (
          <ResultCard
            result={result}
            energyPercent={energyPercent}
            copied={copied}
            onCopy={handleCopy}
            onRestart={restart}
          />
        ) : null}
      </main>
    </div>
  );
}

export default App;
