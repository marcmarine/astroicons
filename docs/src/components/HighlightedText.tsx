import type { ReactNode } from "react";
import { escapeRegExp } from "../lib/utils";

interface HighlightedTextProps {
	text: string;
	highlight: string;
	className?: string;
}

export function HighlightedText({
	text,
	highlight,
	className = "font-semibold",
}: HighlightedTextProps): React.JSX.Element {
	if (!highlight) return <>{text}</>;

	const matcher = new RegExp(escapeRegExp(highlight), "gi");
	const parts: ReactNode[] = [];
	let cursor = 0;

	for (const match of text.matchAll(matcher)) {
		const start = match.index;
		const end = start + match[0].length;

		if (start > cursor) parts.push(text.slice(cursor, start));
		parts.push(
			<mark key={start} className={className}>
				{match[0]}
			</mark>,
		);
		cursor = end;
	}

	if (cursor < text.length) parts.push(text.slice(cursor));
	return <>{parts}</>;
}
