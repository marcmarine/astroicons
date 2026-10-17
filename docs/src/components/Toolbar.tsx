import { useEffect, useState } from "react";
import { useFilteredIcons } from "../hooks/useFilteredIcons";
import { useIconOptionValues } from "../stores/icon-options";
import { toolbarMarkerRef, toolbarRef } from "../stores/panel";
import DownloadButton from "./DownloadButton";
import SearchInput from "./SearchInput";

export default function Toolbar() {
	const { searchTerm, filteredIcons } = useFilteredIcons();
	const { size, strokeWidth, color, rounded } = useIconOptionValues();
	const [hasScrolledPastInput, setHasScrolledPastInput] = useState(false);

	useEffect(() => {
		const marker = toolbarMarkerRef.current;
		if (!marker) return;

		const observer = new IntersectionObserver(([entry]) => {
			setHasScrolledPastInput(
				!entry.isIntersecting && entry.boundingClientRect.top < 0,
			);
		});

		observer.observe(marker);
		return () => observer.disconnect();
	}, []);

	return (
		<>
			<span
				ref={toolbarMarkerRef}
				aria-hidden="true"
				className="block h-px -mb-px"
			/>
			<div
				ref={toolbarRef}
				className="sticky top-0 z-40 border-b border-b-(--border-color) transition duration-800"
			>
				<div className="flex items-center">
					<SearchInput />
					<DownloadButton />
				</div>
				<div className="px-4 pb-2 flex md:items-center flex-col md:flex-row justify-between gap-1">
					<p className="text-[10px] font-mono opacity-60">
						{filteredIcons.length === 0
							? searchTerm
								? "No icons found"
								: "No icons"
							: `${filteredIcons.length} ${filteredIcons.length === 1 ? "icon" : "icons"}${searchTerm ? " found" : ""}`}
					</p>
					<p className="text-[10px] font-mono opacity-60">
						{size}x{size}, {color ?? "currentColor"} stroke, {strokeWidth}px
						stroke width{rounded && ", round caps"}
					</p>
				</div>
				<div
					className={`absolute inset-x-0 top-0 backdrop-blur-2xl h-[24vh] mask-[linear-gradient(#000,transparent_85%,transparent)] pointer-events-none -z-10 transition-opacity ${hasScrolledPastInput ? "opacity-100" : "opacity-0"}`}
				></div>
			</div>
		</>
	);
}
