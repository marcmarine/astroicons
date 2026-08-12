import { createElement, forwardRef, type ReactElement } from "react";
import defaultAttributes from "./defaultAttributes";
import type { Icon, IconNode, IconNodeElement, IconProps } from "./types";

const toElement = (
	[tag, attrs, children]: IconNodeElement,
	key: number,
): ReactElement =>
	createElement(tag, { key, ...attrs }, children?.map(toElement));

const createIcon = (iconName: string, iconNode: IconNode): Icon => {
	const Component = forwardRef<SVGSVGElement, IconProps>(
		(
			{
				size = 24,
				strokeWidth = 1,
				color = "currentColor",
				className,
				...rest
			},
			ref,
		) =>
			createElement(
				"svg",
				{
					ref,
					...defaultAttributes,
					width: size,
					height: size,
					stroke: color,
					strokeWidth,
					className,
					...rest,
				},
				iconNode.map(toElement),
			),
	);

	Component.displayName = iconName;
	return Component;
};

export default createIcon;
