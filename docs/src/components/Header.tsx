import { REPO_URL } from "../lib/constants";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
	return (
		<header className="px-4 py-3 flex items-center justify-between border-b border-b-(--border-color)">
			<div className="flex items-center">
				<h1 className="text-xl font-bold">Astroicons</h1>
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
