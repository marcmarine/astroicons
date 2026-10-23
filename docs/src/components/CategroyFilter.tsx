import { useState } from "react";
import { useLocation } from "wouter";
import { scrollToCategory, slugify } from "../lib/utils";
import { usePanel } from "../stores/panel";

interface CategoryFilterProps {
	categories: string[];
	className?: string;
}

function EyeOpen({ className }: { className?: string }) {
	return (
		<svg
			width="16"
			height="16"
			fill="none"
			viewBox="0 0 16 16"
			className={className}
		>
			<title>Eye open</title>
			<path
				fill="currentColor"
				fillRule="evenodd"
				d="M8 3.5C4.667 3.5 1.889 5.722.5 8c1.389 2.278 4.167 4.5 7.5 4.5s6.111-2.222 7.5-4.5C14.111 5.722 11.333 3.5 8 3.5m0 7.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0-1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
				clipRule="evenodd"
			/>
		</svg>
	);
}

function EyeOff({ className }: { className?: string }) {
	return (
		<svg
			width="16"
			height="16"
			fill="none"
			viewBox="0 0 16 16"
			className={className}
		>
			<title>Eye off</title>
			<path
				fill="currentColor"
				fillRule="evenodd"
				d="M2.159 6.058c-.14-.292.103-.558.427-.558.38 0 .43.08.571.307q.047.076.113.175c.232.338.588.738 1.053 1.121C5.257 7.873 6.54 8.5 8 8.5s2.743-.628 3.677-1.397a5.6 5.6 0 0 0 1.053-1.121l.109-.168c.148-.235.198-.314.575-.314.324 0 .566.266.427.558-.234.491-.718 1.12-1.397 1.706l.972 1.459a.5.5 0 1 1-.832.554l-.94-1.41a7.2 7.2 0 0 1-1.59.784l.43 1.728a.5.5 0 0 1-.97.242l-.429-1.718a6.2 6.2 0 0 1-2.17 0l-.43 1.718a.5.5 0 0 1-.97-.242l.432-1.728a7.2 7.2 0 0 1-1.59-.784l-.941 1.41a.5.5 0 0 1-.832-.554l.972-1.459c-.68-.586-1.163-1.215-1.397-1.706"
				clipRule="evenodd"
			/>
		</svg>
	);
}

export default function CategoryFilter({
	categories,
	className,
}: CategoryFilterProps) {
	const {
		activeCategories,
		selectedCategory,
		setActiveCategories,
		setSelectedCategory,
	} = usePanel();
	const [, setLocation] = useLocation();
	const [expanded, setExpanded] = useState(true);
	const allActive = activeCategories.length === categories.length;

	return (
		<div
			className={["px-4 py-3 shrink-0", className].filter(Boolean).join(" ")}
		>
			<h3 className="mb-2 font-semibold text-sm">Categories</h3>
			<div className="-mx-2 text-sm">
				<div className="px-1 flex items-center group hover:bg-white/5 rounded-md">
					<button
						type="button"
						onClick={() => {
							setExpanded((v) => !v);
						}}
						className="size-6 flex items-center justify-center hover:bg-white/10 rounded transition-all"
					>
						<svg
							className={`size-3 transition-transform ${expanded ? "rotate-90" : ""}`}
							viewBox="0 0 16 16"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
						>
							<title>Expand</title>
							<path d="M6 4l4 4-4 4" />
						</svg>
					</button>
					<button
						className="px-1 py-1.5 text-left flex-1 opacity-80 hover:opacity-100 cursor-pointer"
						onClick={() => {
							setLocation("/");
							setSelectedCategory(null);
						}}
						type="button"
					>
						All
					</button>
					<button
						type="button"
						onClick={() =>
							setActiveCategories(allActive ? [] : [...categories])
						}
						className="size-6 flex items-center justify-center rounded hover:bg-white/10"
					>
						{allActive ? (
							<EyeOpen className="opacity-0 group-hover:opacity-100 transition-opacity" />
						) : (
							<EyeOff />
						)}
					</button>
				</div>
				{expanded &&
					categories.map((cat) => {
						const isActive = activeCategories.includes(cat);
						return (
							<div
								key={cat}
								className="pr-1 pl-8 flex items-center gap-2 group  hover:bg-white/5 rounded-md transition-all"
							>
								<button
									className={[
										"py-1.5 flex-1 text-left opacity-80 hover:opacity-100 cursor-pointer",
										!isActive && "opacity-40! pointer-events-none",
									]
										.filter(Boolean)
										.join(" ")}
									type="button"
									onClick={() => {
										setLocation(`/categories#${slugify(cat)}`);
										setSelectedCategory(cat);
										// Same category again: the grid effect won't re-run
										if (cat === selectedCategory) scrollToCategory(cat);
									}}
								>
									{cat}
								</button>
								<button
									type="button"
									onClick={() => {
										setActiveCategories(
											isActive
												? activeCategories.filter((c) => c !== cat)
												: [...activeCategories, cat],
										);
									}}
									className="size-6 flex items-center justify-center rounded hover:bg-white/10"
								>
									{isActive ? (
										<EyeOpen className="opacity-0 group-hover:opacity-100 transition-opacity" />
									) : (
										<EyeOff />
									)}
								</button>
							</div>
						);
					})}
			</div>
		</div>
	);
}
