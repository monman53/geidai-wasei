import { Note } from "./note";

export class Interval {
  public readonly degree: number;
  public readonly octave: number;
  public readonly isPerfect: boolean;
  public readonly isMajor: boolean;
  public readonly isMinor: boolean;
  public readonly isAugmented: boolean;
  public readonly isDiminished: boolean;
  public readonly shift: number; // For augmented/diminished intervals
  private naturalPitchDiff: number;
  private pitchWidth: number;
  constructor(a: Note, b: Note) {
    // Make b > a
    if (a.getGlobalPosition() > b.getGlobalPosition()) {
      // Swap
      const tmp = a;
      a = b;
      b = tmp;
    }

    this.degree = (b.getGlobalPosition() - a.getGlobalPosition()) % 7;
    this.octave = (b.getGlobalPosition() - a.getGlobalPosition()) / 7;

    this.naturalPitchDiff = b.getPitch(false) - a.getPitch(false);
    this.pitchWidth = Math.abs(b.getPitch() - a.getPitch());

    this.isPerfect = false;
    this.isMajor = false;
    this.isMinor = false;
    this.isAugmented = false;
    this.isDiminished = false;
    this.shift = 0;

    const perfectType =
      this.degree === 0 || this.degree === 3 || this.degree === 4;

    const shift = (() => {
      const shift = this.pitchWidth - this.naturalPitchDiff;
      // Perfect intervals
      if (this.degree === 0) {
        return shift;
      }
      if (this.degree === 3 && this.naturalPitchDiff === 5) {
        return shift;
      }
      if (this.degree === 4 && this.naturalPitchDiff === 7) {
        return shift;
      }
      if (this.degree === 4 && this.naturalPitchDiff === 6) {
        return shift - 1;
      }

      // Minor intervals
      if (this.degree === 1 && this.naturalPitchDiff === 1) {
        return shift;
      }
      if (this.degree === 2 && this.naturalPitchDiff === 3) {
        return shift;
      }
      if (this.degree === 5 && this.naturalPitchDiff === 8) {
        return shift;
      }
      if (this.degree === 6 && this.naturalPitchDiff === 10) {
        return shift;
      }

      // Major intervals
      return shift + 1;
    })();

    if (perfectType) {
      if (shift === 0) {
        this.isPerfect = true;
      } else if (shift > 0) {
        this.isAugmented = true;
        this.shift = shift;
      } else if (shift < 0) {
        this.isDiminished = true;
        this.shift = shift;
      }
    } else {
      if (shift === 0) {
        this.isMinor = true;
      } else if (shift === 1) {
        this.isMajor = true;
      } else if (shift < 0) {
        this.isDiminished = true;
        this.shift = shift;
      } else if (shift > 1) {
        this.isAugmented = true;
        this.shift = shift - 1;
      }
    }
  }
}
