<script setup lang="ts">
import { getAudioContext, harmonies, musics } from "./components/states";

const mode = ref<Mode>(Mode.BassEdit);

onUnmounted(() => {
  const audioContext = getAudioContext();
  if (audioContext) {
    audioContext.close().catch(console.error);
  }
});
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold">藝大和声 I 巻</h1>
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
  </div>
</template>
