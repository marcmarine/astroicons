import { Moon, Sun } from "@astroicons/react";
import { useSearch } from "../hooks/useSearch";
import { REPO_URL } from "../lib/constants";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
	const { focusSearch } = useSearch();

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
				<button
					type="button"
					onClick={focusSearch}
					className="px-1 py-0.5 pl-2 items-center gap-2 text-sm rounded border border-(--border-color) cursor-pointer relative z-10 hidden sm:flex"
				>
					Search
					<kbd className="px-1 py-0.5 font-mono flex items-center gap-1 text-xs border border-(--border-color) rounded">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="10"
							height="10"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<title>Command</title>
							<path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"></path>
						</svg>
						k
					</kbd>
				</button>
			</div>
		</header>
	);
}
