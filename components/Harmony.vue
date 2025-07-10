<script setup lang="ts">
const props = defineProps<{
  u: number;
  staffGap: number;
  harmony: Harmony;
  x: number;
}>();
const ledger2ys = computed(() => {
  const m = Math.max(props.harmony.bas, props.harmony.ten);
  let ys = [];
  for (let i = 0; i < Math.floor((m - 0) / 2) + 1; i++) {
    ys.push(props.staffGap / 2 - (i + 1) * props.u);
  }
  return ys;
});
const ledger3ys = computed(() => {
  const m = Math.min(props.harmony.alt, props.harmony.sop);
  let ys = [];
  for (let i = 0; i < Math.floor((0 - m) / 2) + 1; i++) {
    ys.push(-props.staffGap / 2 + (i + 1) * props.u);
  }
  return ys;
});
const ledger4ys = computed(() => {
  const m = Math.max(props.harmony.alt, props.harmony.sop);
  let ys = [];
  for (let i = 0; i < Math.floor((m - 12) / 2) + 1; i++) {
    ys.push(-props.staffGap / 2 - 4 * props.u - (i + 1) * props.u);
  }
  return ys;
});
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
  <text v-for="y in ledger4ys" :x="x" :y="y" class="bravura-text"
    >&#xe022;</text
  >
  <text v-for="y in ledger3ys" :x="x" :y="y" class="bravura-text"
    >&#xe022;</text
  >
  <text v-for="y in ledger2ys" :x="x" :y="y" class="bravura-text"
    >&#xe022;</text
  >
</template>
