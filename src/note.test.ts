import { Note } from "./note";

test("construction", () => {
  new Note(0, 0, 0); // C4
  new Note(0, 0, +1); // C#4
  new Note(0, 1, -1); // D-4
  new Note(0, 1, 0); // D4
  new Note(0, 1, +1); // D#4
  new Note(0, 2, -1); // E-4
  new Note(0, 2, 0); // E4
  new Note(0, 3, 0); // F4
  new Note(0, 3, +1); // F#4
  new Note(0, 4, -1); // G-4
  new Note(0, 4, 0); // G4
  new Note(0, 4, +1); // G#4
  new Note(0, 5, -1); // A-4
  new Note(0, 5, 0); // A4
  new Note(0, 5, +1); // A#4
  new Note(0, 6, -1); // B-4
  new Note(0, 6, 0); // B4

  new Note(0, 0, +2); // C##4
  new Note(0, 0, -2); // C--4

  new Note(-4, 0, 0); // C0
  new Note(-3, 0, 0); // C1
  new Note(-2, 0, 0); // C2
  new Note(-1, 0, 0); // C3
  new Note(+1, 0, 0); // C5
  new Note(+2, 0, 0); // C6
  new Note(+3, 0, 0); // C7

  for (let octave = -4; octave <= 3; octave++) {
    for (let position = 0; position <= 6; position++) {
      for (let accidental = -2; accidental <= 2; accidental++) {
        new Note(octave, position, accidental);
      }
    }
  }
});
