import { useRoute } from "wouter";
import { icons } from "../lib/icons";
import IconCard from "./IconCard";
import SymbolDetail from "./SymbolDetail";

export default function IconGrid() {
	const [, params] = useRoute("/:symbol");
	const selected = params?.symbol;

	return (
		<>
			<div className="px-3 pt-2 text-right">
				<p className="text-[10px] font-mono opacity-60">
					24x24, currentColor stroke, 1px stroke width
				</p>
			</div>
			<div className="p-2 relative">
				<div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-8 gap-2">
					{icons.map((icon) => (
						<IconCard key={icon.name} name={icon.name} />
					))}
				</div>
				{selected && (
					<div className="-m-0.5 mt-2.5 sticky bottom-2">
						<SymbolDetail symbol={selected} />
					</div>
				)}
			</div>
		</>
	);
}
