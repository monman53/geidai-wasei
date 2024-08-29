import { Note } from "./note";

export class Interval {
  public readonly degree: number;
  private internalDegree: number;
  private naturalPitchDiff: number;
  private pitchWidth: number;

  public readonly isPerfect: boolean;
  public readonly isMajor: boolean;
  public readonly isMinor: boolean;
  public readonly isAugmented: boolean;
  public readonly isDiminished: boolean;
  public readonly shift: number; // For augmented/diminished intervals
  constructor(a: Note, b: Note) {
    if (a.getGlobalPosition() > b.getGlobalPosition()) {
      // Swap
      const tmp = a;
      a = b;
      b = tmp;
    }

    this.degree = b.getGlobalPosition() - a.getGlobalPosition();

    this.internalDegree = this.degree % 7;
    this.naturalPitchDiff = b.getPitch(false) - a.getPitch(false);
    this.pitchWidth = Math.abs(b.getPitch() - a.getPitch());

    this.isPerfect = false;
    this.isMajor = false;
    this.isMinor = false;
    this.isAugmented = false;
    this.isDiminished = false;
    this.shift = 0;

    const perfectType =
      this.internalDegree === 0 ||
      this.internalDegree === 3 ||
      this.internalDegree === 4;

    const shift = (() => {
      const shift = this.pitchWidth - this.naturalPitchDiff;
      if (perfectType) {
        // Perfect intervals
        return shift;
      } else {
        // Minor intervals
        if (this.internalDegree === 1 && this.naturalPitchDiff === 1) {
          return shift;
        }
        if (this.internalDegree === 2 && this.naturalPitchDiff === 3) {
          return shift;
        }
        if (this.internalDegree === 5 && this.naturalPitchDiff === 8) {
          return shift;
        }
        if (this.internalDegree === 6 && this.naturalPitchDiff === 10) {
          return shift;
        }
        // Major intervals
        return shift + 1;
      }
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
