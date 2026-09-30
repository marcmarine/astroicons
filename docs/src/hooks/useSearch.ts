import {
	type ChangeEvent,
	createContext,
	createElement,
	type PropsWithChildren,
	useCallback,
	useContext,
	useMemo,
	useState,
} from "react";

interface SearchProviderProps {
	initialQuery?: string;
}

interface SearchContextValue {
	query: string;
	setQuery: (query: string) => void;
	handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchContext = createContext<SearchContextValue | null>(null);

export function SearchProvider({
	children,
	initialQuery = "",
}: PropsWithChildren<SearchProviderProps>) {
	const [query, setQuery] = useState(initialQuery);

	const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
		setQuery(event.target.value);
	}, []);

	const value = useMemo(
		() => ({ query, setQuery, handleChange }),
		[query, handleChange],
	);

	return createElement(SearchContext.Provider, { value }, children);
}

export function useSearch() {
	const context = useContext(SearchContext);

	if (!context) {
		throw new Error("useSearch must be used within a SearchProvider");
	}

	return context;
}
