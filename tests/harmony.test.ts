import { describe, it, expect, assert } from "vitest";
import { Chord, bassToChords, chordBas } from "../utils/harmony";

describe("bassToChord", () => {
  it("unique", () => {
    let chords: Chord[] = [];
    chords = chords.concat(bassToChords(0));
    chords = chords.concat(bassToChords(1));
    chords = chords.concat(bassToChords(2));
    chords = chords.concat(bassToChords(3));
    chords = chords.concat(bassToChords(4));
    chords = chords.concat(bassToChords(5));
    chords = chords.concat(bassToChords(6));
    expect(chords.length).toBe(new Set(chords).size);
    expect(chords.length).toBe(Object.keys(Chord).length / 2);
  });
});

describe("degrees", () => {
  it("bass", () => {
    for (let bas = 0; bas < 7; bas += 1) {
      const chords = bassToChords(bas);
      assert(chords.length > 0);
      for (const chord of chords) {
        expect(chordBas(chord)).toBe(bas);
      }
    }
  });
});
