import { useEffect, useState } from "react";
import { applyTheme, getTheme, type Theme } from "../lib/theme";
import { capitalize } from "../lib/utils";

export default function ThemeToggle() {
	const [theme, setTheme] = useState<Theme>(getTheme);

	useEffect(() => {
		applyTheme(theme);
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
