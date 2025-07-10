<script setup lang="ts">
// p.41
const harmonies = [
  new Harmony(Chord.I, 0, 2, 4, 7),
  new Harmony(Chord.VI, -2, 2, 5, 7),
  new Harmony(Chord.II, -6, 3, 5, 8),
  new Harmony(Chord.V, -3, 1, 4, 6),
  new Harmony(Chord.I, -7, 2, 4, 7),
];
</script>

<template>
  <div>
    <h1>藝大和声I巻</h1>
    <MainScore :harmonies="harmonies" />
  </div>
</template>
