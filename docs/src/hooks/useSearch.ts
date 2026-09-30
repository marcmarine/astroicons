import {
	type ChangeEvent,
	createContext,
	createElement,
	type PropsWithChildren,
	type RefObject,
	useCallback,
	useContext,
	useMemo,
	useRef,
	useState,
} from "react";
import { scrollToToolbar } from "../lib/utils";

interface SearchProviderProps {
	initialQuery?: string;
}

interface SearchContextValue {
	query: string;
	setQuery: (query: string) => void;
	handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
	inputRef: RefObject<HTMLInputElement | null>;
	scrollToSearch: () => void;
	focusSearch: () => void;
}

const SearchContext = createContext<SearchContextValue | null>(null);

export function SearchProvider({
	children,
	initialQuery = "",
}: PropsWithChildren<SearchProviderProps>) {
	const [query, setQuery] = useState(initialQuery);
	const inputRef = useRef<HTMLInputElement>(null);

	const scrollToSearch = useCallback(() => {
		scrollToToolbar(inputRef.current);
	}, []);

	const focusSearch = useCallback(() => {
		inputRef.current?.focus();
	}, []);

	const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
		setQuery(event.target.value);
	}, []);

	const value = useMemo(
		() => ({
			query,
			setQuery,
			handleChange,
			inputRef,
			scrollToSearch,
			focusSearch,
		}),
		[query, handleChange, scrollToSearch, focusSearch],
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
