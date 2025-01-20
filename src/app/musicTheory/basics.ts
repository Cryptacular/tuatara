export const notes: Scale[] = [
  "A",
  "Asharp",
  "B",
  "C",
  "Csharp",
  "D",
  "Dsharp",
  "E",
  "F",
  "Fsharp",
  "G",
  "Gsharp",
];

export const notesFromC: Scale[] = [
  "C",
  "Csharp",
  "D",
  "Dsharp",
  "E",
  "F",
  "Fsharp",
  "G",
  "Gsharp",
  "A",
  "Asharp",
  "B",
];

export const scales: Scale[] = [
  "A",
  "Asharp",
  "B",
  "C",
  "Csharp",
  "D",
  "Dsharp",
  "E",
  "F",
  "Fsharp",
  "G",
  "Gsharp",
];

export const modes: ScaleMode[] = [
  { name: "Ionian", semitones: [2, 2, 1, 2, 2, 2], type: "Major" },
  { name: "Dorian", semitones: [2, 1, 2, 2, 2, 1], type: "Minor" },
  { name: "Phrygian", semitones: [1, 2, 2, 2, 1, 2], type: "Minor" },
  { name: "Lydian", semitones: [2, 2, 2, 1, 2, 2], type: "Major" },
  { name: "Mixolydian", semitones: [2, 2, 1, 2, 2, 1], type: "Major" },
  { name: "Aeolian", semitones: [2, 1, 2, 2, 1, 2], type: "Minor" },
  { name: "Locrian", semitones: [1, 2, 2, 1, 2, 2], type: "Minor" },
  {
    name: "Chromatic",
    semitones: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    type: "Other",
  },
];

export type Scale =
  | "A"
  | "Asharp"
  | "B"
  | "C"
  | "Csharp"
  | "D"
  | "Dsharp"
  | "E"
  | "F"
  | "Fsharp"
  | "G"
  | "Gsharp";

export interface ScaleMode {
  name: ScaleModeName;

  semitones: number[];
  type: "Major" | "Minor" | "Other";
}

export type ScaleModeName =
  | "Ionian"
  | "Dorian"
  | "Phrygian"
  | "Lydian"
  | "Mixolydian"
  | "Aeolian"
  | "Locrian"
  | "Chromatic";
