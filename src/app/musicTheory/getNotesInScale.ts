import { modes, notes, Scale, ScaleModeName } from "./basics";

export default function getNotesInScale(scale: Scale, mode: ScaleModeName) {
  const semitones = stepsInMode(mode);
  const rootNote = scale;
  const indexOfRootNote = notes.indexOf(rootNote);

  let currentOffset = 0;
  const notesInScale: Scale[] = [rootNote];

  for (const semitoneOffset of semitones) {
    currentOffset += semitoneOffset;
    const index = indexOfRootNote + currentOffset;
    notesInScale.push(notes[index >= notes.length ? index - 12 : index]);
  }

  return notesInScale;
}

const stepsInMode = (mode: ScaleModeName) => {
  const modeDetails = modes.find((m) => m.name === mode);

  if (!modeDetails) {
    throw new Error(`Mode '${mode}' does not exist!`);
  }

  return modeDetails.semitones;
};
