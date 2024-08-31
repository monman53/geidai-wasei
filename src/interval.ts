import assert from "assert";
import { Note } from "./note";

export class Interval {
  constructor(
    public readonly degree: number,
    public readonly octave: number,
    public readonly isPerfect: boolean,
    public readonly isMinor: boolean,
    public readonly isMajor: boolean,
    public readonly isDiminished: boolean,
    public readonly isAugmented: boolean,
    public readonly shift: number, // For augmented/diminished intervals
  ) {
    assert(Number.isInteger(degree));
    assert(Number.isInteger(octave));
    assert(Number.isInteger(shift));
    assert(degree >= 0);
    assert(octave >= 0);

    if (isPerfect) {
      assert(!isMajor);
      assert(!isMinor);
      assert(!isAugmented);
      assert(!isDiminished);
      assert(shift === 0);
    }
    if (isMajor || isMinor) {
      assert(!isPerfect);
      assert(!isAugmented);
      assert(!isDiminished);
      assert(shift === 0);
    }
    if (isAugmented || isDiminished) {
      assert(!isPerfect);
      assert(!isMinor);
      assert(!isMajor);
      assert(shift !== 0);
    }
  }

  static between = (a: Note, b: Note) => {
    // Make b > a
    if (a.getGlobalPosition() > b.getGlobalPosition()) {
      // Swap
      const tmp = a;
      a = b;
      b = tmp;
    }

    const degree = (b.getGlobalPosition() - a.getGlobalPosition()) % 7;
    const octave = Math.floor(
      (b.getGlobalPosition() - a.getGlobalPosition()) / 7,
    );

    const naturalPitchDiff = b.getPitch(false) - a.getPitch(false);
    const pitchWidth = Math.abs(b.getPitch() - a.getPitch());

    let isPerfect = false;
    let isMajor = false;
    let isMinor = false;
    let isAugmented = false;
    let isDiminished = false;
    let shift = pitchWidth - naturalPitchDiff;

    // Perfect intervals
    if (degree === 3 && naturalPitchDiff % 12 === 6) {
      shift = shift + 1;
    }
    if (degree === 4 && naturalPitchDiff % 12 === 6) {
      shift = shift - 1;
    }
    // Major intervals
    if (degree === 1 && naturalPitchDiff % 12 === 2) {
      shift = shift + 1;
    }
    if (degree === 2 && naturalPitchDiff % 12 === 4) {
      shift = shift + 1;
    }
    if (degree === 5 && naturalPitchDiff % 12 === 9) {
      shift = shift + 1;
    }
    if (degree === 6 && naturalPitchDiff % 12 === 11) {
      shift = shift + 1;
    }

    const perfectType = degree === 0 || degree === 3 || degree === 4;
    if (perfectType) {
      if (shift === 0) {
        isPerfect = true;
      } else if (shift > 0) {
        isAugmented = true;
      } else if (shift < 0) {
        isDiminished = true;
      }
    } else {
      if (shift === 0) {
        isMinor = true;
      } else if (shift === 1) {
        isMajor = true;
        shift = 0;
      } else if (shift < 0) {
        isDiminished = true;
      } else if (shift > 1) {
        isAugmented = true;
        shift = shift - 1;
      }
    }

    return new Interval(
      degree,
      octave,
      isPerfect,
      isMinor,
      isMajor,
      isDiminished,
      isAugmented,
      shift,
    );
  };
}
