import { Scale } from "./musicTheory/basics";

export const bassTunings: { label: string; strings: Scale[] }[] = [
  { label: "Standard (4-string)", strings: ["E", "A", "D", "G"] },
  { label: "Standard (5-string)", strings: ["B", "E", "A", "D", "G"] },
  { label: "Standard (6-string)", strings: ["B", "E", "A", "D", "G", "B"] },
];

export const guitarTunings: { label: string; strings: Scale[] }[] = [
  { label: "Standard", strings: ["E", "A", "D", "G", "B", "E"] },
  { label: "Drop D", strings: ["D", "A", "D", "G", "B", "E"] },
  { label: "Drop C", strings: ["C", "G", "C", "F", "A", "D"] },
  { label: "Open G", strings: ["D", "G", "D", "G", "B", "D"] },
  { label: "Open D", strings: ["D", "A", "D", "Fsharp", "A", "D"] },
];
