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
      <div className="result-card__hero">
        <p className="eyebrow">你的结果</p>
        <h2>{result.title}</h2>
        <p className="result-card__subtitle">{result.subtitle}</p>
        <div className="battery-meter" aria-label={result.energyLabel}>
          <div className="battery-meter__track">
            <div
              className="battery-meter__fill"
              style={{ width: `${energyPercent}%` }}
            />
          </div>
          <span className="battery-meter__label">{result.energyLabel}</span>
        </div>
      </div>

      <div className="tag-row">
        {result.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>

      <p className="result-card__description">{result.description}</p>

      <div className="result-card__share">
        <p className="eyebrow">截图文案</p>
        <p>{result.shareText}</p>
      </div>

      <ComplianceNotice />

      <div className="button-row">
        <button type="button" className="primary-button" onClick={onCopy}>
          {copied ? "已复制结果文案" : "复制结果文案"}
        </button>
        <button type="button" className="ghost-button" onClick={onRestart}>
          再测一次
        </button>
      </div>
    </section>
  );
}
