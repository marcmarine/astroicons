import { useEffect, useRef, useState } from "react";
import { useKeyboardShortcuts } from "../hooks/useKeyboardShortcuts";
import { searchInputRef, usePanel } from "../stores/panel";

export default function SearchBar() {
	const query = usePanel((s) => s.query);
	const setQuery = usePanel((s) => s.setQuery);
	const scrollToSearch = usePanel((s) => s.scrollToSearch);
	const focusSearch = usePanel((s) => s.focusSearch);
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
			<div className="sticky top-0 z-40">
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
					className="px-4 h-[4.5rem] w-full focus:outline-none border-b border-b-(--border-color) transition duration-800"
				/>
				<div
					className={`absolute inset-x-0 top-0 backdrop-blur-2xl h-[24vh] mask-[linear-gradient(#000,transparent_85%,transparent)] pointer-events-none -z-10 transition-opacity ${hasScrolledPastInput ? "opacity-100" : "opacity-0"}`}
				></div>
			</div>
		</>
	);
}
