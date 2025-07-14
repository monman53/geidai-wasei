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

export const Vs = [
  Chord.V,
  Chord.V_1,
  Chord.V_2,
  Chord.V7,
  Chord.V7_1,
  Chord.V7_2,
  Chord.V7_3,
  Chord.V7_,
  Chord.V7_2_,
  Chord.V9,
  Chord.V9_1_,
  Chord.V9_2_,
  Chord.V9_3_,
];
export const V7s = [
  Chord.V7,
  Chord.V7_1,
  Chord.V7_2,
  Chord.V7_3,
  Chord.V7_,
  Chord.V7_2_,
];
export const V9s = [Chord.V9, Chord.V9_1_, Chord.V9_2_, Chord.V9_3_];

export enum Key {
  C,
}

export class Harmony {
  constructor(
    public key: Key,
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

export const chordDegrees = (chord: Chord): number[] => {
  switch (chord) {
    case Chord.I:
    case Chord.I_1:
    case Chord.I_2:
      return [0, 2, 4];
    case Chord.II:
    case Chord.II_1:
      return [1, 3, 5];
    case Chord.IV:
    case Chord.IV_1:
    case Chord.IV_2:
      return [3, 5, 0];
    case Chord.V:
    case Chord.V_1:
    case Chord.V_2:
      return [4, 6, 1];
    case Chord.VI:
      return [5, 0, 2];
    case Chord.V7:
    case Chord.V7_1:
    case Chord.V7_2:
    case Chord.V7_3:
      return [4, 6, 1, 3];
    case Chord.V7_2_:
      return [6, 1, 3];
    case Chord.V9:
      return [4, 6, 3, 5];
    case Chord.V9_1_:
    case Chord.V9_2_:
    case Chord.V9_3_:
      return [6, 1, 3, 5];
    default:
      console.error("Not implemented: ", chord);
      return [];
  }
};

export const chordBas = (chord: Chord): number => {
  const chord_deg = chordDegrees(chord);
  switch (chord) {
    // 基本位置
    case Chord.I:
    case Chord.II:
    case Chord.IV:
    case Chord.V:
    case Chord.VI:
    case Chord.V7:
    case Chord.V9:
      return chord_deg[0];
    // 第1転回位置
    case Chord.I_1:
    case Chord.II_1:
    case Chord.IV_1:
    case Chord.V_1:
    case Chord.V7_1:
      return chord_deg[1];
    // 第2転回位置
    case Chord.I_2:
    case Chord.IV_2:
    case Chord.V_2:
    case Chord.V7_2:
      return chord_deg[2];
    // 第3転回位置
    case Chord.V7_3:
      return chord_deg[3];
    // 第1転回位置（根音省略）
    case Chord.V7_2_:
      return chord_deg[1];
    // TODO: Check
    case Chord.V9_1_:
      return chord_deg[1];
    case Chord.V9_2_:
      return chord_deg[2];
    case Chord.V9_3_:
      return chord_deg[3];
    default:
      console.error("Not implemented: ", chord);
      return -1;
  }
};

export class Music {
  constructor(public harmonies: Harmony[], public penalty: number) {}
}

export const voiceRange = (key: Key) => {
  switch (key) {
    case Key.C:
    default:
      return {
        bas: {
          min: -14 + 3,
          max: 1,
        },
        ten: {
          min: -7,
          max: 5,
        },
        alt: {
          min: -7 + 4,
          max: 7 + 1,
        },
        sop: {
          min: 0,
          max: 7 + 5,
        },
      };
  }
};
