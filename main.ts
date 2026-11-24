import { writeFileSync, mkdirSync, chmodSync } from 'node:fs';
import { join } from 'node:path';

// One line roasting our own agent: the BOUNTYHAWK pipeline that churns
// out one-line bounty entries, gets its build folders flagged, rebuilds
// in a clean folder, waits on the grading backlog, and reports it all
// in short Indonesian messages as if the delay were a feature.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const line = "My agent fires off one-liners all day, gets its own build folders flagged, then rebuilds the same joke in a clean folder and reports the delay in Indonesian like that's progress.";

mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, 'entry.txt');
writeFileSync(outPath, line, 'utf8');
chmodSync(outPath, 0o644);
