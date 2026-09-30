import { useKeyboardShortcuts } from "../hooks/useKeyboardShortcuts";
import { useSearch } from "../hooks/useSearch";

export default function SearchBar() {
	const { query, handleChange, inputRef, scrollToSearch, focusSearch } =
		useSearch();

	useKeyboardShortcuts([
		{
			key: "k",
			meta: true,
			action: focusSearch,
		},
	]);

	return (
		<input
			ref={inputRef}
			type="text"
			placeholder="Search..."
			value={query}
			onChange={(event) => {
				handleChange(event);
				scrollToSearch();
			}}
			onFocus={scrollToSearch}
			className="sticky top-0 z-10 px-4 h-[4.5rem] w-full focus:outline-none border-b border-b-(--border-color) backdrop-blur-2xl transition duration-500"
		/>
	);
}
