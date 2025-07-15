export const chordSolver = (
  chords: Chord[],
  key: Key
  //   standard: boolean = true,
  //   topN: number = 100
): Music[] => {
  let musics: Music[] = [new Music([], 0)];
  let prevHarmony = null;
  for (const [idx, chord] of chords.entries()) {
    const chordDegs = chordDegrees(chord);
    const vRange = voiceRange(key);
    const nextMusics: Music[] = [];
    for (const music of musics) {
      if (idx > 0) {
        prevHarmony = music.harmonies.at(-1);
      }
      const bass = [];
      for (let bas = vRange.bas.min; bas <= vRange.bas.max; bas += 1) {
        if (bas % 7 === chordBas(chord)) {
          bass.push(bas);
        }
      }
      const tens = [];
      for (let ten = vRange.ten.min; ten <= vRange.ten.max; ten += 1) {
        if (chordDegs.includes(ten % 7)) {
          tens.push(ten);
        }
      }
      const alts = [];
      for (let alt = vRange.alt.min; alt <= vRange.alt.max; alt += 1) {
        if (chordDegs.includes(alt % 7)) {
          alts.push(alt);
        }
      }
      const sops = [];
      for (let sop = vRange.sop.min; sop <= vRange.sop.max; sop += 1) {
        if (chordDegs.includes(sop % 7)) {
          sops.push(sop);
        }
      }
      for (const bas of bass) {
        for (const ten of tens) {
          for (const alt of alts) {
            for (const sop of sops) {
              const nextHarmony = new Harmony(key, chord, bas, ten, alt, sop);
              // # 配置の規則
              // if not constraint_A1(next_harmony):
              //     continue
              // if not constraint_A2(next_harmony):
              //     continue
              // if not constraint_A3(next_harmony):
              //     continue
              // if not constraint_A4(next_harmony):
              //     continue
              // if standard:
              //     if not standard_distribution(
              //         idx, prev_harmony, next_harmony
              //     ):
              //         continue
              // # 曲の冒頭の和音は無条件に追加
              if (prevHarmony === null) {
                nextMusics.push(new Music([nextHarmony], 0));
                continue;
              }
              // # 連結の規則
              // if not constraint_B1(prev_harmony, next_harmony):
              //     continue
              // if not constraint_B2(prev_harmony, next_harmony):
              //     continue
              // if not constraint_C1(prev_harmony, next_harmony):
              //     continue
              // if not constraint_C2(prev_harmony, next_harmony):
              //     continue
              // if not constraint_C3(prev_harmony, next_harmony):
              //     continue
              // if not constraint_C4(prev_harmony, next_harmony):
              //     continue
              // if not constraint_C5(prev_harmony, next_harmony):
              //     continue
              // if standard:
              //     if not standard_leading(prev_harmony, next_harmony):
              //         continue
              // # スコア付け
              // penalty = calc_score(prev_harmony, next_harmony)
              const penalty = 0;
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
    //     # 上位 top_n 件を残す
    //     if len(next_musics) > top_n:
    //         next_musics = sorted(next_musics, key=lambda x: x.penalty)
    //         next_musics = next_musics[:top_n]
    musics = nextMusics;
    //     if len(musics) == 0:
    //         break

    //     # Show progress
    //     if idx > 0:
    //         # Overwrite progress
    //         print("\033[F\033[K", end="")
    //     print(f"Progress: {idx + 1}/{len(chords)}, Musics: {len(musics)}")
  }

  // musics = sorted(musics, key=lambda x: x.penalty)
  return musics;
};
