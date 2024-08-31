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

test("pitch", () => {
  expect(new Note(-1, 0, 0).getPitch()).toBe(-12);
  expect(new Note(0, 0, 0).getPitch()).toBe(0);
  expect(new Note(1, 0, 0).getPitch()).toBe(12);

  expect(new Note(0, 0, 0).getPitch()).toBe(0);
  expect(new Note(0, 1, 0).getPitch()).toBe(2);
  expect(new Note(0, 2, 0).getPitch()).toBe(4);
  expect(new Note(0, 3, 0).getPitch()).toBe(5);
  expect(new Note(0, 4, 0).getPitch()).toBe(7);
  expect(new Note(0, 5, 0).getPitch()).toBe(9);
  expect(new Note(0, 6, 0).getPitch()).toBe(11);

  expect(new Note(0, 0, 1).getPitch()).toBe(1);
  expect(new Note(0, 1, 1).getPitch()).toBe(3);
  expect(new Note(0, 2, 1).getPitch()).toBe(5);
  expect(new Note(0, 3, 1).getPitch()).toBe(6);
  expect(new Note(0, 4, 1).getPitch()).toBe(8);
  expect(new Note(0, 5, 1).getPitch()).toBe(10);
  expect(new Note(0, 6, 1).getPitch()).toBe(12);

  expect(new Note(0, 0, -1).getPitch()).toBe(-1);
  expect(new Note(0, 1, -1).getPitch()).toBe(1);
  expect(new Note(0, 2, -1).getPitch()).toBe(3);
  expect(new Note(0, 3, -1).getPitch()).toBe(4);
  expect(new Note(0, 4, -1).getPitch()).toBe(6);
  expect(new Note(0, 5, -1).getPitch()).toBe(8);
  expect(new Note(0, 6, -1).getPitch()).toBe(10);
});

test("natural-pitch", () => {
  expect(new Note(-1, 0, 0).getNaturalPitch()).toBe(-12);
  expect(new Note(0, 0, 0).getNaturalPitch()).toBe(0);
  expect(new Note(1, 0, 0).getNaturalPitch()).toBe(12);

  expect(new Note(0, 0, 1).getNaturalPitch()).toBe(0);
  expect(new Note(0, 1, 1).getNaturalPitch()).toBe(2);
  expect(new Note(0, 2, 1).getNaturalPitch()).toBe(4);
  expect(new Note(0, 3, 1).getNaturalPitch()).toBe(5);
  expect(new Note(0, 4, 1).getNaturalPitch()).toBe(7);
  expect(new Note(0, 5, 1).getNaturalPitch()).toBe(9);
  expect(new Note(0, 6, 1).getNaturalPitch()).toBe(11);

  expect(new Note(0, 0, -1).getNaturalPitch()).toBe(0);
  expect(new Note(0, 1, -1).getNaturalPitch()).toBe(2);
  expect(new Note(0, 2, -1).getNaturalPitch()).toBe(4);
  expect(new Note(0, 3, -1).getNaturalPitch()).toBe(5);
  expect(new Note(0, 4, -1).getNaturalPitch()).toBe(7);
  expect(new Note(0, 5, -1).getNaturalPitch()).toBe(9);
  expect(new Note(0, 6, -1).getNaturalPitch()).toBe(11);
});

test("global-position", () => {
  expect(new Note(0, 0, 0).getGlobalPosition()).toBe(0);
  expect(new Note(0, 5, 0).getGlobalPosition()).toBe(5);
  expect(new Note(-1, 5, 0).getGlobalPosition()).toBe(-2);
  expect(new Note(1, 5, 0).getGlobalPosition()).toBe(12);
  expect(new Note(1, 5, 1).getGlobalPosition()).toBe(12);
});
