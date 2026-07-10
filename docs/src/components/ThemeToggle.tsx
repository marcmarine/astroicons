import { useEffect, useState } from "react";
import { capitalize } from "../lib/utils";

type Theme = "light" | "dark";

const getPreferredTheme = (): Theme =>
	window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

const getTheme = (): Theme =>
	(localStorage.getItem("theme") as Theme | null) ?? getPreferredTheme();

export default function ThemeToggle() {
	const [theme, setTheme] = useState<Theme>(getTheme);

	useEffect(() => {
		document.documentElement.classList.toggle("dark", theme === "dark");
		localStorage.setItem("theme", theme);
	}, [theme]);

	const nextTheme = theme === "dark" ? "light" : "dark";

	return (
		<button
			type="button"
			className="p-2 text-sm"
			onClick={() => setTheme(nextTheme)}
		>
			{capitalize(nextTheme)}
		</button>
	);
}
