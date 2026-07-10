import { ASPECTS, PLANETS, SIGNS, type Symbols } from "western-signs";
import { capitalize } from "./utils";

export interface Category {
	name: string;
	items: Symbols[];
}

export interface IconData {
	name: Symbols;
	display: string;
	category: string;
}

export const categories: Category[] = [
	{
		name: "Signs",
		items: [
			SIGNS.ARIES,
			SIGNS.TAURUS,
			SIGNS.GEMINI,
			SIGNS.CANCER,
			SIGNS.LEO,
			SIGNS.VIRGO,
			SIGNS.LIBRA,
			SIGNS.SCORPIO,
			SIGNS.SAGITTARIUS,
			SIGNS.CAPRICORN,
			SIGNS.AQUARIUS,
			SIGNS.PISCES,
		],
	},
	{
		name: "Planets",
		items: [
			PLANETS.SUN,
			PLANETS.MOON,
			PLANETS.MERCURY,
			PLANETS.VENUS,
			PLANETS.MARS,
			PLANETS.JUPITER,
			PLANETS.SATURN,
			PLANETS.URANUS,
			PLANETS.NEPTUNE,
			PLANETS.PLUTO,
		],
	},
	{
		name: "Aspects",
		items: [
			ASPECTS.CONJUNCTION,
			ASPECTS.SEMISEXTILE,
			ASPECTS.SEXTILE,
			ASPECTS.QUADRATURE,
			ASPECTS.TRIGONE,
			ASPECTS.QUINCUNX,
			ASPECTS.OPPOSITION,
		],
	},
];

export const icons: IconData[] = categories.flatMap((cat) =>
	cat.items.map((name) => ({
		name,
		display: capitalize(name),
		category: cat.name,
	})),
);
