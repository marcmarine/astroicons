import { FIGMA_URL, SYMBOLS_URL } from "../lib/constants";
import { icons } from "../lib/icons";

export default function Hero() {
	return (
		<div className="px-4 py-12 border-b border-b-(--border-color) text-center">
			<h4 className="mb-2 text-sm opacity-40">
				{icons.length} icons · free, open-source icons, ready to use
			</h4>
			<h2 className="mb-2 text-6xl md:text-[8vw] xl:text-8xl text-balance font-semibold">
				<span className="text-(--color-primary)">Astronomical</span> symbols
				<br className="hidden sm:block" /> for the modern web
			</h2>
			<p className="text-lg md:text-2xl text-pretty font-medium">
				A complete collection of SVG icons for{" "}
				<span className="text-(--color-primary)">planets</span>,{" "}
				<span className="text-(--color-primary)">zodiac signs</span>, and{" "}
				<span className="text-(--color-primary)">astrological aspects</span>.
			</p>
			<div className="mt-4 flex justify-center flex-col-reverse sm:flex-row gap-2">
				<a
					href={SYMBOLS_URL}
					className="p-2 flex items-center gap-2 rounded bg-white/4 hover:bg-white/8 active:bg-white/6"
					target="__blank"
				>
					Documentation
				</a>
				<a
					href={FIGMA_URL}
					className="p-2 flex items-center gap-2 rounded bg-white/4 hover:bg-white/8 active:bg-white/6"
					target="__blank"
				>
					Figma file
				</a>
			</div>
		</div>
	);
}
