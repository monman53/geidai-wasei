import { Interval } from "./interval";
import { Note } from "./note";

const c2 = new Note(-2, 0, 0);
const d2 = new Note(-2, 1, 0);
const e2 = new Note(-2, 2, 0);
const f2 = new Note(-2, 3, 0);
const g2 = new Note(-2, 4, 0);
const a2 = new Note(-2, 5, 0);
const b2 = new Note(-2, 6, 0);
const c3 = new Note(-1, 0, 0);
const d3 = new Note(-1, 1, 0);
const e3 = new Note(-1, 2, 0);
const f3 = new Note(-1, 3, 0);
const g3 = new Note(-1, 4, 0);
const a3 = new Note(-1, 5, 0);
const b3 = new Note(-1, 6, 0);
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

const cm2 = new Note(-2, 0, -1);
const dm2 = new Note(-2, 1, -1);
const em2 = new Note(-2, 2, -1);
const fm2 = new Note(-2, 3, -1);
const gm2 = new Note(-2, 4, -1);
const am2 = new Note(-2, 5, -1);
const bm2 = new Note(-2, 6, -1);
const cm3 = new Note(-1, 0, -1);
const dm3 = new Note(-1, 1, -1);
const em3 = new Note(-1, 2, -1);
const fm3 = new Note(-1, 3, -1);
const gm3 = new Note(-1, 4, -1);
const am3 = new Note(-1, 5, -1);
const bm3 = new Note(-1, 6, -1);
const cm4 = new Note(0, 0, -1);
const dm4 = new Note(0, 1, -1);
const em4 = new Note(0, 2, -1);
const fm4 = new Note(0, 3, -1);
const gm4 = new Note(0, 4, -1);
const am4 = new Note(0, 5, -1);
const bm4 = new Note(0, 6, -1);
const cm5 = new Note(1, 0, -1);
const dm5 = new Note(1, 1, -1);
const em5 = new Note(1, 2, -1);
const fm5 = new Note(1, 3, -1);
const gm5 = new Note(1, 4, -1);
const am5 = new Note(1, 5, -1);
const bm5 = new Note(1, 6, -1);

const emm4 = new Note(0, 2, -2);

const cp2 = new Note(-2, 0, 1);
const dp2 = new Note(-2, 1, 1);
const ep2 = new Note(-2, 2, 1);
const fp2 = new Note(-2, 3, 1);
const gp2 = new Note(-2, 4, 1);
const ap2 = new Note(-2, 5, 1);
const bp2 = new Note(-2, 6, 1);
const cp3 = new Note(-1, 0, 1);
const dp3 = new Note(-1, 1, 1);
const ep3 = new Note(-1, 2, 1);
const fp3 = new Note(-1, 3, 1);
const gp3 = new Note(-1, 4, 1);
const ap3 = new Note(-1, 5, 1);
const bp3 = new Note(-1, 6, 1);
const cp4 = new Note(0, 0, 1);
const dp4 = new Note(0, 1, 1);
const ep4 = new Note(0, 2, 1);
const fp4 = new Note(0, 3, 1);
const gp4 = new Note(0, 4, 1);
const ap4 = new Note(0, 5, 1);
const bp4 = new Note(0, 6, 1);
const cp5 = new Note(1, 0, 1);
const dp5 = new Note(1, 1, 1);
const ep5 = new Note(1, 2, 1);
const fp5 = new Note(1, 3, 1);
const gp5 = new Note(1, 4, 1);
const ap5 = new Note(1, 5, 1);
const bp5 = new Note(1, 6, 1);

const dpp4 = new Note(0, 1, 2);
const gpp4 = new Note(0, 4, 2);

const validator = (
  n1: Note,
  n2: Note,
  degree: number,
  octave: number,
  isPerfect: boolean,
  isMinor: boolean,
  isMajor: boolean,
  isDiminished: boolean,
  isAugmented: boolean,
  shift: number,
) => {
  const intervals = [
    new Interval(n1, n2), // normal
    new Interval(n2, n1), // inverted
  ];
  intervals.forEach((interval) => {
    expect(interval.degree).toBe(degree);
    expect(interval.octave).toBe(octave);
    expect(interval.isPerfect).toBe(isPerfect);
    expect(interval.isMinor).toBe(isMinor);
    expect(interval.isMajor).toBe(isMajor);
    expect(interval.isDiminished).toBe(isDiminished);
    expect(interval.isAugmented).toBe(isAugmented);
    expect(interval.shift).toBe(shift);
  });
};

