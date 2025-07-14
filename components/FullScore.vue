<script setup lang="ts">
import bravuraMetadata from "@/assets/bravura_metadata.json";

const props = defineProps<{ harmonies: Harmony[]; mode: Mode }>();
const u = 4;
const width = computed(() => {
  return 6 * u + 4 * u * props.harmonies.length;
});

const vMargin = 2 * u;
const vMinX = computed(() => -vMargin);
const vMinY = computed(() => -12 * u - vMargin);
const vWidth = computed(() => width.value + 2 * vMargin);
const vHeight = computed(() => 24 * u + 2 * u + 2 * vMargin + 5 * 2 * u);

const viewBox = computed(() => {
  return `${vMinX.value} ${vMinY.value} ${vWidth.value} ${vHeight.value}`;
});

const svgScale = 3;
const svgWidth = computed(() => {
  return svgScale * vWidth.value;
});
const svgHeight = computed(() => {
  return svgScale * vHeight.value;
});
</script>

<template>
  <div>
    <svg :width="svgWidth" :height="svgHeight" :view-box.camel="viewBox">
      <!-- <svg width="800" height="200" viewBox="-200 -50 400 100"> -->
      <!-- 五線 -->
      <line
        v-for="i in [0, 1, 2, 3, 4]"
        :key="i"
        x1="0"
        :y1="-u * 4 - u * i"
        :x2="width"
        :y2="-u * 4 - u * i"
        stroke="black"
        :stroke-width="bravuraMetadata.engravingDefaults.staffLineThickness * u"
      />
      <line
        v-for="i in [0, 1, 2, 3, 4]"
        :key="i"
        x1="0"
        :y1="u * 4 + u * i"
        :x2="width"
        :y2="u * 4 + u * i"
        stroke="black"
        :stroke-width="bravuraMetadata.engravingDefaults.staffLineThickness * u"
      />
      <!-- 複縦線 -->
      <!-- <text :x="width - bravuraMetadata.glyphAdvanceWidths.barlineDouble * u" :y="u*4" class="bravura-text">&#xe031;</text>
        <text :x="width - bravuraMetadata.glyphAdvanceWidths.barlineDouble * u" :y="u*4+u*4" class="bravura-text">&#xe031;</text> -->
      <!-- <text :x="-2*u" :y="8*u" class="bravura-text" font-size="4em">&#xe000;</text> -->
      <!-- ト記号 -->
      <text :x="u" :y="-u * 4 - u" class="bravura-text">&#xe050;</text>
      <!-- ヘ音記号 -->
      <text :x="u" :y="u * 4 + u * 4 - 3 * u" class="bravura-text">
        &#xe062;
      </text>
      <!-- 和音 -->
      <FullHarmony
        v-for="(h, h_idx) in harmonies"
        :key="h_idx"
        :mode="mode"
        :u="u"
        :idx="h_idx"
        :staff-gap="8 * u"
        :x="24 + 16 * h_idx"
        :harmony="h"
      />
    </svg>
  </div>
</template>

<style>
@font-face {
  font-family: "Bravura";
  src: url("Bravura.otf") format("opentype");
}

@font-face {
  font-family: "Yuzuri";
  src: url("Yuzuri-RomanNumerals-Regular.otf") format("opentype");
}

.yuzuri-text {
  font-family: "Yuzuri", sans-serif;
  font-size: 0.35em;
}

svg {
  border: 1px solid #ccc;
}

.bravura-text {
  font-family: "Bravura", sans-serif;
  font-size: 16px; /* 1em */
}

svg text {
  user-select: none;
  pointer-events: none;
}

svg text.pointable {
  user-select: auto;
  pointer-events: auto;
}
</style>
