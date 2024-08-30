import { Interval } from "./interval";
import { Note } from "./note";

const c4 = new Note(0, 0, 0);
const d4 = new Note(0, 1, 0);
const e4 = new Note(0, 2, 0);
const f4 = new Note(0, 3, 0);
const g4 = new Note(0, 4, 0);
const a4 = new Note(0, 5, 0);
const b4 = new Note(0, 6, 0);
const c5 = new Note(1, 0, 0);
const d5 = new Note(1, 1, 0);
const e5 = new Note(1, 2, 0);
const f5 = new Note(1, 3, 0);
const g5 = new Note(1, 4, 0);
const a5 = new Note(1, 5, 0);
const b5 = new Note(1, 6, 0);
const cm4 = new Note(0, 0, -1);
const dm4 = new Note(0, 1, -1);
const em4 = new Note(0, 2, -1);
const fm4 = new Note(0, 3, -1);
const gm4 = new Note(0, 4, -1);
const am4 = new Note(0, 5, -1);
const bm4 = new Note(0, 6, -1);
const cp4 = new Note(0, 0, 1);
const dp4 = new Note(0, 1, 1);
const ep4 = new Note(0, 2, 1);
const fp4 = new Note(0, 3, 1);
const gp4 = new Note(0, 4, 1);
const ap4 = new Note(0, 5, 1);
const bp4 = new Note(0, 6, 1);

test("1-perfects", () => {
  const intervals = [
    new Interval(c4, c4),
    new Interval(d4, d4),
    new Interval(f4, f4),
    new Interval(fp4, fp4),
  ];

  intervals.forEach((interval) => {
    expect(interval.degree).toBe(0);
    expect(interval.isPerfect).toBe(true);
    expect(interval.isAugmented).toBe(false);
    expect(interval.isDiminished).toBe(false);
    expect(interval.isMajor).toBe(false);
    expect(interval.isMinor).toBe(false);
  });
});

test("1-augmented", () => {
  const intervals = [
    new Interval(c4, cp4),
    new Interval(d4, dp4),
    new Interval(f4, fp4),
    new Interval(c4, cm4),
    new Interval(d4, dm4),
    new Interval(f4, fm4),
  ];

  intervals.forEach((interval) => {
    expect(interval.degree).toBe(0);
    expect(interval.isPerfect).toBe(false);
    expect(interval.isAugmented).toBe(true);
    expect(interval.isDiminished).toBe(false);
    expect(interval.isMajor).toBe(false);
    expect(interval.isMinor).toBe(false);
    expect(interval.shift).toBe(1);
  });
});

test("2-majors", () => {
  const intervals = [
    new Interval(c4, d4),
    new Interval(d4, e4),
    new Interval(f4, g4),
    new Interval(g4, a4),
    new Interval(a4, b4),
  ];

  intervals.forEach((interval) => {
    expect(interval.degree).toBe(1);
    expect(interval.isPerfect).toBe(false);
    expect(interval.isAugmented).toBe(false);
    expect(interval.isDiminished).toBe(false);
    expect(interval.isMajor).toBe(true);
    expect(interval.isMinor).toBe(false);
  });
});

test("2-minors", () => {
  const intervals = [new Interval(e4, f4), new Interval(b4, c5)];

  intervals.forEach((interval) => {
    expect(interval.degree).toBe(1);
    expect(interval.isPerfect).toBe(false);
    expect(interval.isAugmented).toBe(false);
    expect(interval.isDiminished).toBe(false);
    expect(interval.isMajor).toBe(false);
    expect(interval.isMinor).toBe(true);
  });
});

test("2-augmented", () => {
  const intervals = [
    new Interval(c4, dp4),
    new Interval(d4, ep4),
    new Interval(f4, gp4),
    new Interval(g4, ap4),
    new Interval(a4, bp4),
  ];

  intervals.forEach((interval) => {
    expect(interval.degree).toBe(1);
    expect(interval.isPerfect).toBe(false);
    expect(interval.isAugmented).toBe(true);
    expect(interval.isDiminished).toBe(false);
    expect(interval.isMajor).toBe(false);
    expect(interval.isMinor).toBe(false);
    expect(interval.shift).toBe(1);
  });
});

test("2-diminished", () => {
  // diminished
  const intervals = [
    new Interval(cp4, dm4),
    new Interval(dp4, em4),
    new Interval(fp4, gm4),
    new Interval(gp4, am4),
    new Interval(ap4, bm4),
  ];

  intervals.forEach((interval) => {
    expect(interval.degree).toBe(1);
    expect(interval.isPerfect).toBe(false);
    expect(interval.isAugmented).toBe(false);
    expect(interval.isDiminished).toBe(true);
    expect(interval.isMajor).toBe(false);
    expect(interval.isMinor).toBe(false);
    expect(interval.shift).toBe(-1);
  });
});

