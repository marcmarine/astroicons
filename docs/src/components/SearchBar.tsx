import { useRef } from "react";
import { useSearch } from "../hooks/useSearch";
import { scrollToToolbar } from "../lib/utils";

export default function SearchBar() {
	const inputRef = useRef<HTMLInputElement>(null);
	const { query, handleChange } = useSearch();
	const scrollToSearch = () => scrollToToolbar(inputRef.current);

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
