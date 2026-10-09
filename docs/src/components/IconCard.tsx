import { Icon, type IconName } from "@astroicons/react/icon";
import { Link } from "wouter";
import { useIconProps } from "../stores/icon-options";
import { usePanel } from "../stores/panel";
import { HighlightedText } from "./HighlightedText";

interface IconCardProps {
	name: string;
}

export default function IconCard({ name }: IconCardProps) {
	const highlight = usePanel((s) => s.query.trim());
	const iconProps = useIconProps();
	return (
		<Link href={`/${name}`}>
			<div className="flex flex-col items-center gap-4 rounded-lg bg-black/2 dark:bg-white/1 p-4 border border-(--border-color) aspect-square overflow-hidden transition-all duration-400 cursor-pointer hover:bg-black/4 dark:hover:bg-white/4">
				<Icon
					name={name as IconName}
					{...iconProps}
					className="inline-block flex-1 transition-all duration-200"
				/>
				<span className="text-xs font-light font-mono text-center">
					<HighlightedText text={name} highlight={highlight} />
				</span>
			</div>
		</Link>
	);
}
