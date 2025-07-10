<script setup lang="ts">
// p.41
const harmonies = [
  new Harmony(Chord.I, 0, 2, 4, 7),
  new Harmony(Chord.VI, -2, 2, 5, 7),
  new Harmony(Chord.II, -6, 3, 5, 8),
  new Harmony(Chord.V, -3, 1, 4, 6),
  new Harmony(Chord.I, -7, 2, 4, 7),
];

// Voice range
const harmonies2 = [
  new Harmony(Chord.I, -11, -7, -3, 0),
  new Harmony(Chord.I, -10, -6, -2, 1),
  new Harmony(Chord.I, -9, -5, -1, 2),
  new Harmony(Chord.I, -8, -4, 0, 3),
  new Harmony(Chord.I, -7, -3, 1, 4),
  new Harmony(Chord.I, -6, -2, 2, 5),
  new Harmony(Chord.I, -5, -1, 3, 6),
  new Harmony(Chord.I, -4, 0, 4, 7),
  new Harmony(Chord.I, -3, 1, 5, 8),
  new Harmony(Chord.I, -2, 2, 6, 9),
  new Harmony(Chord.I, -1, 3, 7, 10),
  new Harmony(Chord.I, 0, 4, 8, 11),
  new Harmony(Chord.I, 1, 5, 8, 12),
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
    <FullScore :harmonies="harmonies" :mode="mode" />
    <details>
      <summary>Debug</summary>
      <FullScore :harmonies="harmonies2" :mode="mode" />
    </details>
  </div>
</template>
