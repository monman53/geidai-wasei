type Position = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
type Octave = -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3;

// Accidental
// double flat | flat | natural | sharp | double sharp
type Accidental = -2 | -1 | 0 | 1 | 2;

export class Note {
  constructor(
    public readonly octave: Octave,
    public readonly position: Position,
    public readonly accidental: Accidental,
  ) {}
}
