export type Position = 0 | 1 | 2 | 3 | 4 | 5 | 6;
export type Octave = -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3;

// Accidental
// double flat | flat | natural | sharp | double sharp
export type Accidental = -2 | -1 | 0 | 1 | 2;

export class Note {
  constructor(
    public readonly octave: Octave,
    public readonly position: Position,
    public readonly accidental: Accidental,
  ) {}
}
