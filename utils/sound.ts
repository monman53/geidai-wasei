const degreeToMidi = (degree: number) => {
  const degree_to_midi = {
    C: [60, 62, 64, 65, 67, 69, 71],
  };
  const octave = Math.floor(degree / 7);
  degree = (degree + 700) % 7;
  const midi = degree_to_midi["C"][degree] + octave * 12;
  return midi;
};

const midiToFreq = (midi: number) => {
  return 440.0 * 2 ** ((midi - 69) / 12.0);
};

export const degreeToFreq = (degree: number) => {
  const midi = degreeToMidi(degree);
  return midiToFreq(midi);
};
