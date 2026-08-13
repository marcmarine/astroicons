import { Sun, Moon } from '@astroicons/react'
import ThemeToggle from "./ThemeToggle";
import { REPO_URL } from "../lib/constants";

export default function Header() {
	return (
		<header className="px-4 py-3 flex items-center justify-between border-b border-b-(--border-color)">
			<div className="flex items-center">
			<div className="flex items-center gap-1">
				<div className="flex items-center">
					<Sun strokeWidth={1.8} size={20} stroke="cyan" />
					<Moon strokeWidth={1.8} size={20} className="-ml-2" stroke="gold" />
				</div>
				<h1 className="text-xl font-bold">Astroicons</h1>
			</div>
			</div>
			<div className="flex gap-2">
				<ThemeToggle />
				<a
					href={REPO_URL}
					className="p-2 text-sm hover:underline"
					target="_blank"
				>
					GitHub
				</a>
			</div>
		</header>
	);
}
