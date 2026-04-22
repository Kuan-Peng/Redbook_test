import type { ResultBucket } from "../data/results";
import { ComplianceNotice } from "./ComplianceNotice";

type ResultCardProps = {
  result: ResultBucket;
  energyPercent: number;
  onCopy: () => void;
  copied: boolean;
  onRestart: () => void;
};

export function ResultCard({
  result,
  energyPercent,
  onCopy,
  copied,
  onRestart
}: ResultCardProps) {
  return (
    <section className="panel result-card">
      <div className="result-poster">
        <div className="result-poster__top">
          <span className="result-poster__energy">{result.energyLabel}</span>
          <span className="result-poster__eyebrow">你的结果</span>
        </div>
        <h2>{result.title}</h2>
        <p className="result-card__subtitle">{result.subtitle}</p>
        <div className="result-poster__artboard">
          <div className="result-poster__meter battery-meter" aria-label={result.energyLabel}>
            <div className="battery-meter__track">
              <div
                className="battery-meter__fill"
                style={{ width: `${energyPercent}%` }}
              />
            </div>
          </div>
          <img className="result-poster__art" src="/mascot-heart-cloud.svg" alt="" />
          <div className="tag-row result-poster__tags">
            {result.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <ComplianceNotice compact />
      </div>

      <div className="result-card__share">
        <p className="eyebrow">发圈文案</p>
        <p>{result.shareText}</p>
      </div>

      <div className="button-row button-row--result">
        <button type="button" className="primary-button" onClick={onCopy}>
          {copied ? "已复制，快去发" : "复制这段发朋友"}
        </button>
        <button type="button" className="ghost-button" onClick={onRestart}>
          重开这把
        </button>
      </div>
    </section>
  );
}
