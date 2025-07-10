<script setup lang="ts">
const props = defineProps<{ u: number; harmony: Harmony; x: number }>();
</script>
<template>
  <!-- 音符 -->
  <!-- bas -->
  <text :x="x" :y="u * 3 + -2 * harmony.bas" class="bravura-text">
    &#xe1d4;
  </text>
  <!-- ten -->
  <text :x="x" :y="u * 3 + -2 * harmony.ten" class="bravura-text">
    &#xe1d3;
  </text>
  <!-- alt -->
  <text :x="x" :y="-u * 3 + -2 * harmony.alt" class="bravura-text">
    &#xe1d4;
  </text>
  <!-- sop -->
  <text :x="x" :y="-u * 3 + -2 * harmony.sop" class="bravura-text">
    &#xe1d3;
  </text>
  <!-- 加線 -->
  <text :x="x" :y="0" class="bravura-text">&#xe022;</text>
</template>
