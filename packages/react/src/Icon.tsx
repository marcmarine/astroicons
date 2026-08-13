import { createElement, forwardRef } from "react";
import { icons, type IconName } from "./iconRegistry";
import type { IconProps } from "./types";

const Icon = forwardRef<SVGSVGElement, IconProps & { name: IconName }>(
	({ name, ...props }, ref) => {
		const Component = icons[name];

		if (!Component) {
			if (process.env.NODE_ENV !== "production") {
				console.warn(
					`[astroicons] Icon "${name}" not found in registry.`,
				);
			}
			return null;
		}

		return createElement(Component, { ...props, ref });
	},
);

Icon.displayName = "Icon";

export default Icon;
