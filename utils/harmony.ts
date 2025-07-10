export enum Chord {
  I,
  II,
  IV,
  V,
  VI,
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
