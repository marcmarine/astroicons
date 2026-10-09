import { categories } from "../lib/icons";
import { usePanel } from "../stores/panel";
import CategoryFilter from "./CategroyFilter";
import Customize from "./Customize";

export default function OptionsPanel() {
	const showFilters = usePanel((s) => s.showFilters);
	const scrollToSearch = usePanel((s) => s.scrollToSearch);

	return (
		<aside
			inert={!showFilters || undefined}
			onPointerDown={scrollToSearch}
			onFocus={scrollToSearch}
			className={[
				"px-1 py-2 h-auto z-20 transition ease-in-out -translate-x-full opacity-0 blur-3xl not-md:hidden",
				showFilters && "translate-x-0 opacity-100 blur-none",
			]
				.filter(Boolean)
				.join(" ")}
		>
			<div className="sticky top-20 border border-(--border-color) rounded-lg bg-white/1">
				<Customize />
				<CategoryFilter categories={categories.map((c) => c.name)} />
			</div>
		</aside>
	);
}
