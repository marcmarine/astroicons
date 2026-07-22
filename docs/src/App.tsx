import { Router } from "wouter";
import Header from "./components/Header";
import Hero from "./components/Hero";
import IconGrid from "./components/IconGrid";
import StarField from "./components/StarField";

function App() {
	return (
		<Router>
			<Header />
			<Hero />
			<IconGrid />
			<StarField />
		</Router>
	);
}

export default App;
