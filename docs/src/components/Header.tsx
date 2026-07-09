import { REPO_URL } from "../lib/constants";

export default function Header() {
	return (
		<header className="px-4 py-3 flex items-center justify-between border-b border-b-(--border-color)">
			<div className="flex items-center">
				<h1 className="text-xl font-bold">Astroicons</h1>
			</div>
			<div className="flex gap-2">
				<a href={REPO_URL} className="p-2 text-sm hover:underline">
					GitHub
				</a>
			</div>
		</header>
	);
}
