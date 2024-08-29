import assert from "assert";

// export type Position = 0 | 1 | 2 | 3 | 4 | 5 | 6;
// export type Octave = -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3;

// // Accidental
// // double flat | flat | natural | sharp | double sharp
// export type Accidental = -2 | -1 | 0 | 1 | 2;

export class Note {
  constructor(
    public readonly octave: number,
    public readonly position: number,
    public readonly accidental: number,
  ) {
    assert(Number.isInteger(octave));
    assert(Number.isInteger(position));
    assert(Number.isInteger(accidental));

    assert(octave >= -4 && octave < 4);
    assert(position >= 0 && position < 7);
    assert(accidental >= -2 && accidental <= 2);
  }

  getPitch = (withAccidental = true) => {
    const pitchPosition = this.position * 2 + (this.position > 2 ? -1 : 0);
    if (withAccidental) {
      return this.octave * 12 + pitchPosition + this.accidental;
    } else {
      return this.octave * 12 + pitchPosition;
    }
  };

  getGlobalPosition = () => {
    return 7 * this.octave + this.position;
  };
}