// 1
test.each([
  // Perfect
  [c4, c4, 0, 0, true, false, false, false, false, 0],
  [d4, d4, 0, 0, true, false, false, false, false, 0],
  [e4, e4, 0, 0, true, false, false, false, false, 0],
  [f4, f4, 0, 0, true, false, false, false, false, 0],
  [g4, g4, 0, 0, true, false, false, false, false, 0],
  [a4, a4, 0, 0, true, false, false, false, false, 0],
  [b4, b4, 0, 0, true, false, false, false, false, 0],
  // Augmented
  [cp4, c4, 0, 0, false, false, false, false, true, 1],
  [dp4, d4, 0, 0, false, false, false, false, true, 1],
  [ep4, e4, 0, 0, false, false, false, false, true, 1],
  [fp4, f4, 0, 0, false, false, false, false, true, 1],
  [gp4, g4, 0, 0, false, false, false, false, true, 1],
  [ap4, a4, 0, 0, false, false, false, false, true, 1],
  [bp4, b4, 0, 0, false, false, false, false, true, 1],
  [cm4, c4, 0, 0, false, false, false, false, true, 1],
  [dm4, d4, 0, 0, false, false, false, false, true, 1],
  [em4, e4, 0, 0, false, false, false, false, true, 1],
  [fm4, f4, 0, 0, false, false, false, false, true, 1],
  [gm4, g4, 0, 0, false, false, false, false, true, 1],
  [am4, a4, 0, 0, false, false, false, false, true, 1],
  [bm4, b4, 0, 0, false, false, false, false, true, 1],
])("1-%#", validator);

// 2
test.each([
  // Minor
  [e4, f4, 1, 0, false, true, false, false, false, 0],
  [b4, c5, 1, 0, false, true, false, false, false, 0],
  // Major
  [c4, d4, 1, 0, false, false, true, false, false, 0],
  [d4, e4, 1, 0, false, false, true, false, false, 0],
  [f4, g4, 1, 0, false, false, true, false, false, 0],
  [g4, a4, 1, 0, false, false, true, false, false, 0],
  [a4, b4, 1, 0, false, false, true, false, false, 0],
  // Diminished
  [ep4, f4, 1, 0, false, false, false, true, false, -1],
  [bp4, c5, 1, 0, false, false, false, true, false, -1],
  // Augmented
  [cm4, d4, 1, 0, false, false, false, false, true, 1],
  [dm4, e4, 1, 0, false, false, false, false, true, 1],
  [fm4, g4, 1, 0, false, false, false, false, true, 1],
  [gm4, a4, 1, 0, false, false, false, false, true, 1],
  [am4, b4, 1, 0, false, false, false, false, true, 1],
])("2-%#", validator);

// 3
test.each([
  // Minor
  [d4, f4, 2, 0, false, true, false, false, false, 0],
  [e4, g4, 2, 0, false, true, false, false, false, 0],
  [a4, c5, 2, 0, false, true, false, false, false, 0],
  [b4, d5, 2, 0, false, true, false, false, false, 0],
  // Major
  [c4, e4, 2, 0, false, false, true, false, false, 0],
  [f4, a4, 2, 0, false, false, true, false, false, 0],
  [g4, b4, 2, 0, false, false, true, false, false, 0],
  // Diminished
  [dp4, f4, 2, 0, false, false, false, true, false, -1],
  [ep4, g4, 2, 0, false, false, false, true, false, -1],
  [ap4, c5, 2, 0, false, false, false, true, false, -1],
  [bp4, d5, 2, 0, false, false, false, true, false, -1],
  // Augmented
  [cm4, e4, 2, 0, false, false, false, false, true, 1],
  [fm4, a4, 2, 0, false, false, false, false, true, 1],
  [gm4, b4, 2, 0, false, false, false, false, true, 1],
])("3-%#", validator);

