import { useEffect, useRef, useState } from "react";
import { Icon } from "@astroicons/react/icon";
import { getSymbol } from "western-signs";
import { useLocation } from "wouter";
import { copyPngToClipboard, downloadPng } from "../lib/actions";
import { icons } from "../lib/icons";
import { formatSvg } from "../lib/utils";
import ActionButton from "./ActionButton";

import "va-code-block";

interface SymbolDetailProps {
	symbol: string;
}

export default function SymbolDetail({ symbol }: SymbolDetailProps) {
	const [, navigate] = useLocation();
	const [feedback, setFeedback] = useState<{
		id: string;
		label: string;
	} | null>(null);
	const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);

	useEffect(() => {
		return () => {
			if (timeoutRef.current) clearTimeout(timeoutRef.current);
		};
	}, []);

	const index = icons.findIndex((i) => i.name === symbol);
	const icon = index !== -1 ? icons[index] : undefined;

	if (!icon) return null;

	const prev = index > 0 ? icons[index - 1] : null;
	const next = index < icons.length - 1 ? icons[index + 1] : null;
	const svg = getSymbol(icon.name);
	const close = () => navigate("/");

	function showFeedback(id: string, label: string) {
		setFeedback({ id, label });
		if (timeoutRef.current) clearTimeout(timeoutRef.current);
		timeoutRef.current = setTimeout(() => setFeedback(null), 1500);
	}

	const options = [
		{
			id: "copy-svg",
			label: feedback?.id === "copy-svg" ? feedback.label : "Copy SVG",
			onSelect: () => {
				navigator.clipboard.writeText(svg.toString());
				showFeedback("copy-svg", "Copied!");
			},
		},
		{
			id: "copy-data-url",
			label:
				feedback?.id === "copy-data-url" ? feedback.label : "Copy Data URL",
			onSelect: () => {
				navigator.clipboard.writeText(svg.toDataURL());
				showFeedback("copy-data-url", "Copied!");
			},
		},
		{
			id: "copy-png",
			label: feedback?.id === "copy-png" ? feedback.label : "Copy PNG",
			onSelect: () => {
				copyPngToClipboard(svg.toString());
				showFeedback("copy-png", "Copied!");
			},
		},
		{
			id: "download-png",
			label: feedback?.id === "download-png" ? feedback.label : "Download PNG",
			onSelect: async () => {
				showFeedback("download-png", "Downloading...");
				await downloadPng(svg.toString(), symbol);
				setFeedback(null);
			},
		},
	];

	return (
		<div className="p-4 flex flex-wrap gap-4 rounded-lg border border-(--border-color) backdrop-blur-xl max-h-[calc(100vh-1rem)] relative">
			<div className="w-full sm:flex-1 flex flex-col gap-3 sm:max-w-xs">
				<div className="p-2 border border-(--border-color) rounded-md flex items-center justify-center aspect-square">
					<Icon name={icon.name} size="100%" strokeWidth={1.5} />
				</div>
			</div>
			<div className="flex-1 flex flex-wrap relative">
				<div className="flex-1 min-w-0">
					<h2 className="mb-1 text-4xl font-bold">{icon.display}</h2>
					<h4 className="mb-1 font-mono">{icon.name}</h4>
					<p className="mb-2 text-sm opacity-60">{icon.category}</p>
				</div>
				<div className="flex items-start gap-2">
					<button
						type="button"
						onClick={close}
						className="p-2 text-sm rounded bg-black/4 dark:bg-white/4 hover:bg-black/8 dark:hover:bg-white/8"
					>
						Close
					</button>
        </div>
        <div className="flex-0 basis-full">
          <va-code-block language="html" text={formatSvg(svg.toString())} />
        </div>
				<div className="-mx-1 -mb-1 sm:mb-0 flex-1 basis-full flex items-end justify-between mt-4">
					<div className="flex gap-px">
						<button
							type="button"
							onClick={() => prev && navigate(`/${prev.name}`)}
							disabled={!prev}
							className="p-2 text-sm rounded-l bg-black/4 dark:bg-white/4 hover:bg-black/8 dark:hover:bg-white/8 disabled:opacity-40 disabled:pointer-events-none"
						>
							Prev
						</button>
						<button
							type="button"
							onClick={() => next && navigate(`/${next.name}`)}
							disabled={!next}
							className="p-2 text-sm rounded-r bg-black/4 dark:bg-white/4 hover:bg-black/8 dark:hover:bg-white/8 disabled:opacity-40 disabled:pointer-events-none"
						>
							Next
						</button>
					</div>
					<ActionButton options={options} defaultOptionId="copy-svg" />
				</div>
			</div>
		</div>
	);
}
