export const calcPenalty = (prev: FixedHarmony, next: FixedHarmony): number => {
  let penalty = 0.0;
  // sop と bas が並行
  if ((next.bas - prev.bas) * (next.sop - prev.sop) >= 0) penalty += 5.0;
  // 声部の移動量
  penalty += Math.abs(next.bas - prev.bas);
  penalty += Math.abs(next.ten - prev.ten);
  penalty += Math.abs(next.alt - prev.alt);
  penalty += Math.abs(next.sop - prev.sop);
  return penalty;
};
