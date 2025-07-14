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
      return "W";
    case Chord.IV:
      return "R";
    case Chord.V:
      return "T";
    case Chord.VI:
      return "Y";
    case Chord.I_1:
      return "Q1";
    case Chord.II_1:
      return "W1";
    case Chord.IV_1:
      return "R1";
    case Chord.V_1:
      return "T1";
    case Chord.I_2:
      return "Q2";
    case Chord.IV_2:
      return "R2";
    case Chord.V_2:
      return "T2";
    case Chord.V7:
      return "T7";
    case Chord.V7_1:
      return "T71";
    case Chord.V7_2:
      return "T72";
    case Chord.V7_3:
      return "T73";
    case Chord.V7_:
      return "rT7";
    case Chord.V7_2_:
      return "rT72";
    case Chord.V9:
      return "T9";
    case Chord.V9_1_:
      return "rT91";
    case Chord.V9_2_:
      return "rT92";
    case Chord.V9_3_:
      return "rT93";
    default:
      console.error("Not implemented: ", chord);
  }
};

export const bassToChords = (bass: number): Chord[] => {
  switch ((bass + 700) % 7) {
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
