import { chordDegrees } from "./harmony";

export const constraintA1 = (harmony: FixedHarmony): boolean => {
  const chordDegs = chordDegrees(harmony.chord);
  // ten, alt, sop は和音の構成音でなければならない
  if (!chordDegs.includes(mod(harmony.ten))) return false;
  if (!chordDegs.includes(mod(harmony.alt))) return false;
  if (!chordDegs.includes(mod(harmony.sop))) return false;
  // 第3音は必ず和音の構成音でなければならない
  // TODO: 根音省略形は?
  if (
    ![
      mod(harmony.bas),
      mod(harmony.ten),
      mod(harmony.alt),
      mod(harmony.sop),
    ].includes(chordDegs[1])
  )
    return false;
  return true;
};

// def constraint_A2(harmony: Harmony) -> bool:
//     # 限定進行音重複
//     if harmony.chord in Vs:
//         if [harmony.bas % 7, harmony.ten % 7, harmony.alt % 7, harmony.sop % 7].count(
//             6
//         ) > 1:
//             return False
//         if [harmony.bas % 7, harmony.ten % 7, harmony.alt % 7, harmony.sop % 7].count(
//             3
//         ) > 1 and harmony.chord != Chord.V7_2_:
//             return False
//     return True

// def constraint_A3(harmony: Harmony) -> bool:
//     if harmony.chord in V9s:
//         if harmony.ten % 7 == 5 and harmony.ten - harmony.bas < 8:
//             return False
//         if harmony.alt % 7 == 5 and harmony.alt - harmony.bas < 8:
//             return False
//         if harmony.sop % 7 == 5 and harmony.sop - harmony.bas < 8:
//             return False
//     return True

// def constraint_A4(harmony: Harmony) -> bool:
//     # TODO: 長調のみ対応
//     if harmony.chord in V9s:
//         voices = [harmony.bas, harmony.ten, harmony.alt, harmony.sop]
//         for v1 in voices:
//             for v2 in voices:
//                 if v1 % 7 == 6 and v2 % 7 == 5 and v2 - v1 < 6:
//                     return False
//         # TODO: 予備の例外
//     return True

export const constraintB1 = (
  prev: FixedHarmony,
  next: FixedHarmony
): boolean => {
  // Sec. 12: 進行に関する制限
  // (1) 長短7度の進行は制限される
  if (Math.abs(next.bas - prev.bas) == 6) return false;
  if (Math.abs(next.ten - prev.ten) == 6) return false;
  if (Math.abs(next.alt - prev.alt) == 6) return false;
  if (Math.abs(next.sop - prev.sop) == 6) return false;
  // (2) 増音程の...
  // NOTE: C において増音程はF-Hの増4度のみ?
  if (mod(next.bas) == 3 && mod(prev.bas) == 6) return false;
  if (mod(next.ten) == 3 && mod(prev.ten) == 6) return false;
  if (mod(next.alt) == 3 && mod(prev.alt) == 6) return false;
  if (mod(next.sop) == 3 && mod(prev.sop) == 6) return false;
  if (mod(next.bas) == 6 && mod(prev.bas) == 3) return false;
  if (mod(next.ten) == 6 && mod(prev.ten) == 3) return false;
  if (mod(next.alt) == 6 && mod(prev.alt) == 3) return false;
  if (mod(next.sop) == 6 && mod(prev.sop) == 3) return false;
  // (3) 複音程（9度以上の音程）の...
  if (Math.abs(next.bas - prev.bas) > 7) return false;
  if (Math.abs(next.ten - prev.ten) > 7) return false;
  if (Math.abs(next.alt - prev.alt) > 7) return false;
  if (Math.abs(next.sop - prev.sop) > 7) return false;
  return true;
};

