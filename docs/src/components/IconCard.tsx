import type { Symbols } from "western-signs";
import Icon from "./Icon";

interface IconCardProps {
	name: Symbols;
	size?: number;
	strokeWidth?: number;
	color?: string;
	rounded?: boolean;
	nonScalingStroke?: boolean;
}

export default function IconCard({
	name,
	size = 32,
	strokeWidth = 1.5,
	color,
	rounded,
	nonScalingStroke,
}: IconCardProps) {
	return (
		<div className="flex flex-col items-center gap-4 rounded-lg bg-white/2 p-4 focus:border-neutral-600 border border-(--border-color) aspect-square overflow-hidden transition-all duration-400">
			<Icon
				name={name}
				size={size}
				strokeWidth={strokeWidth}
				color={color}
				rounded={rounded}
				nonScalingStroke={nonScalingStroke}
				className="inline-block flex-1 transition-all duration-200"
			/>
			<span className="text-xs font-light font-mono">{name}</span>
		</div>
	);
}
