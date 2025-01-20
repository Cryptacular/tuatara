export const SHARP = "♯";
export const FLAT = "♭";

export const replaceSymbols = (input: string): string =>
  input.replaceAll("sharp", SHARP).replaceAll("flat", FLAT);
