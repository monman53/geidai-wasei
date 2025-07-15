<script setup lang="ts">
import { harmonies, musics } from "./components/states";

// Voice range
const harmonies2 = [
  new Harmony(Key.C, Chord.I, -11, -7, -3, 0),
  new Harmony(Key.C, Chord.I, -10, -6, -2, 1),
  new Harmony(Key.C, Chord.I, -9, -5, -1, 2),
  new Harmony(Key.C, Chord.I, -8, -4, 0, 3),
  new Harmony(Key.C, Chord.I, -7, -3, 1, 4),
  new Harmony(Key.C, Chord.I, -6, -2, 2, 5),
  new Harmony(Key.C, Chord.I, -5, -1, 3, 6),
  new Harmony(Key.C, Chord.I, -4, 0, 4, 7),
  new Harmony(Key.C, Chord.I, -3, 1, 5, 8),
  new Harmony(Key.C, Chord.I, -2, 2, 6, 9),
  new Harmony(Key.C, Chord.I, -1, 3, 7, 10),
  new Harmony(Key.C, Chord.I, 0, 4, 8, 11),
  new Harmony(Key.C, Chord.I, 1, 5, 8, 12),
];

const mode = ref<Mode>(Mode.BassEdit);
</script>

<template>
  <div>
    <h1>藝大和声 I 巻</h1>
    <label>
      <input type="radio" v-model="mode" :value="Mode.BassEdit" />
      バス課題作成
    </label>
    <label>
      <input type="radio" v-model="mode" :value="Mode.Solve" />
      実施
    </label>
    <FullScore :harmonies="harmonies" :mode="mode" :svg-scale="3" />
    <button
      @click="
        () => {
          mode = Mode.Solve;
          musics = chordSolver(harmonies, Key.C);
        }
      "
    >
      solve
    </button>
    <div v-if="mode === Mode.Solve">
      <div v-for="(music, idx) in musics">
        {{ idx + 1 }} / {{ musics.length }}
        <FullScore
          :harmonies="music.harmonies"
          :mode="Mode.View"
          :svg-scale="1.5"
        />
      </div>
    </div>
    <details>
      <summary>Debug</summary>
      <FullScore :harmonies="harmonies2" :mode="mode" :svg-scale="3" />
    </details>
  </div>
</template>
