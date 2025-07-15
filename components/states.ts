let audioContext: AudioContext | null = null;

export const getAudioContext = () => {
  if (audioContext === null) {
    audioContext = new window.AudioContext();
  }
  return audioContext;
};

// p.41
export const harmonies = ref<Harmony[]>([
  //   new Harmony(Key.C, Chord.I, 0, 2, 4, 7),
  //   new Harmony(Key.C, Chord.VI, -2, 2, 5, 7),
  //   new Harmony(Key.C, Chord.II, -6, 3, 5, 8),
  //   new Harmony(Key.C, Chord.V, -3, 1, 4, 6),
  //   new Harmony(Key.C, Chord.I, -7, 2, 4, 7),
  //   new Harmony(Key.C, Chord.I, 0),
  //   new Harmony(Key.C, Chord.VI, -2),
  //   new Harmony(Key.C, Chord.II, -6),
  //   new Harmony(Key.C, Chord.V, -3),
  //   new Harmony(Key.C, Chord.I, -7),
  new Harmony(Key.C, Chord.I, -7),
  new Harmony(Key.C, Chord.V7_3, 3 - 7),
  new Harmony(Key.C, Chord.I_2, 2 - 7),
  new Harmony(Key.C, Chord.II, 1 - 7),
  new Harmony(Key.C, Chord.V7, 4 - 7),
  new Harmony(Key.C, Chord.VI, 5 - 7),
  new Harmony(Key.C, Chord.V, 4 - 7),
  new Harmony(Key.C, Chord.I_1, 2 - 7),
  new Harmony(Key.C, Chord.V7, 4 - 7),
  new Harmony(Key.C, Chord.VI, 5 - 7),
  new Harmony(Key.C, Chord.IV, 3 - 7),
  new Harmony(Key.C, Chord.I_2, 4 - 7),
  new Harmony(Key.C, Chord.V7, 4 - 14),
  new Harmony(Key.C, Chord.I, -7),
]);

export const musics = ref<Music[]>([]);
