import { describe, expect, it } from "vitest";
import getNotesInScale from "./getNotesInScale";

describe("getNotesInScale", () => {
  it("returns correct 8 notes for C Ionian (C Major)", () => {
    const notes = getNotesInScale("C", "Ionian");
    expect(notes).toEqual(["C", "D", "E", "F", "G", "A", "B"]);
  });

  it("returns correct 12 notes for C Chromatic", () => {
    const notes = getNotesInScale("C", "Chromatic");
    expect(notes).toEqual([
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
    ]);
  });
});
