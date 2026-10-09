import { useId } from "react";
import { useIconOptions } from "../stores/icon-options";

interface CustomizePanelProps {
	className?: string;
}

export default function Customize({ className }: CustomizePanelProps) {
	const { size, strokeWidth, color, rounded, set } = useIconOptions();

	const sizeId = useId();
	const strokId = useId();
	const strokeWidthId = useId();
	return (
		<div
			className={[
				"px-4 py-3 w-56 shrink-0 space-y-5 border-b border-(--border-color)",
				className,
			]
				.filter(Boolean)
				.join(" ")}
		>
			<h3 className="mb-2 font-semibold text-sm">Customize</h3>

			<label htmlFor={sizeId} className="text-xs">
				Size
			</label>
			<div className="-mx-1 mt-1 flex items-center gap-2">
				<div className="flex items-center flex-1 gap-2 px-3 py-1.5 rounded-lg border border-(--border-color) hover:bg-(--color-base)/2 transition-all focus-within:border-(--color-base)/20">
					<span className="text-xs opacity-80">W</span>
					<input
						id={sizeId}
						type="number"
						min={8}
						max={256}
						value={size}
						onChange={(e) => set({ size: Number(e.target.value) })}
						className="w-full bg-transparent text-xs outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
					/>
				</div>
				<div className="flex items-center flex-1 gap-2 px-3 py-1.5 rounded-lg border border-(--border-color) hover:bg-(--color-base)/2 transition-all focus-within:border-(--color-base)/20">
					<span className="text-xs opacity-80">H</span>
					<input
						type="number"
						min={8}
						max={256}
						value={size}
						onChange={(e) => set({ size: Number(e.target.value) })}
						className="w-full bg-transparent text-xs outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
					/>
				</div>
			</div>

			<fieldset>
				<label htmlFor={strokId} className="mb-2 text-xs block">
					Stroke
				</label>
				<div className="-mx-1 flex items-center gap-2 px-2 py-1.5 rounded-lg border border-(--border-color) mb-2 hover:bg-(--color-base)/2 transition-all focus-within:border-(--color-base)/20">
					<div className="relative size-4 cursor-pointer shrink-0">
						<input
							id={strokId}
							type="color"
							value={color ?? "#ffffff"}
							onChange={(e) => set({ color: e.target.value })}
							className="absolute inset-0 size-full cursor-pointer opacity-0"
						/>
						<div
							className="size-full rounded-xs border border-(--border-color)"
							style={{ backgroundColor: color ?? "currentColor" }}
						/>
					</div>
					<input
						type="text"
						value={color ?? ""}
						placeholder="currentColor"
						onChange={(e) => set({ color: e.target.value.trim() || null })}
						className="w-full bg-transparent text-xs outline-none uppercase placeholder:normal-case"
					/>
				</div>

				<div className="-mx-1 flex items-center gap-2">
					<div className="flex items-center flex-1 gap-2 px-2 py-1.5 rounded-lg border border-(--border-color) hover:bg-(--color-base)/2 transition-all focus-within:border-(--color-base)/20">
						<svg
							className="size-4 shrink-0"
							viewBox="0 0 16 16"
							fill="none"
							stroke="currentColor"
							strokeWidth="1"
						>
							<title>Stroke Width</title>
							<line x1="3" y1="8" x2="13" y2="8" />
							<line x1="3" y1="4" x2="13" y2="4" />
							<line x1="3" y1="12" x2="13" y2="12" />
						</svg>
						<input
							id={strokeWidthId}
							type="number"
							min={0.5}
							max={3}
							step={0.5}
							value={strokeWidth}
							onChange={(e) => set({ strokeWidth: Number(e.target.value) })}
							className="w-full bg-transparent text-xs outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
						/>
					</div>
				</div>
			</fieldset>

			<div>
				<label htmlFor="" className="mb-2 text-xs block">
					End point
				</label>
				<div className="-mx-1 relative">
					<select
						value={rounded ? "rounded" : "none"}
						onChange={(e) => set({ rounded: e.target.value === "rounded" })}
						className="w-full appearance-none px-3 py-1.5 pr-8 rounded-lg border border-(--border-color) bg-transparent text-xs outline-none cursor-pointer"
					>
						<option value="none">None</option>
						<option value="rounded">Rounded</option>
					</select>
					<div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
						<svg
							className="size-3.5"
							viewBox="0 0 16 16"
							fill="none"
							stroke="currentColor"
							strokeWidth="1.5"
						>
							<title>Check</title>
							<path d="M4 6l4 4 4-4" />
						</svg>
					</div>
				</div>
			</div>
		</div>
	);
}
