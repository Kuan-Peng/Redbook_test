import type { Question } from "../data/questions";

type QuestionCardProps = {
  current: number;
  total: number;
  question: Question;
  onSelect: (score: number) => void;
  onBack: () => void;
  canGoBack: boolean;
};

export function QuestionCard({
  current,
  total,
  question,
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
        {question.options.map((option, index) => {
          return (
            <button
              key={option.label}
              type="button"
              className="option-button"
              onClick={() => onSelect(option.score)}
            >
              <span className="option-button__marker">
                {String.fromCharCode(65 + index)}
              </span>
              <span className="option-button__text">{option.label}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
