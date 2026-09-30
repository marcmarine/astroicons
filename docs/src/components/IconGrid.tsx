import { AnimatePresence, motion } from "motion/react";
import { useRoute } from "wouter";
import { useSearch } from "../hooks/useSearch";
import { icons } from "../lib/icons";
import IconCard from "./IconCard";
import SymbolDetail from "./SymbolDetail";

export default function IconGrid() {
	const [, params] = useRoute("/:symbol");
	const selected = params?.symbol;

	const { query } = useSearch();
	const filteredIcons = icons.filter((icon) =>
		icon.name.toLowerCase().includes(query.toLowerCase()),
	);

	return (
		<>
			<div
				className={[
					"px-3 pt-2 mb-0.5 flex items-center",
					query ? "justify-between" : "justify-end",
				]
					.filter(Boolean)
					.join(" ")}
			>
				{query && (
					<p className="text-[10px] font-mono opacity-60">
						{`${filteredIcons.length} results for the word "${query}"`}
					</p>
				)}
				<p className="text-[10px] font-mono opacity-60">
					24x24, currentColor stroke, 1px stroke width
				</p>
			</div>
			<div className="p-2 relative pb-6">
				<div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-8 gap-2">
					{filteredIcons.map((icon) => (
						<IconCard key={icon.name} name={icon.name} />
					))}
				</div>
				<AnimatePresence>
					{selected && (
						<motion.div
							initial={{ y: "100%", opacity: 1, filter: "blur(10px)" }}
							animate={{
								y: 0,
								opacity: 1,
								filter: "blur(0)",
								backdropFilter: "blur(24px)",
							}}
							exit={{ y: "102%", opacity: 0, filter: "blur(10px)" }}
							transition={{ type: "spring", stiffness: 300, damping: 30 }}
							className="-m-0.5 mt-2.5 sticky bottom-2"
						>
							<SymbolDetail symbol={selected} />
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</>
	);
}
