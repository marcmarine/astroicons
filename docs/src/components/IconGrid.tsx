import { icons } from "../lib/icons";
import IconCard from "./IconCard";

export default function IconGrid() {
	return (
		<div className="p-2 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-8 gap-2">
			{icons.map((icon) => (
				<IconCard key={icon.name} name={icon.name} />
			))}
		</div>
	);
}
