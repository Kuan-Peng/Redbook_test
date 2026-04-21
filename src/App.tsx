import { useState } from "react";
import { ComplianceNotice } from "./components/ComplianceNotice";
import { QuestionCard } from "./components/QuestionCard";
import { ResultCard } from "./components/ResultCard";
import { questions } from "./data/questions";
import { getEnergyPercent, getProgressPercent, getResultBucket } from "./lib/scoring";

type Stage = "cover" | "intro" | "quiz" | "result";

const productTitle = "活人感电量测试";
const productSubtitle = "12 题速测，你最近还剩几格活人电？";
const coverTags = ["12 题很快测完", "本地秒出结果", "截图发群聊很方便"];
const introBullets = [
  "共 12 题，选最像你的那一个。",
  "别回头改答案，越改越不像你。",
  "做完直接出结果，顺手就能截图发人。"
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
    <div className="app-shell">
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
              <p className="hero-panel__badge">⚡ 最近状态速测</p>
              <h2>{productSubtitle}</h2>
              <p className="hero-panel__text">1 分钟出结果，适合截图发朋友。</p>
              <div className="hero-panel__aside">
                <span className="hero-panel__sticker">群聊可发</span>
                <p>不是量表，是那种测完会顺手甩给朋友的轻测试。</p>
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
                <p className="hero-panel__hint">先测再嘴硬，也来得及。</p>
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
