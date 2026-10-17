import { createRef } from "react";
import { create } from "zustand";
import { categories } from "../lib/icons";
import { scrollToToolbar } from "../lib/utils";

export const searchInputRef = createRef<HTMLInputElement>();
export const toolbarRef = createRef<HTMLDivElement>();
export const toolbarMarkerRef = createRef<HTMLSpanElement>();

function scrollToIcon(icon: HTMLElement) {
	const toolbar = toolbarRef.current;
	const marker = toolbarMarkerRef.current;
	if (!toolbar || !marker) return;

	const toolbarTop = marker.getBoundingClientRect().top + window.scrollY;
	const toolbarHeight = toolbar.offsetHeight;
	const rect = icon.getBoundingClientRect();
	const iconCenter = rect.top + window.scrollY + rect.height / 2;
	const visibleCenter =
		toolbarHeight + (window.innerHeight - toolbarHeight) / 2;

	window.scrollTo({
		top: Math.max(toolbarTop, iconCenter - visibleCenter),
		behavior: "smooth",
	});
}

interface PanelState {
	query: string;
	showFilters: boolean;
	showCustomize: boolean;
	activeCategories: string[];
	selectedCategory: string | null;
	setQuery: (query: string) => void;
	focusSearch: () => void;
	scrollToSearch: () => void;
	scrollToIcon: (icon: HTMLElement) => void;
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
	scrollToIcon,
	toggleFilters: () => set((s) => ({ showFilters: !s.showFilters })),
	toggleCustomize: () => set((s) => ({ showCustomize: !s.showCustomize })),
	setActiveCategories: (activeCategories) => set({ activeCategories }),
	setSelectedCategory: (selectedCategory) => set({ selectedCategory }),
}));
