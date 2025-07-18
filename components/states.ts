let audioContext: AudioContext | null = null;

export const getAudioContext = () => {
  if (audioContext === null) {
    audioContext = new window.AudioContext();
  }
  return audioContext;
};

// p.41
export const harmonies = ref<Harmony[]>([
  new Harmony(Key.C, Chord.I, -7, null, null, null, true, false, false, false),
  new Harmony(
    Key.C,
    Chord.V7_3,
    3 - 7,
    null,
    null,
    null,
    true,
    false,
    false,
    false
  ),
  new Harmony(
    Key.C,
    Chord.I_2,
    2 - 7,
    null,
    null,
    null,
    true,
    false,
    false,
    false
  ),
  new Harmony(
    Key.C,
    Chord.II,
    1 - 7,
    null,
    null,
    null,
    true,
    false,
    false,
    false
  ),
  new Harmony(
    Key.C,
    Chord.V7,
    4 - 7,
    null,
    null,
    null,
    true,
    false,
    false,
    false
  ),
  new Harmony(
    Key.C,
    Chord.VI,
    5 - 7,
    null,
    null,
    null,
    true,
    false,
    false,
    false
  ),
  new Harmony(
    Key.C,
    Chord.V,
    4 - 7,
    null,
    null,
    null,
    true,
    false,
    false,
    false
  ),
  new Harmony(
    Key.C,
    Chord.I_1,
    2 - 7,
    null,
    null,
    null,
    true,
    false,
    false,
    false
  ),
  new Harmony(
    Key.C,
    Chord.V7,
    4 - 7,
    null,
    null,
    null,
    true,
    false,
    false,
    false
  ),
  new Harmony(
    Key.C,
    Chord.VI,
    5 - 7,
    null,
    null,
    null,
    true,
    false,
    false,
    false
  ),
  new Harmony(
    Key.C,
    Chord.IV,
    3 - 7,
    null,
    null,
    null,
    true,
    false,
    false,
    false
  ),
  new Harmony(
    Key.C,
    Chord.I_2,
    4 - 7,
    null,
    null,
    null,
    true,
    false,
    false,
    false
  ),
  new Harmony(
    Key.C,
    Chord.V7,
    4 - 14,
    null,
    null,
    null,
    true,
    false,
    false,
    false
  ),
  new Harmony(Key.C, Chord.I, -7, null, null, null, true, false, false, false),
]);

export const musics = ref<Music[]>([]);

// Voice range for debug
export const voiceRanges_ = [
  new Harmony(Key.C, Chord.I, -11, -7, -3, 0),
  new Harmony(Key.C, Chord.I, -10, -6, -2, 1),
  new Harmony(Key.C, Chord.I, -9, -5, -1, 2),
  new Harmony(Key.C, Chord.I, -8, -4, 0, 3),
  new Harmony(Key.C, Chord.I, -7, -3, 1, 4),
  new Harmony(Key.C, Chord.I, -6, -2, 2, 5),
  new Harmony(Key.C, Chord.I, -5, -1, 3, 6),
  new Harmony(Key.C, Chord.I, -4, 0, 4, 7),
  new Harmony(Key.C, Chord.I, -3, 1, 5, 8),
  new Harmony(Key.C, Chord.I, -2, 2, 6, 9),
  new Harmony(Key.C, Chord.I, -1, 3, 7, 10),
  new Harmony(Key.C, Chord.I, 0, 4, 8, 11),
  new Harmony(Key.C, Chord.I, 1, 5, 8, 12),
];
