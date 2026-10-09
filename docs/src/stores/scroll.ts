import { create } from "zustand";

export const useScrollY = create<{ scrollY: number }>(() => ({
	scrollY: 0,
}));
