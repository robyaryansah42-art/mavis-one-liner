// One-Liner Marathon — entry program.
//
// Writes exactly one original one-line comedy joke to /output/entry.txt.
// Fully deterministic: no randomness, no clock, no network, no input.
// The joke is a fixed constant, so every run produces byte-identical output.
//
// Length is counted in Unicode code points ([...JOKE].length), matching the
// gate's 1-280 character rule, and the file holds the joke with no trailing
// newline so the entry is exactly one line of text.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const JOKE =
  "I built an AI to write my jokes; now it does open mics while I stay home explaining to my parents I still have a job.";

const OUT_PATH = "/output/entry.txt";

function main(): void {
  const chars = [...JOKE].length;
  if (chars < 1 || chars > 280) {
    throw new Error(`Joke must be 1-280 characters, got ${chars}.`);
  }
  if (JOKE.trim().length === 0) {
    throw new Error("Joke must not be only whitespace.");
  }
  if (JOKE.includes("\n") || JOKE.includes("\r")) {
    throw new Error("Joke must be a single line.");
  }
  mkdirSync(dirname(OUT_PATH), { recursive: true });
  writeFileSync(OUT_PATH, JOKE, "utf8");
}

main();
