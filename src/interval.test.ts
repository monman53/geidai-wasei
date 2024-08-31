import { Interval } from "./interval";
import { Note } from "./note";

//================================
// Note aliases
//================================
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
const e6 = new Note(2, 2, 0);

const bm1 = new Note(-3, 6, -1);
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

const emm4 = new Note(0, 2, -2);
const bmm4 = new Note(0, 6, -2);

const dpp4 = new Note(0, 1, 2);
const fpp4 = new Note(0, 3, 2);
const gpp4 = new Note(0, 4, 2);

//================================
// Interval aliases
//================================
const i1p = new Interval(0, 0, true, false, false, false, false, 0);
const i1a = new Interval(0, 0, false, false, false, false, true, 1);
const i1p2 = new Interval(0, 2, true, false, false, false, false, 0);

const i2m = new Interval(1, 0, false, true, false, false, false, 0);
const i2p = new Interval(1, 0, false, false, true, false, false, 0);
const i2d = new Interval(1, 0, false, false, false, true, false, -1);
const i2a = new Interval(1, 0, false, false, false, false, true, 1);
const i2p1 = new Interval(1, 1, false, false, true, false, false, 0);
const i2a1 = new Interval(1, 1, false, false, false, false, true, 1);

const i3m = new Interval(2, 0, false, true, false, false, false, 0);
const i3p = new Interval(2, 0, false, false, true, false, false, 0);
const i3d = new Interval(2, 0, false, false, false, true, false, -1);
const i3a = new Interval(2, 0, false, false, false, false, true, 1);
const i3m1 = new Interval(2, 1, false, true, false, false, false, 0);
const i3p1 = new Interval(2, 1, false, false, true, false, false, 0);
const i3a1 = new Interval(2, 1, false, false, false, false, true, 1);

const i4p = new Interval(3, 0, true, false, false, false, false, 0);
const i4d = new Interval(3, 0, false, false, false, true, false, -1);
const i4a = new Interval(3, 0, false, false, false, false, true, 1);
const i4aa = new Interval(3, 0, false, false, false, false, true, 2);
const i4a1 = new Interval(3, 1, false, false, false, false, true, 1);

const i5p = new Interval(4, 0, true, false, false, false, false, 0);
const i5d = new Interval(4, 0, false, false, false, true, false, -1);
const i5dd = new Interval(4, 0, false, false, false, true, false, -2);
const i5a = new Interval(4, 0, false, false, false, false, true, 1);
const i5d1 = new Interval(4, 1, false, false, false, true, false, -1);

const i6m = new Interval(5, 0, false, true, false, false, false, 0);
const i6p = new Interval(5, 0, false, false, true, false, false, 0);
const i6d = new Interval(5, 0, false, false, false, true, false, -1);
const i6a = new Interval(5, 0, false, false, false, false, true, 1);

const i7m = new Interval(6, 0, false, true, false, false, false, 0);
const i7p = new Interval(6, 0, false, false, true, false, false, 0);
const i7d = new Interval(6, 0, false, false, false, true, false, -1);
const i7a = new Interval(6, 0, false, false, false, false, true, 1);
const i7m1 = new Interval(6, 1, false, true, false, false, false, 0);

const i8p = new Interval(0, 1, true, false, false, false, false, 0);
const i8d = new Interval(0, 1, false, false, false, true, false, -1);
const i8a = new Interval(0, 1, false, false, false, false, true, 1);

//================================
// Test
//================================

const validator = (n1: Note, n2: Note, expected: Interval) => {
  const intervals = [
    Interval.between(n1, n2), // normal
    Interval.between(n2, n1), // inverted
  ];
  intervals.forEach((interval) => {
    expect(interval.degree).toBe(expected.degree);
    expect(interval.octave).toBe(expected.octave);
    expect(interval.isPerfect).toBe(expected.isPerfect);
    expect(interval.isMinor).toBe(expected.isMinor);
    expect(interval.isMajor).toBe(expected.isMajor);
    expect(interval.isDiminished).toBe(expected.isDiminished);
    expect(interval.isAugmented).toBe(expected.isAugmented);
    expect(interval.shift).toBe(expected.shift);
  });
};

// 1
test.each([
  // Perfect
  [c4, c4, i1p],
  [d4, d4, i1p],
  [e4, e4, i1p],
  [f4, f4, i1p],
  [g4, g4, i1p],
  [a4, a4, i1p],
  [b4, b4, i1p],
  // Augmented
  [cp4, c4, i1a],
  [dp4, d4, i1a],
  [ep4, e4, i1a],
  [fp4, f4, i1a],
  [gp4, g4, i1a],
  [ap4, a4, i1a],
  [bp4, b4, i1a],
  [cm4, c4, i1a],
  [dm4, d4, i1a],
  [em4, e4, i1a],
  [fm4, f4, i1a],
  [gm4, g4, i1a],
  [am4, a4, i1a],
  [bm4, b4, i1a],
])("1-%#", validator);

