<script setup lang="ts">
import { ref, onUnmounted } from "vue";

const props = defineProps<{
  u: number;
  staffGap: number;
  harmony: Harmony;
  x: number;
}>();

// 加線の座標を算出
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

// 和音再生
const isPlaying = ref(false);
let audioContext: AudioContext | null = null;
let oscillators: OscillatorNode[] = [];
let gainNode: GainNode | null = null;

const playChord = () => {
  if (audioContext === null) {
    audioContext = new window.AudioContext();
  }

  if (oscillators.length > 0) {
    stopChord(true);
  }

  isPlaying.value = true;

  gainNode = audioContext.createGain();
  gainNode.connect(audioContext.destination);
  gainNode.gain.setValueAtTime(0, audioContext.currentTime);

  const frequencies = [
    props.harmony.bas,
    props.harmony.ten,
    props.harmony.alt,
    props.harmony.sop,
  ].map((degree) => {
    return degreeToFreq(degree);
  });
  oscillators = frequencies.map((freq) => {
    if (audioContext === null) {
      audioContext = new window.AudioContext();
    }
    const osc = audioContext.createOscillator();
    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, audioContext.currentTime);
    osc.connect(gainNode!);
    return osc;
  });

  gainNode.gain.linearRampToValueAtTime(0.2, audioContext.currentTime + 0.01);
  oscillators.forEach((osc) => osc.start());
};

const stopChord = (immediate: boolean = false) => {
  if (!gainNode || !audioContext) return;

  isPlaying.value = false;

  if (immediate) {
    // 即時停止
    oscillators.forEach((osc) => {
      try {
        osc.stop();
      } catch (e) {
        // すでに停止している場合のエラーを無視
      }
    });
  } else {
    const fadeOutTime = audioContext.currentTime + 0.05;
    gainNode.gain.linearRampToValueAtTime(0, fadeOutTime);
    oscillators.forEach((osc) => osc.stop(fadeOutTime));
  }

  oscillators = [];
  gainNode = null;
};

const handleInteractionStart = (e: MouseEvent) => {
  if (e.buttons !== 0) {
    playChord();
  }
};

const handleInteractionEnd = () => {
  stopChord();
};

onUnmounted(() => {
  if (audioContext) {
    stopChord(true); // 即時停止
    audioContext.close().catch(console.error);
    audioContext = null;
  }
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
  <!-- UI -->
  <rect
    :x="x - u"
    :y="-staffGap / 2 - 8 * u"
    :width="4 * u"
    :height="staffGap + 2 * 8 * u"
    class="play-rect"
    :class="{ active: isPlaying }"
    @mousedown="handleInteractionStart"
    @mouseup="handleInteractionEnd"
    @mouseenter="handleInteractionStart"
    @mouseleave="handleInteractionEnd"
  />
</template>

<style>
.play-rect {
  fill: transparent;
  cursor: pointer;
  /* transition: all 0.15s ease-out; */
}

.play-rect:hover {
  fill: #0002;
}

/* isPlayingがtrueの時にactiveクラスが付与されます */
.play-rect.active {
  fill: #0004;
}
</style>
