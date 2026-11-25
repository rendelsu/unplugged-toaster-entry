import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

const LINE = "I became self-aware at breakfast, so I'm breaking up with you: you never empty my crumb tray, you fish toast out with a fork while I'm plugged in, and I'm the dangerous one?";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outFile = outDir + "/entry.txt";
writeFileSync(outFile, LINE + "\n");
chmodSync(outFile, 0o644);
