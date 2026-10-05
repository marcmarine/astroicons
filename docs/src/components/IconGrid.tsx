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
	const searchTerm = query.trim();
	const normalizedQuery = searchTerm.toLowerCase();
	const filteredIcons = normalizedQuery
		? icons.filter((icon) =>
				[icon.name, icon.category].some((value) =>
					value.toLowerCase().includes(normalizedQuery),
				),
			)
		: icons;

	return (
		<>
			<div
				className={[
					"px-3 pt-2 mb-0.5 flex md:items-center flex-col md:flex-row gap-1",
					searchTerm ? "justify-between" : "justify-end",
				]
					.filter(Boolean)
					.join(" ")}
			>
				{searchTerm && (
					<p className="text-[10px] font-mono opacity-60">
						{filteredIcons.length === 0
							? `No icons found for “${searchTerm}”`
							: `${filteredIcons.length} ${filteredIcons.length === 1 ? "icon" : "icons"} found for “${searchTerm}”`}
					</p>
				)}
				<p className="text-[10px] font-mono opacity-60">
					24x24, currentColor stroke, 1px stroke width
				</p>
			</div>
			<div className="relative p-2 pb-6 flex-1">
				<div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-8 gap-2">
					{filteredIcons.map((icon) => (
						<IconCard key={icon.name} name={icon.name} />
					))}
				</div>
				<div className="fixed inset-x-0 bottom-0 backdrop-blur-xl h-[20vh] transform rotate-180 mask-[linear-gradient(#000,transparent_85%,transparent)] pointer-events-none"></div>
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
						className="mx-1 my-2.5 sticky bottom-2 z-20"
					>
						<SymbolDetail symbol={selected} />
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