export const constraintB2 = (
  prev: FixedHarmony,
  next: FixedHarmony
): boolean => {
  if (Vs.includes(prev.chord)) {
    // Sec 42:
    // 限定進行音
    // IV -> III (2度下行)
    if (
      mod(prev.bas) === 3 &&
      !(next.bas === prev.bas - 1 || next.bas === prev.bas)
    )
      return false;
    if (
      mod(prev.ten) === 3 &&
      !(next.ten === prev.ten - 1 || next.ten === prev.ten)
    )
      return false;
    if (
      mod(prev.alt) === 3 &&
      !(next.alt === prev.alt - 1 || next.alt === prev.alt)
    )
      return false;
    if (
      mod(prev.sop) === 3 &&
      !(next.sop === prev.sop - 1 || next.sop === prev.sop)
    )
      return false;
    // VII -> I (2度上行)
    if (
      mod(prev.bas) === 6 &&
      !(next.bas === prev.bas + 1 || next.bas === prev.bas)
    )
      return false;
    if (
      mod(prev.ten) === 6 &&
      !(next.ten === prev.ten + 1 || next.ten === prev.ten)
    )
      return false;
    if (
      mod(prev.alt) === 6 &&
      !(next.alt === prev.alt + 1 || next.alt === prev.alt)
    )
      return false;
    if (
      mod(prev.sop) === 6 &&
      !(next.sop === prev.sop + 1 || next.sop === prev.sop)
    )
      return false;
    // VI -> V (V9 9音 2度下行)
    if (
      mod(prev.bas) === 5 &&
      !(next.bas === prev.bas - 1 || next.bas === prev.bas)
    )
      return false;
    if (
      mod(prev.ten) === 5 &&
      !(next.ten === prev.ten - 1 || next.ten === prev.ten)
    )
      return false;
    if (
      mod(prev.alt) === 5 &&
      !(next.alt === prev.alt - 1 || next.alt === prev.alt)
    )
      return false;
    if (
      mod(prev.sop) === 5 &&
      !(next.sop === prev.sop - 1 || next.sop === prev.sop)
    )
      return false;
    // TODO: 付則1
    // TODO: 付則2
  }
  return true;
};

export const constraintC1 = (
  prev: FixedHarmony,
  next: FixedHarmony
): boolean => {
  // Sec. 14: 同時進行に関する禁則
  // (1) 連続8度・連続1度
  const pairs = [
    [
      [prev.bas, prev.ten],
      [next.bas, next.ten],
    ],
    [
      [prev.bas, prev.alt],
      [next.bas, next.alt],
    ],
    [
      [prev.bas, prev.sop],
      [next.bas, next.sop],
    ],
    [
      [prev.ten, prev.alt],
      [next.ten, next.alt],
    ],
    [
      [prev.ten, prev.sop],
      [next.ten, next.sop],
    ],
    [
      [prev.alt, prev.sop],
      [next.alt, next.sop],
    ],
  ];
  for (const pair of pairs) {
    const [prevVoices, nextVoices] = pair;
    // (1) 連続8度・連続1度
    if (
      mod(prevVoices[0]) == mod(prevVoices[1]) &&
      mod(nextVoices[0]) == mod(nextVoices[1])
    )
      return false;
  }

  return true;
};

export const constraintC2 = (
  prev: FixedHarmony,
  next: FixedHarmony
): boolean => {
  // Sec. 14: 同時進行に関する禁則
  // (2) 連続5度
  const pairs = [
    [
      [prev.bas, prev.ten],
      [next.bas, next.ten],
    ],
    [
      [prev.bas, prev.alt],
      [next.bas, next.alt],
    ],
    [
      [prev.bas, prev.sop],
      [next.bas, next.sop],
    ],
    [
      [prev.ten, prev.alt],
      [next.ten, next.alt],
    ],
    [
      [prev.ten, prev.sop],
      [next.ten, next.sop],
    ],
    [
      [prev.alt, prev.sop],
      [next.alt, next.sop],
    ],
  ];
  for (const pair of pairs) {
    const [prevVoices, nextVoices] = pair;
    if (
      mod(Math.abs(prevVoices[0] - prevVoices[1])) === 4 &&
      mod(Math.abs(nextVoices[0] - nextVoices[1])) === 4
    ) {
      // 後続音程が F-H(in C) の減5度の場合は除外
      // TODO: C2付則
      if (
        !(mod(nextVoices[0]) === 3 && mod(nextVoices[1]) === 6) ||
        (mod(nextVoices[0]) === 6 && mod(nextVoices[1]) === 3)
      )
        return false;
    }
  }
  return true;
};

