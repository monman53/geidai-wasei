<script setup lang="ts">
import { ref, onUnmounted } from "vue";
import { getAudioContext, harmonies } from "./states";

const props = defineProps<{
  mode: Mode;
  u: number;
  idx: number;
  staffGap: number;
  harmony: Harmony;
  x: number;
}>();

// 加線の座標を算出
const ledger2ys = computed(() => {
  let m = 0;
  if (
    props.harmony.bas !== null &&
    props.harmony.ten !== null &&
    props.mode !== Mode.BassEdit
  ) {
    m = Math.max(props.harmony.bas, props.harmony.ten);
  } else if (
    props.harmony.bas === null &&
    props.harmony.ten !== null &&
    props.mode !== Mode.BassEdit
  ) {
    m = props.harmony.ten;
  } else if (
    (props.harmony.ten === null && props.harmony.bas !== null) ||
    (props.mode === Mode.BassEdit && props.harmony.bas !== null)
  ) {
    m = props.harmony.bas;
  } else {
    return [];
  }
  const ys = [];
  for (let i = 0; i < Math.floor((m - 0) / 2) + 1; i++) {
    ys.push(props.staffGap / 2 - (i + 1) * props.u);
  }
  return ys;
});
const ledger3ys = computed(() => {
  let m = 0;
  if (props.harmony.alt !== null && props.harmony.sop !== null) {
    m = Math.min(props.harmony.alt, props.harmony.sop);
  } else if (props.harmony.alt === null && props.harmony.sop !== null) {
    m = props.harmony.sop;
  } else if (props.harmony.sop === null && props.harmony.alt !== null) {
    m = props.harmony.alt;
  } else {
    return [];
  }
  const ys = [];
  for (let i = 0; i < Math.floor((0 - m) / 2) + 1; i++) {
    ys.push(-props.staffGap / 2 + (i + 1) * props.u);
  }
  return ys;
});
const ledger4ys = computed(() => {
  let m = 0;
  if (props.harmony.alt !== null && props.harmony.sop !== null) {
    m = Math.max(props.harmony.alt, props.harmony.sop);
  } else if (props.harmony.alt === null && props.harmony.sop !== null) {
    m = props.harmony.sop;
  } else if (props.harmony.sop === null && props.harmony.alt !== null) {
    m = props.harmony.alt;
  } else {
    return [];
  }
  const ys = [];
  for (let i = 0; i < Math.floor((m - 12) / 2) + 1; i++) {
    ys.push(-props.staffGap / 2 - 4 * props.u - (i + 1) * props.u);
  }
  return ys;
});

// 和音再生
const isPlaying = ref(false);
let oscillators: OscillatorNode[] = [];
let gainNode: GainNode | null = null;

const playChord = () => {
  const audioContext = getAudioContext();

  isPlaying.value = true;

  gainNode = audioContext.createGain();
  gainNode.connect(audioContext.destination);
  gainNode.gain.setValueAtTime(0, audioContext.currentTime);

  const frequencies = [
    props.harmony.bas,
    props.mode !== Mode.BassEdit ? props.harmony.ten : null,
    props.mode !== Mode.BassEdit ? props.harmony.alt : null,
    props.mode !== Mode.BassEdit ? props.harmony.sop : null,
  ].map((degree) => {
    return degree !== null ? degreeToFreq(degree) : 0;
  });
  oscillators = frequencies.map((freq) => {
    const osc = audioContext.createOscillator();
    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, audioContext.currentTime);
    osc.connect(gainNode!);
    return osc;
  });

  gainNode.gain.linearRampToValueAtTime(0.1, audioContext.currentTime + 0.02);
  oscillators.forEach((osc) => osc.start());
};

