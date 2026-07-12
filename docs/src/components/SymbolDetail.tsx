import { useLocation } from "wouter";
import { icons } from "../lib/icons";
import Icon from "./Icon";

interface SymbolDetailProps {
	symbol: string;
}

export default function SymbolDetail({ symbol }: SymbolDetailProps) {
	const [, navigate] = useLocation();
	const icon = icons.find((i) => i.name === symbol);
	if (!icon) return null;

	const close = () => navigate("/");

	return (
		<div className="p-4 flex items-start flex-wrap gap-4 rounded-lg border border-(--border-color) backdrop-blur-xl">
			<div className="p-2 w-full border border-(--border-color) rounded-md sm:flex-0 flex justify-center">
				<Icon name={icon.name} size={256} strokeWidth={1.5} />
			</div>
			<div className="flex-1 min-w-0">
				<h2 className="text-4xl font-bold">{icon.display}</h2>
				<h4 className="text-sm font-mono">{icon.name}</h4>
				<p className="opacity-60">{icon.category}</p>
			</div>
			<div className="flex gap-2">
				<button
					type="button"
					onClick={close}
					className="p-2 text-xs rounded bg-black/4 dark:bg-white/4 hover:bg-black/8 dark:hover:bg-white/8"
				>
					Close
				</button>
			</div>
		</div>
	);
}
