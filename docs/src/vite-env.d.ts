/// <reference types="vite/client" />

export {};

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
