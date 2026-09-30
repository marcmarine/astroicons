import { useEffect, useRef, useState } from "react";
import { useKeyboardShortcuts } from "../hooks/useKeyboardShortcuts";
import { useSearch } from "../hooks/useSearch";

export default function SearchBar() {
	const { query, handleChange, inputRef, scrollToSearch, focusSearch } =
		useSearch();
	const scrollMarkerRef = useRef<HTMLSpanElement>(null);
	const [hasScrolledPastInput, setHasScrolledPastInput] = useState(false);

	useEffect(() => {
		const marker = scrollMarkerRef.current;
		if (!marker) return;

		const observer = new IntersectionObserver(([entry]) => {
			setHasScrolledPastInput(
				!entry.isIntersecting && entry.boundingClientRect.top < 0,
			);
		});

		observer.observe(marker);
		return () => observer.disconnect();
	}, []);

	useKeyboardShortcuts([
		{
			key: "k",
			meta: true,
			action: focusSearch,
		},
	]);

	return (
		<>
			<span
				ref={scrollMarkerRef}
				aria-hidden="true"
				className="block h-px -mb-px"
			/>
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
				className={`sticky top-0 z-10 px-4 h-[4.5rem] w-full focus:outline-none border-b border-b-(--border-color) transition duration-800 ${hasScrolledPastInput ? "backdrop-blur-2xl" : ""}`}
			/>
		</>
	);
}
