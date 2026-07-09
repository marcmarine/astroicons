import { useEffect, useState } from "react";

export default function ThemeToggle() {
	const [dark, setDark] = useState(
		() => localStorage.getItem("theme") === "dark",
	);

	useEffect(() => {
		document.documentElement.classList.toggle("dark", dark);
		localStorage.setItem("theme", dark ? "dark" : "light");
	}, [dark]);

	return (
		<button onClick={() => setDark(!dark)} className="p-2 text-sm" type="button">
			{dark ? "Light" : "Dark"}
		</button>
	);
}
