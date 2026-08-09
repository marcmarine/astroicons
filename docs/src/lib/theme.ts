export type Theme = "light" | "dark";

export const getStoredTheme = (): Theme | null => {
	try {
		const stored = localStorage.getItem("theme");
		return stored === "light" || stored === "dark" ? stored : null;
	} catch {
		return null;
	}
};

export const getPreferredTheme = (): Theme =>
	window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

export const getTheme = (): Theme => getStoredTheme() ?? getPreferredTheme();

export const applyTheme = (theme: Theme): void => {
	document.documentElement.classList.toggle("dark", theme === "dark");
};
