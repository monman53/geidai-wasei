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
  new Harmony(Key.C, Chord.I, 0),
  new Harmony(Key.C, Chord.VI, -2),
  new Harmony(Key.C, Chord.II, -6),
  new Harmony(Key.C, Chord.V, -3),
  new Harmony(Key.C, Chord.I, -7),
]);

export const musics = ref<Music[]>([]);
