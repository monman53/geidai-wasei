export const standardDistribution = (
  idx: number,
  prev: FixedHarmony | undefined,
  next: FixedHarmony
): boolean => {
  // Sec. 7: 配置
  // bas と ten は同度以上12度以内
  if (next.ten - next.bas < 0 || next.ten - next.bas > 11) return false;
  // ten と alt は同度以上オクターブ以内
  if (next.alt - next.ten < 0 || next.alt - next.ten > 7) return false;
  // sop と alt は同度以上オクターブ以内
  if (next.sop - next.alt < 0 || next.sop - next.alt > 7) return false;
  if (
    idx > 0 &&
    prev !== undefined &&
    prev.chord === Chord.V &&
    next.chord === Chord.VI
  ) {
    // Sec. 17: V->VI の連結
    // I が重複するため例外
  } else {
    const chordDegs = chordDegrees(next.chord);
    if (
      [Chord.I, Chord.II, Chord.IV, Chord.V, Chord.VI].includes(next.chord) ||
      [Chord.I_2, Chord.IV_2, Chord.V_2].includes(next.chord)
    ) {
      const voices = [mod(next.ten), mod(next.alt), mod(next.sop)];
      if (count(voices, chordDegs[0]) !== 1) return false;
      if (count(voices, chordDegs[1]) !== 1) return false;
      if (count(voices, chordDegs[2]) !== 1) return false;
    }
    //         elif next.chord in {Chord.I_1, Chord.II_1, Chord.IV_1, Chord.V_1}:
    //             voices = [next.ten % 7, next.alt % 7, next.sop % 7]
    //             if voices.count(chord_degs[0]) == 3:
    //                 return False
    //             if (
    //                 voices.count(chord_degs[1]) != 0
    //                 and prev is not None
    //                 and not (
    //                     prev.chord in {Chord.V7_2, Chord.V7_2_} and next.chord == Chord.I_1
    //                 )
    //             ):  # TODO: p124 E の暫定対処
    //                 return False
    //             if voices.count(chord_degs[2]) == 3:
    //                 return False
    //         elif next.chord in {Chord.V7, Chord.V7_1, Chord.V7_2, Chord.V7_3}:
    //             voices = [next.bas % 7, next.ten % 7, next.alt % 7, next.sop % 7]
    //             # Sec. 41:
    //             # 基本位置は第5音を省き根音を加えることが多い
    //             if next.chord == Chord.V7:
    //                 if (
    //                     voices.count(chord_degs[0]) == 2
    //                     and voices.count(chord_degs[1]) == 1
    //                     and voices.count(chord_degs[2]) == 0
    //                     and voices.count(chord_degs[3]) == 1
    //                 ):
    //                     return True
    //             if voices.count(chord_degs[0]) != 1:
    //                 return False
    //             if voices.count(chord_degs[1]) != 1:
    //                 return False
    //             if voices.count(chord_degs[2]) != 1:
    //                 return False
    //             if voices.count(chord_degs[3]) != 1:
    //                 return False
    //         elif next.chord in {Chord.V9, Chord.V9_1_, Chord.V9_2_, Chord.V9_3_}:
    //             voices = [next.bas % 7, next.ten % 7, next.alt % 7, next.sop % 7]
    //             if voices.count(chord_degs[0]) != 1:
    //                 return False
    //             if voices.count(chord_degs[1]) != 1:
    //                 return False
    //             if voices.count(chord_degs[2]) != 1:
    //                 return False
    //             if voices.count(chord_degs[3]) != 1:
    //                 return False
    //         elif next.chord == Chord.V7_2_:
    //             voices = [next.ten % 7, next.alt % 7, next.sop % 7]
    //             # Sec. 49:
    //             if (
    //                 voices.count(chord_degs[0]) == 1
    //                 and voices.count(chord_degs[1]) == 1
    //                 and voices.count(chord_degs[2]) == 1
    //             ):
    //                 return True
    //             if voices.count(chord_degs[2]) == 2 and voices.count(chord_degs[0]) == 1:
    //                 return True
    //             return False
    //         else:
    //             raise NotImplementedError(f"Chord {next.chord} not implemented")
  }
  return true;
};

export const standardLeading = (
  prev: FixedHarmony,
  next: FixedHarmony
): boolean => {
  //     # Sec. 16: 基本位置3和音の上3声の標準連結
  //     if prev.chord == Chord.V and next.chord == Chord.VI:
  //         # Sec. 17: V->VI の連結
  //         # VII は I に上行
  //         if prev.ten % 7 == 6 and next.ten != prev.bas + 1:
  //             return False
  //         if prev.alt % 7 == 6 and next.alt != prev.alt + 1:
  //             return False
  //         if prev.sop % 7 == 6 and next.sop != prev.sop + 1:
  //             return False
  //         # 他は下行
  //         if prev.ten % 7 != 6 and next.ten >= prev.ten:
  //             return False
  //         if prev.alt % 7 != 6 and next.alt >= prev.alt:
  //             return False
  //         if prev.sop % 7 != 6 and next.sop >= prev.sop:
  //             return False
  //     elif next.chord == Chord.I_2:
  //         # Sec 37:
  //         # 上3声全部が順次下行する
  //         if prev.ten <= next.ten:
  //             return False
  //         if prev.alt <= next.alt:
  //             return False
  //         if prev.sop <= next.sop:
  //             return False

  // 保留
  if (prev.chord === Chord.II && next.chord === Chord.V) {
    // Sec. 17: II->V の連結
    // II は保留せず VII に下行させる
    if (mod(prev.ten) == 1 && mod(next.ten) != 6) return false;
    // TODO:
    // elif len(chord_degrees(prev.chord)) == 3 and len(chord_degrees(next.chord)) == 3:
    // elif len(chord_degrees(prev.chord)) == 3 or len(chord_degrees(next.chord)) == 3:
  } else {
    // (1) 上3声の共通音は保留する
    if (
      [next.bas, next.ten, next.alt, next.sop].includes(prev.ten) &&
      prev.ten !== next.ten
    )
      return false;
    if (
      [next.bas, next.ten, next.alt, next.sop].includes(prev.alt) &&
      prev.alt !== next.alt
    )
      return false;
    if (
      [next.bas, next.ten, next.alt, next.sop].includes(prev.sop) &&
      prev.sop !== next.sop
    )
      return false;
  }

  // (2) 配分一致
  if (
    !(prev.chord === Chord.V7_2_ && [Chord.I, Chord.I_1].includes(next.chord))
  ) {
    // p81
    if (next.sop - next.ten > 7 && prev.sop - prev.ten < 7) return false;
    if (next.sop - next.ten < 7 && prev.sop - prev.ten > 7) return false;
  }

  return true;
};
