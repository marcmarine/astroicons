import { useEffect } from "react";

interface Shortcut {
	key: string;
	action: () => void;
	meta?: boolean;
	ctrl?: boolean;
	preventDefault?: boolean;
}

export function useKeyboardShortcuts(shortcuts: Shortcut[]) {
	useEffect(() => {
		const handler = (e: KeyboardEvent) => {
			const tag = (e.target as HTMLElement)?.tagName;
			if (
				tag === "INPUT" ||
				tag === "TEXTAREA" ||
				tag === "SELECT" ||
				tag === "BUTTON"
			) {
				return;
			}

			for (const shortcut of shortcuts) {
				const metaMatch = shortcut.meta ? e.metaKey : !e.metaKey;
				const ctrlMatch = shortcut.ctrl ? e.ctrlKey : !e.ctrlKey;

				if (
					e.key.toLowerCase() === shortcut.key.toLowerCase() &&
					metaMatch &&
					ctrlMatch
				) {
					if (shortcut.preventDefault !== false) {
						e.preventDefault();
					}
					shortcut.action();
					break;
				}
			}
		};

		window.addEventListener("keydown", handler);
		return () => window.removeEventListener("keydown", handler);
	}, [shortcuts]);
}
