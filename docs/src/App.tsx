import { Router } from "wouter";
import Footer from "./components/Footer";
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
			<Footer />
		</Router>
	);
}

export default App;
