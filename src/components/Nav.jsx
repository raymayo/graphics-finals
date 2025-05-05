import React from 'react';

const Nav = () => {
	return (
		<nav className="sticky top-0 w-full backdrop-blur-md bg-white/50 shadow z-99">
			<div className="flex justify-between items-center py-4 w-2/3 mx-auto">
				<div className="font-times text-2xl italic">Cole Sprouse</div>
				<ul className="flex gap-8 text-zinc-950">
					<li>
						<a href="#home" className="hover:text-gray-400 font-times text-lg">
							Home
						</a>
					</li>
					<li>
						<a href="#about" className="hover:text-gray-400 font-times text-lg">
							About
						</a>
					</li>
					<li>
						<a
							href="#services"
							className="hover:text-gray-400 font-times text-lg">
							Services
						</a>
					</li>
					<li>
						<a
							href="#contact"
							className="hover:text-gray-400 font-times text-lg">
							Contact
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Nav;
