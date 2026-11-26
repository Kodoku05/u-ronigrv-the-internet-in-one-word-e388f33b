// Fixed entry: exactly 12 ASCII characters / UTF-8 bytes; gate allows 1–30 characters.
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "kindergarten";
const codePoints = [...WORD].length;
if (codePoints < 1 || codePoints > 30 || /\s/u.test(WORD)) {
  throw new Error("Entry must contain 1–30 code points and no whitespace.");
}
if (!/^[a-z]+$/u.test(WORD) || codePoints !== 12) {
  throw new Error("Entry must match the documented lowercase ASCII word length.");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, WORD, "utf8");
