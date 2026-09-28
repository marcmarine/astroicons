import type { IconName } from "@astroicons/react/icon";
import { ASPECTS, PLANETS, SIGNS } from "western-signs";
import { capitalize } from "./utils";

export interface Category {
	name: string;
	items: IconName[];
}

export interface IconData {
	name: IconName;
	display: string;
	category: string;
}

export const categories: Category[] = [
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
		name: "Aspects",
		items: [
			ASPECTS.CONJUNCTION,
			"semi-sextile",
			ASPECTS.SEXTILE,
			ASPECTS.SQUARE,
			ASPECTS.TRINE,
			ASPECTS.QUINCUNX,
			ASPECTS.OPPOSITION,
		],
	},
	{
		name: "Angles",
		items: [
			"ascendant",
			"descendant",
			"medium-coeli",
			"imum-coeli",
			"ascendant-alt",
			"descendant-alt",
		],
	},
	{
		name: "Hoses",
		items: [
			"house-1",
			"house-2",
			"house-3",
			"house-4",
			"house-5",
			"house-6",
			"house-7",
			"house-8",
			"house-9",
			"house-10",
			"house-11",
			"house-12",
		],
	},
	{
		name: "Earth and moon",
		items: ["earth", "north-node", "south-node", "lilith"],
	},
	{
		name: "Asteroids",
		items: ["chiron"],
	},
	{
		name: "Lots",
		items: ["fortune"],
	},
];

export const icons: IconData[] = categories.flatMap((cat) =>
	cat.items.map((name) => ({
		name,
		display: capitalize(name),
		category: cat.name,
	})),
);
