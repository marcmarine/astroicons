import { Router } from "wouter";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import IconGrid from "./components/IconGrid";
import SearchBar from "./components/SearchBar";
import StarField from "./components/StarField";
import { SearchProvider } from "./hooks/useSearch";

function App() {
	return (
		<Router>
			<SearchProvider>
				<Header />
				<Hero />
				<div className="min-h-screen">
					<SearchBar />
					<IconGrid />
				</div>
				<StarField />
				<Footer />
			</SearchProvider>
		</Router>
	);
}

export default App;
