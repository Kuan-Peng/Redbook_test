import { complianceLines } from "../data/results";

type ComplianceNoticeProps = {
  compact?: boolean;
};

export function ComplianceNotice({ compact = false }: ComplianceNoticeProps) {
  return (
    <div className={`compliance ${compact ? "compliance--compact" : ""}`}>
      {complianceLines.map((line) => (
        <span key={line} className="compliance__item">
          {line}
        </span>
      ))}
    </div>
  );
}
