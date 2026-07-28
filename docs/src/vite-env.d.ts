/// <reference types="vite/client" />

import type { JSX } from "react";

declare module "react" {
	namespace JSX {
		interface IntrinsicElements {
			"va-code-block": {
				text?: string;
				language?: string;
				theme?: string;
			};
		}
	}
}
