import { describe, it, expect } from "vitest";
import { Chord, bassToChords } from "../utils/harmony";

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
