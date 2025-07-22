<script setup lang="ts">
import { getAudioContext, harmonies, musics } from "./components/states";

const mode = ref<Mode>(Mode.ProblemEdit);

onUnmounted(() => {
  const audioContext = getAudioContext();
  if (audioContext) {
    audioContext.close().catch(console.error);
  }
});

const musicRanges = computed(() => {
  const n = musics.value.length;
  const ranges = [];
  for (let i = 0; i < Math.ceil(n / 10); i++) {
    ranges.push([i * 10, i * 10 + 10]);
  }
  return ranges;
});

const musicStart = ref(0);
const musicEnd = ref(10);

const randomSelect = () => {
  const n = musics.value.length;
  if (n === 0) return;
  const idx = getRandomInt(n);
  const music = musics.value[idx];
  if (music.harmonies.length !== harmonies.value.length) return;
  for (let i = 0; i < music.harmonies.length; i++) {
    harmonies.value[i].bas = music.harmonies[i].bas;
    harmonies.value[i].ten = music.harmonies[i].ten;
    harmonies.value[i].alt = music.harmonies[i].alt;
    harmonies.value[i].sop = music.harmonies[i].sop;
  }
};

const resetHarmonies = () => {
  for (const harmony of harmonies.value) {
    if (!harmony.basFixed) harmony.bas = null;
    if (!harmony.tenFixed) harmony.ten = null;
    if (!harmony.altFixed) harmony.alt = null;
    if (!harmony.sopFixed) harmony.sop = null;
  }
};
</script>

<template>
  <div class="block shadow-sm p-4">
    <h1 class="text-3xl font-bold">藝大和声 I 巻</h1>
  </div>
  <div class="m-3">
    <div class="block border border-gray-200 p-2 my-2 shadow-sm rounded-lg">
      <div class="m-2">
        <label>
          <input v-model="mode" type="radio" :value="Mode.ProblemEdit" />
          課題作成
        </label>
        <label>
          <input v-model="mode" type="radio" :value="Mode.Solve" />
          実施
        </label>
      </div>
      <FullScore :harmonies="harmonies" :mode="mode" :svg-scale="3" />
      <div class="flex">
        <div class="m-2">
          <button
            class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 rounded-lg text-sm px-3 py-2 pointer"
            @click="
              () => {
                mode = Mode.Solve;
                musicStart = 0;
                musicEnd = 10;
                musics = chordSolver(harmonies, Key.C);
              }
            "
          >
            自動実施
          </button>
        </div>
        <div v-if="mode === Mode.Solve" class="m-2">
          <button
            class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 rounded-lg text-sm px-3 py-2 pointer"
            @click="resetHarmonies"
          >
            リセット
          </button>
        </div>
        <div v-if="mode === Mode.Solve && musics.length > 0" class="m-2">
          <button
            class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 rounded-lg text-sm px-3 py-2 pointer"
            @click="randomSelect"
          >
            ランダム
          </button>
        </div>
      </div>
    </div>
    <div v-if="mode === Mode.Solve">
      <div
        v-for="(music, idx) in musics.slice(musicStart, musicEnd)"
        :key="idx"
        class="block border border-gray-200 p-2 my-2 shadow-sm rounded-lg"
      >
        実施例: {{ musicStart + idx + 1 }} / {{ musics.length }}, Penalty:
        {{ music.penalty }}
        <FullScore
          :harmonies="music.harmonies"
          :mode="Mode.View"
          :svg-scale="1.5"
        />
      </div>
      <template v-for="([start, end], idx) in musicRanges" :key="idx">
        <span
          class="text-blue-600 underline pointer"
          @click="
            () => {
              musicStart = start;
              musicEnd = end;
            }
          "
        >
          {{ start }}-{{ end }}
        </span>
        ,
      </template>
    </div>
  </div>
</template>
