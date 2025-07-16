export const chordSolver = (
  harmonies: Harmony[],
  key: Key,
  standard: boolean = true,
  topN: number = 1 << 13
): Music[] => {
  let musics: Music[] = [new Music([], 0)];
  let prevHarmony = undefined;
  for (const [idx, harmony] of harmonies.entries()) {
    if (harmony.chord === null) {
      break;
    }
    const chord = harmony.chord;
    const chordDegs = chordDegrees(chord);
    const vRange = voiceRange(key);
    let nextMusics: Music[] = [];
    for (const music of musics) {
      if (idx > 0) {
        prevHarmony = music.harmonies.at(-1);
      }
      let bass = [];
      if (harmony.bas === null) {
        for (let bas = vRange.bas.min; bas <= vRange.bas.max; bas += 1) {
          if (mod(bas) === chordBas(chord)) {
            bass.push(bas);
          }
        }
      } else {
        bass = [harmony.bas];
      }
      const tens = [];
      for (let ten = vRange.ten.min; ten <= vRange.ten.max; ten += 1) {
        if (chordDegs.includes(mod(ten))) {
          tens.push(ten);
        }
      }
      const alts = [];
      for (let alt = vRange.alt.min; alt <= vRange.alt.max; alt += 1) {
        if (chordDegs.includes(mod(alt))) {
          alts.push(alt);
        }
      }
      const sops = [];
      for (let sop = vRange.sop.min; sop <= vRange.sop.max; sop += 1) {
        if (chordDegs.includes(mod(sop))) {
          sops.push(sop);
        }
      }
      for (const bas of bass) {
        for (const ten of tens) {
          for (const alt of alts) {
            for (const sop of sops) {
              const nextHarmony = new FixedHarmony(
                key,
                chord,
                bas,
                ten,
                alt,
                sop
              );
              // # 配置の規則
              if (!constraintA1(nextHarmony)) continue;
              if (!constraintA2(nextHarmony)) continue;
              // if (!constraintA3(nextHarmony)) continue;
              // if (!constraintA4(nextHarmony)) continue;
              if (standard) {
                if (!standardDistribution(idx, prevHarmony, nextHarmony))
                  continue;
              }
              // # 曲の冒頭の和音は無条件に追加
              if (prevHarmony === undefined) {
                nextMusics.push(new Music([nextHarmony], 0));
                continue;
              }
              // # 連結の規則
              if (!constraintB1(prevHarmony, nextHarmony)) continue;
              if (!constraintB2(prevHarmony, nextHarmony)) continue;
              if (!constraintC1(prevHarmony, nextHarmony)) continue;
              if (!constraintC2(prevHarmony, nextHarmony)) continue;
              if (!constraintC3(prevHarmony, nextHarmony)) continue;
              if (!constraintC4(prevHarmony, nextHarmony)) continue;
              if (!constraintC5(prevHarmony, nextHarmony)) continue;
              if (standard) {
                if (!standardLeading(prevHarmony, nextHarmony)) continue;
              }
              // スコア付け
              const penalty = calcPenalty(prevHarmony, nextHarmony);
              // 和音を追加
              nextMusics.push(
                new Music(
                  music.harmonies.concat([nextHarmony]),
                  music.penalty + penalty
                )
              );
            }
          }
        }
      }
    }
    nextMusics.sort((a, b) => a.penalty - b.penalty);
    // 上位 top_n 件を残す
    if (nextMusics.length > topN) {
      nextMusics = nextMusics.slice(0, topN);
    }
    musics = nextMusics;
    if (musics.length === 0) {
      break;
    }
    console.log(idx, musics.length);
  }

  // musics = sorted(musics, key=lambda x: x.penalty)
  return musics;
};