test("3-major", () => {
  const intervals = [
    new Interval(c4, e4),
    new Interval(d4, fp4),
    new Interval(e4, gp4),
    new Interval(f4, a4),
    new Interval(g4, b4),
  ];

  intervals.forEach((interval) => {
    expect(interval.degree).toBe(2);
    expect(interval.isPerfect).toBe(false);
    expect(interval.isAugmented).toBe(false);
    expect(interval.isDiminished).toBe(false);
    expect(interval.isMajor).toBe(true);
    expect(interval.isMinor).toBe(false);
    expect(interval.shift).toBe(0);
  });
});

test("3-minor", () => {
  const intervals = [
    new Interval(c4, em4),
    new Interval(d4, f4),
    new Interval(e4, g4),

    // swap
    new Interval(em4, c4),
    new Interval(f4, d4),
    new Interval(g4, e4),
  ];

  intervals.forEach((interval) => {
    expect(interval.degree).toBe(2);
    expect(interval.isPerfect).toBe(false);
    expect(interval.isAugmented).toBe(false);
    expect(interval.isDiminished).toBe(false);
    expect(interval.isMajor).toBe(false);
    expect(interval.isMinor).toBe(true);
    expect(interval.shift).toBe(0);
  });
});

test("3-augmented", () => {
  const intervals = [
    new Interval(c4, ep4),
    new Interval(dm4, fp4),
    new Interval(em4, gp4),
    new Interval(fm4, a4),
    new Interval(g4, bp4),

    // Swap
    new Interval(ep4, c4),
    new Interval(fp4, dm4),
    new Interval(gp4, em4),
    new Interval(a4, fm4),
    new Interval(bp4, g4),
  ];

  intervals.forEach((interval) => {
    expect(interval.degree).toBe(2);
    expect(interval.isPerfect).toBe(false);
    expect(interval.isAugmented).toBe(true);
    expect(interval.isDiminished).toBe(false);
    expect(interval.isMajor).toBe(false);
    expect(interval.isMinor).toBe(false);
    expect(interval.shift).toBe(1);
  });
});

test("3-diminished", () => {
  const intervals = [
    new Interval(cp4, em4),
    new Interval(dp4, f4),
    new Interval(e4, gm4),

    // swap
    new Interval(em4, cp4),
    new Interval(f4, dp4),
    new Interval(gm4, e4),
  ];

  intervals.forEach((interval) => {
    expect(interval.degree).toBe(2);
    expect(interval.isPerfect).toBe(false);
    expect(interval.isAugmented).toBe(false);
    expect(interval.isDiminished).toBe(true);
    expect(interval.isMajor).toBe(false);
    expect(interval.isMinor).toBe(false);
    expect(interval.shift).toBe(-1);
  });
});

test("4-perfects", () => {
  const intervals = [
    new Interval(c4, f4),
    new Interval(d4, g4),
    new Interval(e4, a4),
    new Interval(ep4, ap4),
    new Interval(em4, am4),
  ];

  intervals.forEach((interval) => {
    expect(interval.degree).toBe(3);
    expect(interval.isPerfect).toBe(true);
    expect(interval.isAugmented).toBe(false);
    expect(interval.isDiminished).toBe(false);
    expect(interval.isMajor).toBe(false);
    expect(interval.isMinor).toBe(false);
  });
});

test("4-augmented", () => {
  const intervals = [new Interval(f4, b4)];

  intervals.forEach((interval) => {
    expect(interval.degree).toBe(3);
    expect(interval.isPerfect).toBe(false);
    expect(interval.isAugmented).toBe(true);
    expect(interval.isDiminished).toBe(false);
    expect(interval.isMajor).toBe(false);
    expect(interval.isMinor).toBe(false);
    expect(interval.shift).toBe(1);
  });
});

test("5-perfects", () => {
  const intervals = [
    new Interval(c4, g4),
    new Interval(d4, a4),
    new Interval(e4, b4),
    new Interval(f4, c5),
    new Interval(g4, d5),
    new Interval(a4, e5),
  ];

  intervals.forEach((interval) => {
    expect(interval.degree).toBe(4);
    expect(interval.isPerfect).toBe(true);
    expect(interval.isAugmented).toBe(false);
    expect(interval.isDiminished).toBe(false);
    expect(interval.isMajor).toBe(false);
    expect(interval.isMinor).toBe(false);
  });
});

test("5-diminished", () => {
  const intervals = [new Interval(b4, f5)];

  intervals.forEach((interval) => {
    expect(interval.degree).toBe(4);
    expect(interval.isPerfect).toBe(false);
    expect(interval.isAugmented).toBe(false);
    expect(interval.isDiminished).toBe(true);
    expect(interval.isMajor).toBe(false);
    expect(interval.isMinor).toBe(false);
    expect(interval.shift).toBe(-1);
  });
});
