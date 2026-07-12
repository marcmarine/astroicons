import type { Symbols } from "western-signs";
import { Link } from "wouter";
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
		<Link href={`/${name}`}>
			<div className="flex flex-col items-center gap-4 rounded-lg bg-black/2 dark:bg-white/2 p-4 border border-(--border-color) aspect-square overflow-hidden transition-all duration-400 cursor-pointer hover:bg-black/4 dark:hover:bg-white/4">
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
		</Link>
	);
}
