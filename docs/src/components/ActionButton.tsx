import { useEffect, useRef, useState } from "react";

interface ActionButtonOption {
	id: string;
	label: string;
	onSelect: () => void;
}

interface ActionButtonProps {
	options: ActionButtonOption[];
	defaultOptionId?: string;
	onOptionChange?: (id: string) => void;
}

export default function ActionButton({
	options,
	defaultOptionId,
	onOptionChange,
}: ActionButtonProps) {
	const [open, setOpen] = useState(false);
	const [selectedId, setSelectedId] = useState(
		defaultOptionId ?? options[0]?.id,
	);
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

	const selectedOption = options.find((o) => o.id === selectedId) ?? options[0];

	function selectOption(option: ActionButtonOption) {
		setSelectedId(option.id);
		setOpen(false);
		option.onSelect?.();
		onOptionChange?.(option.id);
	}

	function handleMainClick() {
		selectedOption?.onSelect?.();
	}

	return (
		<div ref={containerRef} className="relative inline-flex gap-px">
			<button
				type="button"
				onClick={handleMainClick}
				className="px-3 py-2 text-sm rounded-l bg-(--color-primary) hover:bg-(--color-primary)/80 active:bg-(--color-primary)/90 text-(--color-base-inverted) font-bold uppercase"
			>
				{selectedOption?.label}
			</button>

			<button
				type="button"
				onClick={() => setOpen((v) => !v)}
				aria-haspopup="listbox"
				aria-expanded={open}
				aria-label="More options"
				className="p-2 text-sm rounded-r bg-(--color-primary) hover:bg-(--color-primary)/80 active:bg-(--color-primary)/90 text-(--color-base-inverted)"
			>
				<svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
					<title>Caret</title>
					<path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path>
				</svg>
			</button>

			{open && (
				<ul
					role="listbox"
					className="mb-1 p-1 absolute w-40 -right-1 bottom-full bg-(--color-base-inverted) rounded-md z-10 space-y-0.5"
				>
					{options.map((option) => {
						const isSelected = option.id === selectedId;
						return (
							<li key={option.id} role="option" aria-selected={isSelected}>
								<button
									type="button"
									onClick={() => selectOption(option)}
									className={`w-full text-left px-3 py-2 text-sm rounded-sm focus-visible:outline-none uppercase ${isSelected ? "bg-(--color-primary)/90 text-(--color-base-inverted) font-bold" : "hover:bg-black/8 dark:hover:bg-white/8"}`}
								>
									{option.label}
								</button>
							</li>
						);
					})}
				</ul>
			)}
		</div>
	);
}
