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
  let ranges = [];
  for (let i = 0; i < Math.ceil(n / 10); i++) {
    ranges.push([i * 10, i * 10 + 10]);
  }
  return ranges;
});

const musicStart = ref(0);
const musicEnd = ref(10);
</script>

<template>
  <div class="m-3">
    <h1 class="text-3xl font-bold">藝大和声 I 巻</h1>
    <label>
      <input type="radio" v-model="mode" :value="Mode.ProblemEdit" />
      課題作成
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
      class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 rounded-lg text-sm px-3 py-2 pointer"
    >
      自動実施
    </button>
    <div v-if="mode === Mode.Solve">
      <div v-for="(music, idx) in musics.slice(musicStart, musicEnd)">
        {{ musicStart + idx + 1 }} / {{ musics.length }}, Penalty:
        {{ music.penalty }}
        <FullScore
          :harmonies="music.harmonies"
          :mode="Mode.View"
          :svg-scale="1.5"
        />
      </div>
      <template v-for="[start, end] in musicRanges">
        <span
          @click="
            () => {
              musicStart = start;
              musicEnd = end;
            }
          "
          class="text-blue-600 underline pointer"
        >
          {{ start }}-{{ end }}
        </span>
        ,
      </template>
    </div>
  </div>
</template>
