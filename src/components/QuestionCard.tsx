import type { Question } from "../data/questions";

type QuestionCardProps = {
  current: number;
  total: number;
  question: Question;
  selectedScore?: number;
  onSelect: (score: number) => void;
  onBack: () => void;
  canGoBack: boolean;
};

export function QuestionCard({
  current,
  total,
  question,
  selectedScore,
  onSelect,
  onBack,
  canGoBack
}: QuestionCardProps) {
  return (
    <section className="panel question-card">
      <div className="question-card__header">
        <div>
          <p className="eyebrow">
            第 {current} / {total} 题
          </p>
          <h2>{question.title}</h2>
        </div>
        {canGoBack ? (
          <button type="button" className="ghost-button" onClick={onBack}>
            上一题
          </button>
        ) : null}
      </div>
      <p className="question-card__hint">{question.hint}</p>
      <div className="option-list">
        {question.options.map((option) => {
          const selected = selectedScore === option.score;

          return (
            <button
              key={option.label}
              type="button"
              className={`option-button ${selected ? "option-button--selected" : ""}`}
              onClick={() => onSelect(option.score)}
            >
              <span className="option-button__marker">{selected ? "✓" : "○"}</span>
              <span>{option.label}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
