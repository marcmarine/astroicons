import { useMemo } from "react";
import { getSymbol, type Symbols } from "western-signs";

interface IconProps extends React.SVGAttributes<SVGSVGElement> {
	name: Symbols;
	size?: number | string;
	strokeWidth?: number;
	color?: string;
	nonScalingStroke?: boolean;
	rounded?: boolean;
}

export default function Icon({
	name,
	size = 24,
	strokeWidth = 1,
	color,
	nonScalingStroke = false,
	rounded = false,
	...props
}: IconProps) {
	const svg = useMemo(() => {
		const raw = getSymbol(name, {
			width: size,
			height: size,
			stroke: color ?? "currentColor",
			"stroke-width": strokeWidth,
			nonScalingStroke,
			...(rounded && {
				"stroke-linecap": "round" as const,
				"stroke-linejoin": "round" as const,
			}),
		});

		const doc = new DOMParser().parseFromString(
			raw.toString(),
			"image/svg+xml",
		);
		const el = doc.querySelector("svg");
		if (!el) return null;

		const attrs: Record<string, string> = {};
		for (let i = 0; i < el.attributes.length; i++) {
			attrs[el.attributes[i].name] = el.attributes[i].value;
		}

		return { attrs, innerHTML: el.innerHTML };
	}, [name, size, strokeWidth, color, nonScalingStroke, rounded]);

	if (!svg) return null;

	return (
		<svg
			{...svg.attrs}
			{...props}
			dangerouslySetInnerHTML={{ __html: svg.innerHTML }}
		/>
	);
}
