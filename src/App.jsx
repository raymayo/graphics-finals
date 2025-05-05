import './App.css';
import Hero from './pages/Hero.jsx';
import Profile from './pages/Profile.jsx';
import Nav from './components/Nav.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Contact from './pages/Contact.jsx';
import './assets/fonts/fonts.css';

function App() {
	return (
		<div className="w-screen min-h-screen flex flex-col items-center justify-start mx-auto">
			<Nav />
			<Hero />
			<Profile />
			<Portfolio />
			<Contact />
		</div>
	);
}

export default App;