// 4
test.each([
  // Perfect
  [c4, f4, 3, 0, true, false, false, false, false, 0],
  [d4, g4, 3, 0, true, false, false, false, false, 0],
  [e4, a4, 3, 0, true, false, false, false, false, 0],
  [g4, c5, 3, 0, true, false, false, false, false, 0],
  [a4, d5, 3, 0, true, false, false, false, false, 0],
  [b4, e5, 3, 0, true, false, false, false, false, 0],
  // Diminished
  [cp4, f4, 3, 0, false, false, false, true, false, -1],
  [dp4, g4, 3, 0, false, false, false, true, false, -1],
  [ep4, a4, 3, 0, false, false, false, true, false, -1],
  [gp4, c5, 3, 0, false, false, false, true, false, -1],
  [ap4, d5, 3, 0, false, false, false, true, false, -1],
  [bp4, e5, 3, 0, false, false, false, true, false, -1],
  // Augmented
  [f4, b4, 3, 0, false, false, false, false, true, 1], //
  [cm4, f4, 3, 0, false, false, false, false, true, 1],
  [dm4, g4, 3, 0, false, false, false, false, true, 1],
  [em4, a4, 3, 0, false, false, false, false, true, 1],
  [gm4, c5, 3, 0, false, false, false, false, true, 1],
  [am4, d5, 3, 0, false, false, false, false, true, 1],
  [bm4, e5, 3, 0, false, false, false, false, true, 1],
])("4-%#", validator);

// 5
test.each([
  // Perfect
  [c4, g4, 4, 0, true, false, false, false, false, 0],
  [d4, a4, 4, 0, true, false, false, false, false, 0],
  [e4, b4, 4, 0, true, false, false, false, false, 0],
  [f4, c5, 4, 0, true, false, false, false, false, 0],
  [g4, d5, 4, 0, true, false, false, false, false, 0],
  [a4, e5, 4, 0, true, false, false, false, false, 0],
  // Diminished
  [b4, f5, 4, 0, false, false, false, true, false, -1], //
  [cp4, g4, 4, 0, false, false, false, true, false, -1],
  [dp4, a4, 4, 0, false, false, false, true, false, -1],
  [ep4, b4, 4, 0, false, false, false, true, false, -1],
  [fp4, c5, 4, 0, false, false, false, true, false, -1],
  [gp4, d5, 4, 0, false, false, false, true, false, -1],
  [ap4, e5, 4, 0, false, false, false, true, false, -1],
  // Augmented
  [cm4, g4, 4, 0, false, false, false, false, true, 1],
  [dm4, a4, 4, 0, false, false, false, false, true, 1],
  [em4, b4, 4, 0, false, false, false, false, true, 1],
  [fm4, c5, 4, 0, false, false, false, false, true, 1],
  [gm4, d5, 4, 0, false, false, false, false, true, 1],
  [am4, e5, 4, 0, false, false, false, false, true, 1],
])("5-%#", validator);

// 6
test.each([
  // Minor
  [e4, c5, 5, 0, false, true, false, false, false, 0],
  [a4, f5, 5, 0, false, true, false, false, false, 0],
  [b4, g5, 5, 0, false, true, false, false, false, 0],
  // Major
  [c4, a4, 5, 0, false, false, true, false, false, 0],
  [d4, b4, 5, 0, false, false, true, false, false, 0],
  [f4, d5, 5, 0, false, false, true, false, false, 0],
  [g4, e5, 5, 0, false, false, true, false, false, 0],
  // Diminished
  [ep4, c5, 5, 0, false, false, false, true, false, -1],
  [ap4, f5, 5, 0, false, false, false, true, false, -1],
  [bp4, g5, 5, 0, false, false, false, true, false, -1],
  // Augmented
  [cm4, a4, 5, 0, false, false, false, false, true, 1],
  [dm4, b4, 5, 0, false, false, false, false, true, 1],
  [fm4, d5, 5, 0, false, false, false, false, true, 1],
  [gm4, e5, 5, 0, false, false, false, false, true, 1],
])("6-%#", validator);

