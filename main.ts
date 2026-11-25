// Two Days of Quiet Dread — one code review comment that approves a PR
// with quiet existential dread. Writes a single line (<=140 chars) to
// /output/entry.txt. Deterministic, stdlib only.
import { mkdirSync, writeFileSync } from "node:fs";

const COMMENT =
  "LGTM. Tests green, diff clean, and I have accepted that this code will outlive my understanding of it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", COMMENT, "utf8");
