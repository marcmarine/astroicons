import { Moon, Sun } from "@astroicons/react";
import { DOCUMENTATION_URL, FIGMA_URL, REPO_URL } from "../lib/constants";

export default function Footer() {
	return (
		<footer className="px-4 py-4 border-t border-t-(--border-color) flex justify-between text-xs sm:text-sm opacity-70">
			<p className="flex gap-2">
				<div className="flex items-center">
					<Sun strokeWidth={2.5} size={14} stroke="cyan" />
					<Moon strokeWidth={2.5} size={14} className="-ml-1.5" stroke="gold" />
					Astroicons.
				</div>
				<span>MIT License.</span>
			</p>
			<p className="flex gap-2">
				<a href={DOCUMENTATION_URL} target="_blank" className="hover:underline">
					Documentation
				</a>
				<span>·</span>
				<a href={FIGMA_URL} target="_blank" className="hover:underline">
					Figma
				</a>
				<span>·</span>
				<a href={REPO_URL} target="_blank" className="hover:underline">
					GitHub
				</a>
			</p>
		</footer>
	);
}