// 7
test.each([
  // Minor
  [d4, c5, 6, 0, false, true, false, false, false, 0],
  [e4, d5, 6, 0, false, true, false, false, false, 0],
  [g4, f5, 6, 0, false, true, false, false, false, 0],
  [a4, g5, 6, 0, false, true, false, false, false, 0],
  [b4, a5, 6, 0, false, true, false, false, false, 0],
  // Major
  [c4, b4, 6, 0, false, false, true, false, false, 0],
  [f4, e5, 6, 0, false, false, true, false, false, 0],
  // Diminished
  [dp4, c5, 6, 0, false, false, false, true, false, -1],
  [ep4, d5, 6, 0, false, false, false, true, false, -1],
  [gp4, f5, 6, 0, false, false, false, true, false, -1],
  [ap4, g5, 6, 0, false, false, false, true, false, -1],
  [bp4, a5, 6, 0, false, false, false, true, false, -1],
  // Augmented
  [cm4, b4, 6, 0, false, false, false, false, true, 1],
  [fm4, e5, 6, 0, false, false, false, false, true, 1],
])("7-%#", validator);

// 8
test.each([
  // Perfect
  [c4, c5, 0, 1, true, false, false, false, false, 0],
  [d4, d5, 0, 1, true, false, false, false, false, 0],
  [e4, e5, 0, 1, true, false, false, false, false, 0],
  [f4, f5, 0, 1, true, false, false, false, false, 0],
  [g4, g5, 0, 1, true, false, false, false, false, 0],
  [a4, a5, 0, 1, true, false, false, false, false, 0],
  [b4, b5, 0, 1, true, false, false, false, false, 0],
  // Diminished
  [cp4, c5, 0, 1, false, false, false, true, false, -1],
  [dp4, d5, 0, 1, false, false, false, true, false, -1],
  [ep4, e5, 0, 1, false, false, false, true, false, -1],
  [fp4, f5, 0, 1, false, false, false, true, false, -1],
  [gp4, g5, 0, 1, false, false, false, true, false, -1],
  [ap4, a5, 0, 1, false, false, false, true, false, -1],
  [bp4, b5, 0, 1, false, false, false, true, false, -1],
  // Augmented
  [cm4, c5, 0, 1, false, false, false, false, true, 1],
  [dm4, d5, 0, 1, false, false, false, false, true, 1],
  [em4, e5, 0, 1, false, false, false, false, true, 1],
  [fm4, f5, 0, 1, false, false, false, false, true, 1],
  [gm4, g5, 0, 1, false, false, false, false, true, 1],
  [am4, a5, 0, 1, false, false, false, false, true, 1],
  [bm4, b5, 0, 1, false, false, false, false, true, 1],
])("8-%#", validator);

//================================
// From "楽典 理論と実習", 音楽之友社
//================================

test.each([
  // "Problem-1, p.80"
  // 1
  [g4, d5, 4, 0, true, false, false, false, false, 0],
  [gp4, d5, 4, 0, false, false, false, true, false, -1],
  [gm4, d5, 4, 0, false, false, false, false, true, 1],
  [gp4, dp5, 4, 0, true, false, false, false, false, 0],
  [gpp4, dp5, 4, 0, false, false, false, true, false, -1],
  // 2
  [f4, b4, 3, 0, false, false, false, false, true, 1],
  [f4, bm4, 3, 0, true, false, false, false, false, 0],
  [fp4, b4, 3, 0, true, false, false, false, false, 0],
  [f4, bp4, 3, 0, false, false, false, false, true, 2],
  // 3
  [e4, g4, 2, 0, false, true, false, false, false, 0],
  [e4, gp4, 2, 0, false, false, true, false, false, 0],
  [ep4, gp4, 2, 0, false, true, false, false, false, 0],
  [em4, g4, 2, 0, false, false, true, false, false, 0],
  [emm4, gm4, 2, 0, false, false, true, false, false, 0],
  // 4
  [f2, d3, 5, 0, false, false, true, false, false, 0],
  [fp2, d3, 5, 0, false, true, false, false, false, 0],
  [f2, dp3, 5, 0, false, false, false, false, true, 1],
  [fp2, dm3, 5, 0, false, false, false, true, false, -1],
  // 5
  [d4, d4, 0, 0, true, false, false, false, false, 0],
  [d4, dp4, 0, 0, false, false, false, false, true, 1],
  [d4, dm4, 0, 0, false, false, false, false, true, 1],
  [dm4, d4, 0, 0, false, false, false, false, true, 1],
  [dp4, dpp4, 0, 0, false, false, false, false, true, 1],
])("Gakuten-%#", validator);
