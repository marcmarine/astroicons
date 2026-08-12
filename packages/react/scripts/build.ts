import { readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const packageRoot = fileURLToPath(new URL("..", import.meta.url));
const srcDir = path.join(packageRoot, "src");
const iconsDir = path.join(srcDir, "icons");
const entry = path.join(srcDir, "index.ts");
const iconEntry = path.join(srcDir, "icon", "index.ts");
const distDir = path.join(packageRoot, "dist");

const iconFiles = (await readdir(iconsDir))
	.filter((f) => f.endsWith(".tsx"))
	.map((f) => path.join(iconsDir, f));

const esm = await Bun.build({
	entrypoints: [entry, iconEntry, ...iconFiles],
	outdir: distDir,
	root: srcDir,
	format: "esm",
	splitting: true,
	external: ["react", "react/jsx-runtime"],
	naming: "[dir]/[name].[ext]",
	minify: true,
});

const cjs = await Bun.build({
	entrypoints: [entry],
	outdir: path.join(distDir, "cjs"),
	root: srcDir,
	format: "cjs",
	external: ["react", "react/jsx-runtime"],
	minify: true,
});

if (!esm.success || !cjs.success) {
	console.error([...esm.logs, ...cjs.logs]);
	process.exit(1);
}
