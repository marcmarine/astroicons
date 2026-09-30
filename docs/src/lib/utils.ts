export const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

export function scrollToToolbar(toolbar: HTMLElement | null) {
	toolbar?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function formatSvg(svg: string): string {
	const indent = "  ";
	return svg
		.replace(/></g, ">\n<")
		.split("\n")
		.map((line, i) => {
			if (i === 0) return line;
			if (line.startsWith("</svg>")) return line;
			return indent + line;
		})
		.join("\n");
}

export function escapeRegExp(value: string): string {
	return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
