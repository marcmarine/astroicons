import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@fontsource/eb-garamond/latin-600.css";
import "@fontsource/eb-garamond/latin-700.css";
import "@fontsource/figtree/latin-500.css";
import "@fontsource/figtree/latin-700.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