export const constraintC3 = (
  prev: FixedHarmony,
  next: FixedHarmony
): boolean => {
  // Sec. 14: 同時進行に関する禁則
  // (3) 並達8度・並達5度
  if ((next.bas - prev.bas) * (next.sop - prev.sop) > 0) {
    // 進行が並行
    // 並達8度
    if (mod(next.bas) == mod(next.sop)) {
      // sop が順次進行する場合は除外
      if (Math.abs(next.sop - prev.sop) !== 1) return false;
    }
    // 並達5度
    if (mod(Math.abs(next.bas - next.sop)) == 4) {
      // sop が順次進行する場合と減5度の場合は除外
      if (
        !(
          Math.abs(next.sop - prev.sop) === 1 ||
          (mod(next.bas) === 3 && mod(next.sop) === 6) ||
          (mod(next.bas) === 6 && mod(next.sop) === 3)
        )
      )
        return false;
    }
  }

  return true;
};

export const constraintC4 = (
  prev: FixedHarmony,
  next: FixedHarmony
): boolean => {
  // Sec. 14: 同時進行に関する禁則
  // (3) 並達1度
  if (prev.chord === Chord.V && next.chord === Chord.I) {
    if (
      mod(prev.ten) === 6 &&
      mod(next.ten) === 0 &&
      next.ten - prev.ten === 1 &&
      next.bas - prev.bas === 3
    )
      // # 付則
      return true;
  }
  const pairs = [
    [
      [prev.bas, prev.ten],
      [next.bas, next.ten],
    ],
    [
      [prev.bas, prev.alt],
      [next.bas, next.alt],
    ],
    [
      [prev.bas, prev.sop],
      [next.bas, next.sop],
    ],
    [
      [prev.ten, prev.alt],
      [next.ten, next.alt],
    ],
    [
      [prev.ten, prev.sop],
      [next.ten, next.sop],
    ],
    [
      [prev.alt, prev.sop],
      [next.alt, next.sop],
    ],
  ];
  for (const pair of pairs) {
    const [prevVoices, nextVoices] = pair;
    if ((prevVoices[0] - nextVoices[0]) * (prevVoices[1] - nextVoices[1]) > 0)
      if (nextVoices[0] == nextVoices[1])
        // 進行が並行
        return false;
  }
  return true;
};

// def constraint_C5(prev: Harmony, next: Harmony) -> bool:
//     if prev.chord in V7s + V9s:
//         pairs = [
//             ((prev.bas, prev.ten), (next.bas, next.ten)),
//             ((prev.bas, prev.alt), (next.bas, next.alt)),
//             ((prev.bas, prev.sop), (next.bas, next.sop)),
//             ((prev.ten, prev.alt), (next.ten, next.alt)),
//             ((prev.ten, prev.sop), (next.ten, next.sop)),
//             ((prev.alt, prev.sop), (next.alt, next.sop)),
//         ]
//         for pair in pairs:
//             prev_voices, next_voices = pair
//             if (prev_voices[0] - next_voices[0]) * (
//                 prev_voices[1] - next_voices[1]
//             ) > 0:  # 進行が並行
//                 if (
//                     prev_voices[0] % 7 == 3
//                     and prev_voices[0] - next_voices[0] == 1
//                     and prev_voices[1] % 7 == 4
//                     and prev_voices[1] - next_voices[1] == 2
//                 ):
//                     return False
//                 if (
//                     prev_voices[1] % 7 == 3
//                     and prev_voices[1] - next_voices[1] == 1
//                     and prev_voices[0] % 7 == 4
//                     and prev_voices[0] - next_voices[0] == 2
//                 ):
//                     return False
//     return True
