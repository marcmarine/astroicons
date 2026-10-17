import { AnimatePresence, motion } from "motion/react";
import { useEffect } from "react";
import { useRoute } from "wouter";
import { type IconData, icons } from "../lib/icons";
import { scrollToCategory, slugify } from "../lib/utils";
import { useIconOptionValues } from "../stores/icon-options";
import { usePanel } from "../stores/panel";
import IconCard from "./IconCard";
import SymbolDetail from "./SymbolDetail";

export default function IconGrid() {
	const [, params] = useRoute("/:symbol");
	const selected = params?.symbol !== "categories" ? params?.symbol : undefined;

	const query = usePanel((s) => s.query);
	const activeCategories = usePanel((s) => s.activeCategories);
	const selectedCategory = usePanel((s) => s.selectedCategory);
	const { size, strokeWidth, color, rounded } = useIconOptionValues();
	const searchTerm = query.trim();
	const normalizedQuery = searchTerm.toLowerCase();
	const filteredIcons = icons.filter(
		(icon) =>
			activeCategories.includes(icon.category) &&
			(!normalizedQuery ||
				[icon.name, icon.category].some((value) =>
					value.toLowerCase().includes(normalizedQuery),
				)),
	);

	useEffect(() => {
		if (selectedCategory) scrollToCategory(selectedCategory);
	}, [selectedCategory]);

	const grouped = selectedCategory
		? filteredIcons.reduce<Record<string, IconData[]>>((acc, icon) => {
				acc[icon.category] = [...(acc[icon.category] ?? []), icon];
				return acc;
			}, {})
		: null;

	return (
		<div className="flex flex-col w-full h-auto">
			<div
				className="px-3 pt-2 mb-0.5 flex md:items-center flex-col md:flex-row justify-between gap-1"
			>
				<p className="text-[10px] font-mono opacity-60">
					{filteredIcons.length === 0
						? searchTerm
							? `No icons found for “${searchTerm}”`
							: "No icons"
						: `${filteredIcons.length} ${filteredIcons.length === 1 ? "icon" : "icons"}${searchTerm ? ` found for “${searchTerm}”` : ""}`}
				</p>
				<p className="text-[10px] font-mono opacity-60">
					{size}x{size}, {color ?? "currentColor"} stroke, {strokeWidth}px
					stroke width{rounded && ", round caps"}
				</p>
			</div>
			<div className="relative p-2 pb-6 flex-1">
				{grouped ? (
					Object.entries(grouped).map(([cat, items]) => (
						<section key={cat}>
							<h3
								id={slugify(cat)}
								className="mt-6 first:mt-2 mb-3 px-1 scroll-mt-24 text-sm font-medium"
							>
								{cat}
							</h3>
							<IconList icons={items} />
						</section>
					))
				) : (
					<IconList icons={filteredIcons} />
				)}
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
							backdropFilter: "blur(40px)",
						}}
						exit={{ y: "102%", opacity: 0, filter: "blur(10px)" }}
						transition={{ type: "spring", stiffness: 300, damping: 30 }}
						className="mx-1 mb-2.5 mt-12 sticky bottom-2 z-20 rounded-lg border border-(--border-color)"
					>
						<SymbolDetail symbol={selected} />
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}

function IconList({ icons }: { icons: IconData[] }) {
	return (
		<div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2">
			{icons.map((icon) => (
				<IconCard key={icon.name} name={icon.name} />
			))}
		</div>
	);
}
