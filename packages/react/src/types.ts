import type {
	ForwardRefExoticComponent,
	RefAttributes,
	SVGAttributes,
} from "react";

export type IconNodeElement = [
	elementName: string,
	attrs: Record<string, string | number>,
	children?: IconNodeElement[],
];

export type IconNode = IconNodeElement[];

export type IconProps = SVGAttributes<SVGSVGElement> & {
	size?: string | number;
	strokeWidth?: string | number;
	color?: string;
};

export type Icon = ForwardRefExoticComponent<
	IconProps & RefAttributes<SVGSVGElement>
>;
