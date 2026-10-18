import { Icon, type IconName } from "@astroicons/react/icon";
import { Link, useRoute } from "wouter";
import { useIconProps } from "../stores/icon-options";
import { usePanel } from "../stores/panel";
import { HighlightedText } from "./HighlightedText";

interface IconCardProps {
	name: string;
}

export default function IconCard({ name }: IconCardProps) {
	const highlight = usePanel((s) => s.query.trim());
	const scrollToSearch = usePanel((s) => s.scrollToSearch);
	const iconProps = useIconProps();
	const [isSelected] = useRoute(`/${name}`);
	return (
		<Link href={isSelected ? "/" : `/${name}`} onClick={scrollToSearch}>
			<div className="flex flex-col items-center gap-4 rounded-lg bg-black/2 dark:bg-white/1 p-4 border border-(--border-color) aspect-square overflow-hidden transition-all duration-400 cursor-pointer hover:bg-black/4 dark:hover:bg-white/4">
				<Icon
					name={name as IconName}
					{...iconProps}
					className="inline-block flex-1 transition-all duration-200"
				/>
				<span
					title={name}
					className="w-full text-xs font-light font-mono text-center truncate"
				>
					<HighlightedText text={name} highlight={highlight} />
				</span>
			</div>
		</Link>
	);
}