const stopChord = (immediate: boolean = false) => {
  const audioContext = getAudioContext();

  if (!gainNode || !audioContext) return;

  isPlaying.value = false;

  if (immediate) {
    // 即時停止
    oscillators.forEach((osc) => {
      osc.stop();
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
  if (e.buttons === 1) {
    playChord();
  }
};

const handleInteractionEnd = () => {
  stopChord();
};

onUnmounted(() => {
  const audioContext = getAudioContext();
  if (audioContext) {
    stopChord(true); // 即時停止
    audioContext.close().catch(console.error);
  }
});

// バス設定
const setBass = (bass: number) => {
  harmonies.value[props.idx].bas = bass;
  harmonies.value[props.idx].chord = null;
  playChord();
};
const setChord = (chord: Chord) => {
  harmonies.value[props.idx].chord = chord;
};
</script>

<template>
  <!-- 音符 -->
  <!-- bas -->
  <text
    v-if="harmony.bas !== null"
    :x="x"
    :y="u * 3 + -2 * harmony.bas"
    class="bravura-text"
  >
    &#xe1d4;
  </text>
  <!-- ten -->
  <text
    v-if="harmony.ten !== null && mode !== Mode.BassEdit"
    :x="x"
    :y="u * 3 + -2 * harmony.ten"
    class="bravura-text"
  >
    &#xe1d3;
  </text>
  <!-- alt -->
  <text
    v-if="harmony.alt !== null && mode !== Mode.BassEdit"
    :x="x"
    :y="-u * 3 + -2 * harmony.alt"
    class="bravura-text"
  >
    &#xe1d4;
  </text>
  <!-- sop -->
  <text
    v-if="harmony.sop !== null && mode !== Mode.BassEdit"
    :x="x"
    :y="-u * 3 + -2 * harmony.sop"
    class="bravura-text"
  >
    &#xe1d3;
  </text>
  <!-- 加線 -->
  <g v-if="mode !== Mode.BassEdit">
    <text
      v-for="(y, i) in ledger4ys"
      :key="i"
      :x="x"
      :y="y"
      class="bravura-text"
      >&#xe022;</text
    >
    <text
      v-for="(y, i) in ledger3ys"
      :key="i"
      :x="x"
      :y="y"
      class="bravura-text"
      >&#xe022;</text
    >
  </g>
  <text v-for="(y, i) in ledger2ys" :key="i" :x="x" :y="y" class="bravura-text"
    >&#xe022;</text
  >
  <!-- 和音記号 -->
  <g v-if="harmony.chord !== null">
    <text :x="x" :y="staffGap / 2 + 4 * u + 5.5 * u" class="yuzuri-text">{{
      chordToYuzuri(harmony.chord)
    }}</text>
  </g>
  <!-- UI -->
  <rect
    :x="x - u"
    :y="-staffGap / 2 - 8 * u"
    :width="4 * u"
    :height="staffGap + 2 * 8 * u + 3 * u"
    class="play-rect"
    :class="{ active: isPlaying }"
    @mousedown="handleInteractionStart"
    @mouseup="handleInteractionEnd"
    @mouseenter="handleInteractionStart"
    @mouseleave="handleInteractionEnd"
  />
  <g v-if="mode === Mode.BassEdit">
    <g
      v-for="(bas, i) in [-11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1]"
      :key="i"
      class="edit-bass"
      @mousedown="
        () => {
          setBass(bas);
        }
      "
      @mouseup="handleInteractionEnd"
      @mouseleave="handleInteractionEnd"
    >
      <text :x="x" :y="u * 3 + -2 * bas" class="bravura-text"> &#xe1d4; </text>
      <rect
        :x="x - u"
        :y="u * 3 - (1 / 4) * u + -2 * bas"
        :width="4 * u"
        :height="(1 / 2) * u"
      />
    </g>
    <!-- 和音選択 -->
    <g v-if="harmony.chord === null && harmony.bas !== null">
      <text
        v-for="(chord, i) in bassToChords(harmony.bas)"
        :key="i"
        :x="x"
        :y="staffGap / 2 + 4 * u + 5.5 * u + i * 2 * u"
        class="yuzuri-text pending-chord pointer pointable"
        @mousedown="
          () => {
            setChord(chord);
          }
        "
        >{{ chordToYuzuri(chord) }}</text
      >
    </g>
  </g>
</template>

<style>
.pointer {
  cursor: pointer;
}

.play-rect,
.edit-bass {
  fill: transparent;
  cursor: pointer;
  /* transition: all 0.15s ease-out; */
}

.play-rect:hover {
  fill: #00f2;
}
.edit-bass:hover text {
  fill: #0006;
}

/* isPlayingがtrueの時にactiveクラスが付与されます */
.play-rect.active {
  fill: #00f4;
}

.pending-chord {
  fill: #bbb;
}
</style>
