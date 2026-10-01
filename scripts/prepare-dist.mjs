import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");
const dist = path.join(root, "dist");

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });

fs.copyFileSync(path.join(root, "index.html"), path.join(dist, "index.html"));
fs.cpSync(path.join(root, "src"), path.join(dist, "src"), { recursive: true });

console.log(`Prepared frontend in ${dist}`);
