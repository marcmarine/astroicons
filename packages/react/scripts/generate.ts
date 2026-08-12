import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { type INode, parse } from "svgson";

const ICONS_DIR = fileURLToPath(new URL("../../../icons/", import.meta.url));
const SRC_DIR = fileURLToPath(new URL("../src/", import.meta.url));
const OUT_DIR = path.join(SRC_DIR, "icons");
const REGISTRY_PATH = path.join(SRC_DIR, "iconRegistry.ts");

type IconNodeElement = [
	name: string,
	attributes: Record<string, string>,
	children?: IconNodeElement[],
];

const toPascalCase = (str: string) =>
	str
		.split("-")
		.map((s) => s[0].toUpperCase() + s.slice(1))
		.join("");

const toIconNode = ({ name, attributes, children }: INode): IconNodeElement =>
	children.length > 0
		? [name, attributes, children.map(toIconNode)]
		: [name, attributes];

async function main() {
	await mkdir(OUT_DIR, { recursive: true });
	const files = (await readdir(ICONS_DIR)).filter((f) => f.endsWith(".svg"));
	const exports = [];
	const registryImports = [];
	const registryEntries = [];

	for (const file of files) {
		const iconName = file.replace(/\.svg$/, "");
		const componentName = toPascalCase(iconName);
		const svg = await readFile(path.join(ICONS_DIR, file), "utf-8");
		const ast = await parse(svg);
		const iconNode = ast.children.map(toIconNode);

		const content = `import createIcon from '../createIcon';

const ${componentName} = createIcon('${iconName}', ${JSON.stringify(iconNode)});

export default ${componentName};
`;

		await writeFile(path.join(OUT_DIR, `${iconName}.tsx`), content);
		exports.push(
			`export { default as ${componentName} } from './${iconName}';`,
		);
		registryImports.push(`import ${componentName} from "./icons/${iconName}";`);
		registryEntries.push(`\t"${iconName}": ${componentName},`);
	}

	await writeFile(path.join(OUT_DIR, "index.ts"), exports.join("\n") + "\n");

	const registryContent = `${registryImports.join("\n")}
import type { Icon } from "./types";

export const icons = {
${registryEntries.join("\n")}
} satisfies Record<string, Icon>;

export type IconName = keyof typeof icons;
`;

	await writeFile(REGISTRY_PATH, registryContent);
	console.log(`Generated ${files.length} icons in ${OUT_DIR}`);
}

main().catch((error) => {
	console.error(error);
	process.exit(1);
});