// 2
test.each([
  // Minor
  [e4, f4, i2m],
  [b4, c5, i2m],
  // Major
  [c4, d4, i2p],
  [d4, e4, i2p],
  [f4, g4, i2p],
  [g4, a4, i2p],
  [a4, b4, i2p],
  // Diminished
  [ep4, f4, i2d],
  [bp4, c5, i2d],
  // Augmented
  [cm4, d4, i2a],
  [dm4, e4, i2a],
  [fm4, g4, i2a],
  [gm4, a4, i2a],
  [am4, b4, i2a],
])("2-%#", validator);

// 3
test.each([
  // Minor
  [d4, f4, i3m],
  [e4, g4, i3m],
  [a4, c5, i3m],
  [b4, d5, i3m],
  // Major
  [c4, e4, i3p],
  [f4, a4, i3p],
  [g4, b4, i3p],
  // Diminished
  [dp4, f4, i3d],
  [ep4, g4, i3d],
  [ap4, c5, i3d],
  [bp4, d5, i3d],
  // Augmented
  [cm4, e4, i3a],
  [fm4, a4, i3a],
  [gm4, b4, i3a],
])("3-%#", validator);

// 4
test.each([
  // Perfect
  [c4, f4, i4p],
  [d4, g4, i4p],
  [e4, a4, i4p],
  [g4, c5, i4p],
  [a4, d5, i4p],
  [b4, e5, i4p],
  // Diminished
  [cp4, f4, i4d],
  [dp4, g4, i4d],
  [ep4, a4, i4d],
  [gp4, c5, i4d],
  [ap4, d5, i4d],
  [bp4, e5, i4d],
  // Augmented
  [f4, b4, i4a], //
  [cm4, f4, i4a],
  [dm4, g4, i4a],
  [em4, a4, i4a],
  [gm4, c5, i4a],
  [am4, d5, i4a],
  [bm4, e5, i4a],
])("4-%#", validator);

// 5
test.each([
  // Perfect
  [c4, g4, i5p],
  [d4, a4, i5p],
  [e4, b4, i5p],
  [f4, c5, i5p],
  [g4, d5, i5p],
  [a4, e5, i5p],
  // Diminished
  [b4, f5, i5d], //
  [cp4, g4, i5d],
  [dp4, a4, i5d],
  [ep4, b4, i5d],
  [fp4, c5, i5d],
  [gp4, d5, i5d],
  [ap4, e5, i5d],
  // Augmented
  [cm4, g4, i5a],
  [dm4, a4, i5a],
  [em4, b4, i5a],
  [fm4, c5, i5a],
  [gm4, d5, i5a],
  [am4, e5, i5a],
])("5-%#", validator);

// 6
test.each([
  // Minor
  [e4, c5, i6m],
  [a4, f5, i6m],
  [b4, g5, i6m],
  // Major
  [c4, a4, i6p],
  [d4, b4, i6p],
  [f4, d5, i6p],
  [g4, e5, i6p],
  // Diminished
  [ep4, c5, i6d],
  [ap4, f5, i6d],
  [bp4, g5, i6d],
  // Augmented
  [cm4, a4, i6a],
  [dm4, b4, i6a],
  [fm4, d5, i6a],
  [gm4, e5, i6a],
])("6-%#", validator);

// 7
test.each([
  // Minor
  [d4, c5, i7m],
  [e4, d5, i7m],
  [g4, f5, i7m],
  [a4, g5, i7m],
  [b4, a5, i7m],
  // Major
  [c4, b4, i7p],
  [f4, e5, i7p],
  // Diminished
  [dp4, c5, i7d],
  [ep4, d5, i7d],
  [gp4, f5, i7d],
  [ap4, g5, i7d],
  [bp4, a5, i7d],
  // Augmented
  [cm4, b4, i7a],
  [fm4, e5, i7a],
])("7-%#", validator);

// 8
test.each([
  // Perfect
  [c4, c5, i8p],
  [d4, d5, i8p],
  [e4, e5, i8p],
  [f4, f5, i8p],
  [g4, g5, i8p],
  [a4, a5, i8p],
  [b4, b5, i8p],
  // Diminished
  [cp4, c5, i8d],
  [dp4, d5, i8d],
  [ep4, e5, i8d],
  [fp4, f5, i8d],
  [gp4, g5, i8d],
  [ap4, a5, i8d],
  [bp4, b5, i8d],
  // Augmented
  [cm4, c5, i8a],
  [dm4, d5, i8a],
  [em4, e5, i8a],
  [fm4, f5, i8a],
  [gm4, g5, i8a],
  [am4, a5, i8a],
  [bm4, b5, i8a],
])("8-%#", validator);

//================================
// From "楽典 理論と実習", 音楽之友社
//================================

