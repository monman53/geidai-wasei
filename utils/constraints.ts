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

// def constraint_B2(prev: Harmony, next: Harmony):
//     if prev.chord in Vs:
//         # Sec 42:
//         # 限定進行音
//         # IV -> III (2度下行)
//         if prev.bas % 7 == 3 and not (next.bas == prev.bas - 1 or next.bas == prev.bas):
//             return False
//         if prev.ten % 7 == 3 and not (next.ten == prev.ten - 1 or next.ten == prev.ten):
//             return False
//         if prev.alt % 7 == 3 and not (next.alt == prev.alt - 1 or next.alt == prev.alt):
//             return False
//         if prev.sop % 7 == 3 and not (next.sop == prev.sop - 1 or next.sop == prev.sop):
//             return False
//         # VII -> I (2度上行)
//         if prev.bas % 7 == 6 and not (next.bas == prev.bas + 1 or next.bas == prev.bas):
//             return False
//         if prev.ten % 7 == 6 and not (next.ten == prev.ten + 1 or next.ten == prev.ten):
//             return False
//         if prev.alt % 7 == 6 and not (next.alt == prev.alt + 1 or next.alt == prev.alt):
//             return False
//         if prev.sop % 7 == 6 and not (next.sop == prev.sop + 1 or next.sop == prev.sop):
//             return False
//         # VI -> V (V9 9音 2度下行)
//         if prev.bas % 7 == 5 and not (next.bas == prev.bas - 1 or next.bas == prev.bas):
//             return False
//         if prev.ten % 7 == 5 and not (next.ten == prev.ten - 1 or next.ten == prev.ten):
//             return False
//         if prev.alt % 7 == 5 and not (next.alt == prev.alt - 1 or next.alt == prev.alt):
//             return False
//         if prev.sop % 7 == 5 and not (next.sop == prev.sop - 1 or next.sop == prev.sop):
//             return False
//         # TODO: 付則1
//         # TODO: 付則2
//     return True

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

// def constraint_C2(prev: Harmony, next: Harmony) -> bool:
//     # Sec. 14: 同時進行に関する禁則
//     # (2) 連続5度
//     pairs = [
//         ((prev.bas, prev.ten), (next.bas, next.ten)),
//         ((prev.bas, prev.alt), (next.bas, next.alt)),
//         ((prev.bas, prev.sop), (next.bas, next.sop)),
//         ((prev.ten, prev.alt), (next.ten, next.alt)),
//         ((prev.ten, prev.sop), (next.ten, next.sop)),
//         ((prev.alt, prev.sop), (next.alt, next.sop)),
//     ]
//     for pair in pairs:
//         prev_voices, next_voices = pair
//         if (
//             abs(prev_voices[0] - prev_voices[1]) % 7 == 4
//             and abs(next_voices[0] - next_voices[1]) % 7 == 4
//         ):
//             # 後続音程が F-H(in C) の減5度の場合は除外
//             # TODO: C2付則
//             if (next_voices[0] % 7 == 3 and next_voices[1] % 7 == 6) or (
//                 next_voices[0] % 7 == 6 and next_voices[1] % 7 == 3
//             ):
//                 pass
//             else:
//                 return False

//     return True

// def constraint_C3(prev: Harmony, next: Harmony) -> bool:
//     # Sec. 14: 同時進行に関する禁則
//     # (3) 並達8度・並達5度
//     # 並達8度
//     if (next.bas - prev.bas) * (next.sop - prev.sop) > 0:  # 進行が並行
//         if next.bas % 7 == next.sop % 7:
//             # sop が順次進行する場合は除外
//             if abs(next.sop - prev.sop) == 1:
//                 pass
//             else:
//                 return False
//     # 並達5度
//     if (next.bas - prev.bas) * (next.sop - prev.sop) > 0:  # 進行が並行
//         if abs(next.bas - next.sop) % 7 == 4:
//             # sop が順次進行する場合と減5度の場合は除外
//             if (
//                 abs(next.sop - prev.sop) == 1
//                 or (next.bas % 7 == 3 and next.sop % 7 == 6)
//                 or (next.bas % 7 == 6 and next.sop % 7 == 3)
//             ):
//                 pass
//             else:
//                 return False

//     return True

// def constraint_C4(prev: Harmony, next: Harmony) -> bool:
//     # Sec. 14: 同時進行に関する禁則
//     # (3) 並達1度
//     if prev.chord == Chord.V and next.chord == Chord.I:
//         if (
//             prev.ten % 7 == 6
//             and next.ten % 7 == 0
//             and next.ten - prev.ten == 1
//             and next.bas - prev.bas == 3
//         ):
//             # 付則
//             return True
//     pairs = [
//         ((prev.bas, prev.ten), (next.bas, next.ten)),
//         ((prev.bas, prev.alt), (next.bas, next.alt)),
//         ((prev.bas, prev.sop), (next.bas, next.sop)),
//         ((prev.ten, prev.alt), (next.ten, next.alt)),
//         ((prev.ten, prev.sop), (next.ten, next.sop)),
//         ((prev.alt, prev.sop), (next.alt, next.sop)),
//     ]
//     for pair in pairs:
//         prev_voices, next_voices = pair
//         if (prev_voices[0] - next_voices[0]) * (
//             prev_voices[1] - next_voices[1]
//         ) > 0:  # 進行が並行
//             if next_voices[0] == next_voices[1]:
//                 return False

//     return True

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
