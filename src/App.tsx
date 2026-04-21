import { useState } from "react";
import { ComplianceNotice } from "./components/ComplianceNotice";
import { QuestionCard } from "./components/QuestionCard";
import { ResultCard } from "./components/ResultCard";
import { questions } from "./data/questions";
import { getEnergyPercent, getProgressPercent, getResultBucket } from "./lib/scoring";

type Stage = "cover" | "intro" | "quiz" | "result";

const productTitle = "活人感电量测试";
const productSubtitle = "12 道小题，看看你现在更接近哪种在线状态。";
const deliveryLabel = "原创在线测试页体验 + 结果文案 + 截图分享体验";

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
          <div>
            <p className="eyebrow">原创在线测试页体验</p>
            <h1>{productTitle}</h1>
          </div>
          <span className="topbar__pill">结果可截图</span>
        </header>

        {stage === "cover" ? (
          <section className="panel hero-panel">
            <div className="hero-panel__content">
              <p className="hero-panel__badge">轻口语 · 好截图 · 手机端优先</p>
              <h2>{productSubtitle}</h2>
              <p className="hero-panel__text">
                这是一页就能跑通的原创小测试，适合快速开测、快速出结果、快速截图发给朋友。
              </p>
              <div className="chip-row">
                <span className="chip">12 题快速完成</span>
                <span className="chip">本地出结果</span>
                <span className="chip">文案可复制</span>
              </div>
              <button type="button" className="primary-button" onClick={() => setStage("intro")}>
                开始前看说明
              </button>
            </div>
            <ComplianceNotice />
          </section>
        ) : null}

        {stage === "intro" ? (
          <section className="panel intro-panel">
            <p className="eyebrow">测试说明</p>
            <h2>先用直觉作答，别来回改答案。</h2>
            <ul className="check-list">
              <li>共 12 题，选你当下最像的一项。</li>
              <li>全程本地完成，提交后直接出结果。</li>
              <li>交付内容就是这个原创单页网页里的测试体验、结果文案和截图分享体验。</li>
            </ul>
            <ComplianceNotice />
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
              selectedScore={answers[currentIndex]}
              onSelect={handleAnswer}
              onBack={handleBack}
              canGoBack={currentIndex > 0}
            />
            <ComplianceNotice compact />
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

      <footer className="footer">
        <p>{deliveryLabel}</p>
        <ComplianceNotice compact />
      </footer>
    </div>
  );
}

export default App;
