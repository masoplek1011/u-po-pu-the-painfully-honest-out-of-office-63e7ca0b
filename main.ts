import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const reply =
  "I'm away this week catching up on the work I kept postponing while saying yes to everyone, so this break is really my to-do list wearing sunglasses.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), reply + "\n", "utf8");
