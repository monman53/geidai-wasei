import { Note } from "./note";

test("construction", () => {
  new Note(0, 0, 0); // C4
  new Note(0, 1, 0); // C#4, D-4
  new Note(0, 2, 0); // D4
  new Note(0, 3, 0); // D#4, E-4
  new Note(0, 4, 0); // E4
  new Note(0, 5, 0); // F4
  new Note(0, 6, 0); // F#4, G-4
  new Note(0, 7, 0); // G4
  new Note(0, 8, 0); // G#4, A-4
  new Note(0, 9, 0); // A4
  new Note(0, 10, 0); // A#4, B-4
  new Note(0, 11, 0); // B4

  new Note(-1, 11, 1); // B#3
  new Note(-1, 11, -1); // B-3
  new Note(0, 11, 1); // B#4
  new Note(0, 11, -1); // B-4
  new Note(1, 11, 1); // B#5
  new Note(1, 11, -1); // B-5

  new Note(+3, 1, 0); // C7
  new Note(+2, 1, 0); // C6
  new Note(+1, 1, 0); // C5
  new Note(-1, 1, 0); // C3
  new Note(-2, 1, 0); // C2
  new Note(-3, 1, 0); // C1
  new Note(-4, 1, 0); // C0
});
