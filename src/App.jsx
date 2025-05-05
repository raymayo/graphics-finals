import './App.css';
import Hero from './pages/Hero.jsx';
import Profile from './pages/Profile.jsx';
import Nav from './components/Nav.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Contact from './pages/Contact.jsx';
import './assets/fonts/fonts.css';
import { useState, useEffect } from 'react';

const imageUrls = [
	'/images/daft_final.png',
	'/images/kendrick_final.png',
	'/images/porsche_final.png',
	'/images/proj.png',
	'/images/ribbon.svg',
	'/images/rocky_final.png',
	'/images/valen_2.png',

	'https://i.pinimg.com/736x/7a/c6/79/7ac679ad113372f53fba6dca810ffd70.jpg',
	'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	'https://images.unsplash.com/photo-1575225955002-0dbb52a6d1ff?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
			<div className="flex items-center justify-center h-screen text-9xl inter">
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
