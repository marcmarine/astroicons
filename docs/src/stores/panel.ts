import { createRef } from "react";
import { create } from "zustand";
import { categories } from "../lib/icons";
import { scrollToToolbar } from "../lib/utils";

export const searchInputRef = createRef<HTMLInputElement>();

interface PanelState {
	query: string;
	showFilters: boolean;
	showCustomize: boolean;
	activeCategories: string[];
	selectedCategory: string | null;
	setQuery: (query: string) => void;
	focusSearch: () => void;
	scrollToSearch: () => void;
	toggleFilters: () => void;
	toggleCustomize: () => void;
	setActiveCategories: (categories: string[]) => void;
	setSelectedCategory: (cat: string | null) => void;
}

export const usePanel = create<PanelState>((set) => ({
	query: "",
	showFilters: true,
	showCustomize: false,
	activeCategories: categories.map((c) => c.name),
	selectedCategory: null,
	setQuery: (query) => set({ query }),
	focusSearch: () => searchInputRef.current?.focus(),
	scrollToSearch: () => scrollToToolbar(searchInputRef.current),
	toggleFilters: () => set((s) => ({ showFilters: !s.showFilters })),
	toggleCustomize: () => set((s) => ({ showCustomize: !s.showCustomize })),
	setActiveCategories: (activeCategories) => set({ activeCategories }),
	setSelectedCategory: (selectedCategory) => set({ selectedCategory }),
}));
