import { Router } from "wouter";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import IconGrid from "./components/IconGrid";
import OptionsPanel from "./components/OptionsPanel";
import StarField from "./components/StarField";
import Toolbar from "./components/Toolbar";

function App() {
	return (
		<Router>
			<Header />
			<Hero />
			<div className="flex flex-col min-h-screen">
				<Toolbar />
				<div className="flex flex-1">
					<OptionsPanel />
					<IconGrid />
				</div>
			</div>
			<StarField />
			<Footer />
		</Router>
	);
}

export default App;
