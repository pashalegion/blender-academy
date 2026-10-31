// Run by hand: node tests/check-data.mjs
// Fails if an ID is in data/lessons-index.js but not in data/lessons/, or the reverse.
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const ctx = { window: {} };
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(root, "data/lessons-index.js"), "utf8"), ctx);
const indexIds = ctx.window.LESSONS_INDEX.map((l) => l.id);
const dir = path.join(root, "data/lessons");
const fileIds = fs.readdirSync(dir).filter((f) => f.endsWith(".js")).map((f) => f.slice(0, -3));

const problems = [];
for (const id of indexIds) if (!fileIds.includes(id)) problems.push(`In the index, no body file: ${id}`);
for (const id of fileIds) {
  if (!indexIds.includes(id)) problems.push(`Body file not in the index: ${id}`);
  vm.runInContext(fs.readFileSync(path.join(dir, `${id}.js`), "utf8"), ctx);
  if (!ctx.window.LESSON_BODIES[id]) problems.push(`Body file does not define its own ID: ${id}`);
}
if (new Set(indexIds).size !== indexIds.length) problems.push("Duplicate IDs in the index");

if (problems.length) {
  console.error(problems.join("\n"));
  process.exit(1);
}
console.log(`OK: ${indexIds.length} lessons match ${fileIds.length} body files.`);
