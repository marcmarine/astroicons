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

export function toSvgDataUrl(svg: string): string {
	return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}
