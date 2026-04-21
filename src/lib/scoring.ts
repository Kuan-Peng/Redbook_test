import { resultBuckets, type ResultBucket } from "../data/results";

export const getResultBucket = (totalScore: number): ResultBucket => {
  if (totalScore <= 18) {
    return resultBuckets[0];
  }

  if (totalScore <= 25) {
    return resultBuckets[1];
  }

  if (totalScore <= 32) {
    return resultBuckets[2];
  }

  if (totalScore <= 39) {
    return resultBuckets[3];
  }

  return resultBuckets[4];
};

export const getProgressPercent = (answersCount: number, totalQuestions: number) =>
  Math.round((answersCount / totalQuestions) * 100);

export const getEnergyPercent = (score: number, minScore: number, maxScore: number) => {
  const raw = ((score - minScore) / (maxScore - minScore)) * 100;
  return Math.max(0, Math.min(100, Math.round(raw)));
};
