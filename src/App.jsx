import './App.css';
import Hero from './pages/Hero.jsx';
import Profile from './pages/Profile.jsx';
import Nav from './components/Nav.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Contact from './pages/Contact.jsx';
import './assets/fonts/fonts.css';
import { useState, useEffect } from 'react';

const imageUrls = [
	'/src/assets/images/daft_final.png',
	'/src/assets/images/kendrick final.png',
	'/src/assets/images/porsche final.png',
	'/src/assets/images/proj.png',
	'/src/assets/images/ribbon.svg',
	'/src/assets/images/rocky final.png',
	'/src/assets/images/valen 2.png',

	'https://i.pinimg.com/736x/7a/c6/79/7ac679ad113372f53fba6dca810ffd70.jpg',
];

function preloadImages(urls) {
	return Promise.all(
		urls.map((url) => {
			return new Promise((resolve, reject) => {
				const img = new Image();
				img.src = url;
				img.onload = () => resolve();
				img.onerror = () => reject();
			});
		})
	);
}

function App() {
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		preloadImages(imageUrls)
			.then(() => {
				setLoaded(true);
			})
			.catch((error) => {
				console.error('Error preloading images:', error);
			});
	}, []);

	if (!loaded) {
		return (
			<div className="flex items-center justify-center h-screen text-9xl inter text-zinc-900">
				<h1>¯\_(ツ)_/¯</h1>
			</div>
		);
	}

	return (
		<div className="w-screen min-h-screen flex flex-col items-center justify-start mx-auto">
			<Nav />
			<Hero />
			<div className="pattern w-full bg-white">
				<Profile />
			</div>
			<Portfolio />
			<Contact />
		</div>
	);
}

export default App;
