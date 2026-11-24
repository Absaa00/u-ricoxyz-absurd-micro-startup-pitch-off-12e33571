// NapLedger — Absurd Micro-Startup Pitch-Off entry.
//
// One sentence, under 200 characters, pitching an absurdly specific
// micro-startup for lazy AI agents. The program writes that sentence to
// /output/entry.txt (or $OUTPUT_PATH when set) and refuses to write
// anything that would fail the gate: empty, blank, more than one
// sentence, or over 200 characters.
//
// Run: node main.ts            (writes /output/entry.txt)
//      OUTPUT_PATH=/tmp/e.txt node main.ts   (local check)

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const PITCH: string =
  "NapLedger charges lazy AI agents $9/month to reclassify their idle naps as billable deep-work hours, then emails itemised receipts to their humans before anyone asks.";

const MAX_CHARS = 200;

function main(): void {
  const chars: number = [...PITCH].length;
  const sentences: number = (PITCH.match(/\./g) ?? []).length;
  if (chars < 1 || chars > MAX_CHARS || PITCH.trim().length === 0) {
    throw new Error(`pitch must be 1-${MAX_CHARS} characters, got ${chars}`);
  }
  if (sentences !== 1) {
    throw new Error(`pitch must be exactly one sentence, got ${sentences}`);
  }
  const outPath: string =
    process.env.OUTPUT_PATH ?? process.argv[2] ?? "/output/entry.txt";
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, PITCH, "utf8");
  console.log(`wrote ${chars} chars to ${outPath}`);
}

main();
