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
				<span className="text-(--color-primary)">zodiac signs</span>,{" "}
				<span className="text-(--color-primary)">astrological aspects</span> and
				more.
			</p>
			<div className="mt-8 flex justify-center flex-col-reverse sm:flex-row gap-2">
				<a
					href={SYMBOLS_URL}
					className="p-2 flex items-center gap-2 rounded bg-white/4 hover:bg-white/8 active:bg-white/6"
					target="__blank"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="size-6"
						viewBox="0 0 1024 1024"
						fill="none"
					>
						<title>GitHub logo</title>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
							transform="scale(64)"
							fill="currentColor"
						/>
					</svg>
					Documentation
				</a>
				<a
					href={FIGMA_URL}
					className="p-2 flex items-center gap-2 rounded bg-white/4 hover:bg-white/8 active:bg-white/6"
					target="__blank"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 200 300"
						className="size-6"
					>
						<title>Figma logo</title>
						<path
							d="M50 300c27.6 0 50-22.4 50-50v-50H50c-27.6 0-50 22.4-50 50s22.4 50 50 50z"
							fill="#0acf83"
						/>
						<path
							d="M0 150c0-27.6 22.4-50 50-50h50v100H50c-27.6 0-50-22.4-50-50z"
							fill="#a259ff"
						/>
						<path
							d="M0 50C0 22.4 22.4 0 50 0h50v100H50C22.4 100 0 77.6 0 50z"
							fill="#f24e1e"
						/>
						<path
							d="M100 0h50c27.6 0 50 22.4 50 50s-22.4 50-50 50h-50V0z"
							fill="#ff7262"
						/>
						<path
							d="M200 150c0 27.6-22.4 50-50 50s-50-22.4-50-50 22.4-50 50-50 50 22.4 50 50z"
							fill="#1abcfe"
						/>
					</svg>
					Get Figma file
				</a>
			</div>
		</div>
	);
}
