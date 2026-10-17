import { useKeyboardShortcuts } from "../hooks/useKeyboardShortcuts";
import { searchInputRef, usePanel } from "../stores/panel";

export default function SearchInput() {
	const query = usePanel((s) => s.query);
	const setQuery = usePanel((s) => s.setQuery);
	const scrollToSearch = usePanel((s) => s.scrollToSearch);
	const focusSearch = usePanel((s) => s.focusSearch);

	useKeyboardShortcuts([
		{
			key: "k",
			meta: true,
			action: focusSearch,
		},
	]);

	return (
		<input
			ref={searchInputRef}
			type="text"
			placeholder="Search..."
			value={query}
			onChange={(event) => {
				setQuery(event.target.value);
				scrollToSearch();
			}}
			onFocus={scrollToSearch}
			className="px-4 pt-3 h-14 w-full focus:outline-none"
		/>
	);
}
