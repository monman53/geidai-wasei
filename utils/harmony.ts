export enum Chord {
  // 3和音
  // 基本位置
  I,
  II,
  IV,
  V,
  VI,
  // 第1転回位置
  I_1,
  II_1,
  IV_1,
  V_1,
  // 第2転回位置
  I_2,
  // II_2
  IV_2,
  V_2,
  // 7の和音
  V7,
  V7_1,
  V7_2,
  V7_3,
  // 根音省略
  V7_,
  V7_2_,
  // 9の和音
  V9,
  // 根音省略
  V9_1_,
  V9_2_,
  V9_3_,
}

export class Harmony {
  constructor(
    public chord: Chord | null,
    public bas: number | null,
    public ten: number | null,
    public alt: number | null,
    public sop: number | null
  ) {}
}

export const chordToYuzuri = (chord: Chord) => {
  switch (chord) {
    case Chord.I:
      return "Q";
    case Chord.II:
      return "X";
    case Chord.IV:
      return "R";
    case Chord.V:
      return "B";
    case Chord.VI:
      return "Y";
    default:
      console.error("Not implemented: ", chord);
  }
};

export const bassToChords = (bass: number): Chord[] => {
  switch (bass % 7) {
    case 0:
      return [Chord.I, Chord.IV_2];
    case 1:
      return [Chord.II, Chord.V_2, Chord.V7_2, Chord.V7_2_, Chord.V9_2_];
    case 2:
      return [Chord.I_1];
    case 3:
      return [Chord.IV, Chord.II_1, Chord.V7_3, Chord.V9_3_];
    case 4:
      return [Chord.V, Chord.I_2, Chord.V7, Chord.V9];
    case 5:
      return [Chord.VI, Chord.IV_1];
    case 6:
      return [Chord.V_1, Chord.V7_1, Chord.V7_, Chord.V9_1_];
  }
  return [];
};
