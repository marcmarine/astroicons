import { Router } from "wouter";
import Header from "./components/Header";
import Hero from "./components/Hero";
import IconGrid from "./components/IconGrid";

function App() {
	return (
		<Router>
			<div className="h-screen overflow-y-auto overflow-x-hidden">
				<Header />
				<Hero />
				<IconGrid />
				<div className="star-field"></div>
			</div>
		</Router>
	);
}

export default App;
