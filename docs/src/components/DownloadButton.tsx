import { useEffect, useRef, useState } from "react";
import { useRoute } from "wouter";
import { useFilteredIcons } from "../hooks/useFilteredIcons";
import {
	downloadIcon,
	downloadIconsZip,
	type IconFormat,
} from "../lib/actions";
import { icons } from "../lib/icons";
import { customizeSvg, getIconSvg } from "../lib/svg";
import { useIconOptionValues } from "../stores/icon-options";

const formats: IconFormat[] = ["svg", "png"];

export default function DownloadButton() {
	const [, params] = useRoute("/:symbol");
	const selected = params?.symbol !== "categories" ? params?.symbol : undefined;
	const { filteredIcons } = useFilteredIcons();
	const iconOptions = useIconOptionValues();
	const isFiltered = filteredIcons.length !== icons.length;
	const [format, setFormat] = useState<IconFormat>("svg");
	const [open, setOpen] = useState(false);
	const [busy, setBusy] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		function handleClickOutside(e: MouseEvent) {
			if (
				containerRef.current &&
				!containerRef.current.contains(e.target as Node)
			) {
				setOpen(false);
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	const label = busy
		? "Downloading..."
		: selected
			? `Download ${selected}`
			: isFiltered
				? `Download ${filteredIcons.length}`
				: "Download all";

	async function handleClick() {
		setBusy(true);
		try {
			if (selected) {
				await downloadIcon(
					customizeSvg(getIconSvg(selected), iconOptions),
					selected,
					format,
				);
				return;
			}

			const svgs = Object.fromEntries(
				filteredIcons.map((icon) => [
					icon.name,
					customizeSvg(getIconSvg(icon.name), iconOptions),
				]),
			);
			await downloadIconsZip(
				svgs,
				format,
				`${isFiltered ? "astroicons-filtered" : "astroicons"}-${format}`,
			);
		} finally {
			setBusy(false);
		}
	}

	const disabled = busy || (!selected && filteredIcons.length === 0);

	return (
		<div
			ref={containerRef}
			className="relative shrink-0 mr-4 mt-3 inline-flex gap-px"
		>
			<button
				type="button"
				onClick={handleClick}
				disabled={disabled}
				className="px-3 py-2 text-sm rounded-l bg-black/4 dark:bg-white/4 hover:bg-black/8 dark:hover:bg-white/8 active:bg-black/12 dark:active:bg-white/12 font-bold uppercase disabled:opacity-40 disabled:pointer-events-none"
			>
				{label}
			</button>

			<button
				type="button"
				onClick={() => setOpen((v) => !v)}
				disabled={busy}
				aria-haspopup="listbox"
				aria-expanded={open}
				aria-label="Download format"
				className="pl-3 pr-2 py-2 inline-flex items-center gap-1 text-sm rounded-r bg-black/4 dark:bg-white/4 hover:bg-black/8 dark:hover:bg-white/8 active:bg-black/12 dark:active:bg-white/12 font-bold uppercase disabled:opacity-40 disabled:pointer-events-none"
			>
				{format}
				<svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
					<title>Caret</title>
					<path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path>
				</svg>
			</button>

			{open && (
				<div
					role="listbox"
					className="mt-1 p-1 absolute w-24 -right-1 top-full bg-(--color-base-inverted) rounded-md z-10 flex flex-col gap-0.5"
				>
					{formats.map((option) => {
						const isSelected = option === format;
						return (
							<button
								key={option}
								type="button"
								role="option"
								aria-selected={isSelected}
								onClick={() => {
									setFormat(option);
									setOpen(false);
								}}
								className={`w-full text-left px-3 py-2 text-sm rounded-sm focus-visible:outline-none uppercase ${isSelected ? "bg-(--color-primary)/90 text-(--color-base-inverted) font-bold" : "hover:bg-black/8 dark:hover:bg-white/8"}`}
							>
								{option}
							</button>
						);
					})}
				</div>
			)}
		</div>
	);
}
