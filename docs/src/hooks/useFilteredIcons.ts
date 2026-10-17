import { icons } from "../lib/icons";
import { usePanel } from "../stores/panel";

export function useFilteredIcons() {
	const query = usePanel((s) => s.query);
	const activeCategories = usePanel((s) => s.activeCategories);
	const searchTerm = query.trim();
	const normalizedQuery = searchTerm.toLowerCase();
	const filteredIcons = icons.filter(
		(icon) =>
			activeCategories.includes(icon.category) &&
			(!normalizedQuery ||
				[icon.name, icon.category].some((value) =>
					value.toLowerCase().includes(normalizedQuery),
				)),
	);

	return { searchTerm, filteredIcons };
}