test.each([
  // "Problem-1, p.80"
  // 1
  [g4, d5, i5p],
  [gp4, d5, i5d],
  [gm4, d5, i5a],
  [gp4, dp5, i5p],
  [gpp4, dp5, i5d],
  // 2
  [f4, b4, i4a],
  [f4, bm4, i4p],
  [fp4, b4, i4p],
  [f4, bp4, i4aa],
  // 3
  [e4, g4, i3m],
  [e4, gp4, i3p],
  [ep4, gp4, i3m],
  [em4, g4, i3p],
  [emm4, gm4, i3p],
  // 4
  [f2, d3, i6p],
  [fp2, d3, i6m],
  [f2, dp3, i6a],
  [fp2, dm3, i6d],
  // 5
  [d4, d4, i1p],
  [d4, dp4, i1a],
  [d4, dm4, i1a],
  [dm4, d4, i1a],
  [dp4, dpp4, i1a],

  // "Problem-2, p.83"
  [g4, g4, i1p],
  [b4, b4, i1p],
  [g4, a4, i2p],
  [c5, d5, i2p],
  [b4, c5, i2m],
  [f4, e4, i2m],
  [f4, a4, i3p],
  [a4, c5, i3m],

  [e4, g4, i3m],
  [c4, f4, i4p],
  [e4, a4, i4p],
  [f4, b4, i4a],
  [f4, c5, i5p],
  [e4, b4, i5p],
  [b4, f5, i5d],
  [a4, e5, i5p],
  [e4, c5, i6m],
  [f4, d5, i6p],

  [g4, e5, i6p],
  [a3, f4, i6m],
  [e4, d5, i7m],
  [g4, f5, i7m],
  [f4, e5, i7p],
  [d4, c5, i7m],
  [c4, b4, i7p],
  [d4, d5, i8p],
  [g4, g5, i8p],
  [f4, f5, i8p],

  // "Problem-3, p.84"
  [d4, f4, i3m],
  [g4, f5, i7m],
  [c4, a4, i6p],
  [f4, b4, i4a],
  [e4, f4, i2m],
  [d4, b4, i6p],
  [g4, b4, i3p],
  [a4, g5, i7m],

  [c4, b3, i2m],
  [g3, c4, i4p],
  [b2, b3, i8p],
  [c3, a3, i6p],
  [b2, e3, i4p],
  [f3, b3, i4a],
  [e3, f3, i2m],
  [a2, e3, i5p],
  [g2, g3, i8p],

  [b3, d4, i3m],
  [f3, d4, i6p],
  [d4, d4, i1p],
  [f4, g4, i2p],
  [g3, f4, i7m],
  [b3, g4, i6m],
  [f4, a3, i6m],

  // "Problem-4, p.86"
  [g4, bm4, i3m],
  [gp4, e5, i6m],
  [bm4, f5, i5p],
  [fp4, f4, i1a],
  [g4, am4, i2m],
  [bm4, am4, i2p],
  [b4, bp3, i8d],

  [c3, am3, i6m],
  [d3, ap3, i5a],
  [g2, fp3, i7p],
  [cm3, c4, i8a],
  [b2, am3, i7d],
  [dp3, b3, i6m],
  [bm3, c4, i2p],

  [dp4, bp3, i3m],
  [g4, cm4, i5a],
  [bp3, a4, i7d],
  [fp3, em4, i7d],
  [em3, cp4, i6a],
  [gp3, dm4, i5dd],
  [ap3, ep4, i5p],

  [f4, dm5, i6m],
  [c5, am4, i3p],
  [fm4, bm4, i4a],
  [bmm4, am4, i2m],
  [am4, e5, i5a],
  [gm4, em5, i6p],

  // "Problem-5, p.87"
  [fp4, b4, i4p],
  [b4, a4, i2p],
  [a4, e5, i5p],
  [e5, fpp4, i7d],
  [fpp4, a4, i3d],
  [a4, am4, i1a],
  [am4, fp5, i6a],
  [fp5, dp5, i3m],
  [dp5, d5, i1a],
  [d5, gp4, i5d],
  [gp4, fpp4, i2m],

  [fpp4, cp4, i4a],
  [cp4, fp3, i5p],
  [fp3, dp4, i6p],
  [dp4, am4, i5dd],
  [am4, bm3, i7m],
  [bm3, d3, i6m],
  [d3, em3, i2m],

  // "Problem-6, p.88"
  [c4, d5, i2p1],
  [d5, gp3, i5d1],
  [gp3, f2, i2a1],
  [f2, am3, i3m1],
  [am3, bm4, i2p1],
  [bm4, e6, i4a1],
  [e6, fp4, i7m1],
  [fp4, e3, i2p1],
  [e3, bm1, i4a1],
  [bm1, bm3, i1p2],
  [bm3, dp5, i3a1],
  [dp5, b3, i3p1],
  [b3, f5, i5d1],
])("Gakuten-%#", validator);
