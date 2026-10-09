import { create } from "zustand";
import { useShallow } from "zustand/react/shallow";

export interface IconOptionValues {
	size: number;
	strokeWidth: number;
	/** `null` keeps `currentColor`, so icons follow the theme. */
	color: string | null;
	rounded: boolean;
}

interface IconOptions extends IconOptionValues {
	set: (updates: Partial<IconOptionValues>) => void;
}

export const useIconOptions = create<IconOptions>((set) => ({
	size: 32,
	strokeWidth: 1.5,
	color: null,
	rounded: false,
	set: (updates) => set(updates),
}));

export function useIconOptionValues(): IconOptionValues {
	return useIconOptions(
		useShallow(({ size, strokeWidth, color, rounded }) => ({
			size,
			strokeWidth,
			color,
			rounded,
		})),
	);
}

export function useIconProps() {
	const { size, strokeWidth, color, rounded } = useIconOptionValues();

	return {
		size,
		strokeWidth,
		color: color ?? undefined,
		strokeLinecap: rounded ? "round" : undefined,
		strokeLinejoin: rounded ? "round" : undefined,
	} as const;
}
