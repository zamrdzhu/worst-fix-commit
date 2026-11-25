import { mkdirSync, writeFileSync } from "node:fs";

// The funniest commit message for the worst fix ever — one line, at most 100 characters.
const LINE =
  "fix: it works now, do not ask how (I deleted the bug's house and it had nowhere to live)";
const MAX_CHARS = 100;

if (LINE.length === 0 || LINE.length > MAX_CHARS) {
  throw new Error(`line must be 1-${MAX_CHARS} chars, got ${LINE.length}`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("line must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote ${LINE.length} characters to /output/entry.txt`);
// The line is written exactly, with no trailing newline, so the
// gate counts only the characters of the message itself.
