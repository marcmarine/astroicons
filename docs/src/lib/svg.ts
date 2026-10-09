import type { IconOptionValues } from "../stores/icon-options";

const svgModules = import.meta.glob("../../../icons/*.svg", {
	eager: true,
	query: "?raw",
	import: "default",
}) as Record<string, string>;

const svgByName = Object.fromEntries(
	Object.entries(svgModules).map(([path, content]) => {
		const filename = path.split("/").pop() ?? "";
		const name = filename.replace(/\.svg$/, "");
		return [name, content];
	}),
) as Record<string, string>;

export function getIconSvg(name: string): string {
	return svgByName[name] ?? "";
}

export function customizeSvg(svg: string, options: IconOptionValues): string {
	const { size, strokeWidth, color, rounded } = options;

	return svg.replace(/<svg\b[^>]*>/, (tag) => {
		let root = tag
			.replace(/\swidth="[^"]*"/, ` width="${size}"`)
			.replace(/\sheight="[^"]*"/, ` height="${size}"`)
			.replace(/\sstroke="[^"]*"/, ` stroke="${color ?? "currentColor"}"`)
			.replace(/\sstroke-width="[^"]*"/, ` stroke-width="${strokeWidth}"`);

		if (rounded) {
			root = root.replace(
				/>$/,
				' stroke-linecap="round" stroke-linejoin="round">',
			);
		}

		return root;
	});
}

export function toSvgDataUrl(svg: string): string {
	return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}
