import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const Nav = () => {
	return (
		<motion.nav
			initial={{ opacity: 0, y: -50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 1, ease: 'circInOut' }}
			className="sticky top-0 w-full backdrop-blur-md bg-white/50 shadow z-99 mx-auto px-8 min-w-[320px]">
			<div className="flex justify-between items-center py-4 w-full max-w-7xl mx-auto">
				<div className="font-times text-lg md:text-xl lg:text-2xl italic">
					Ray Portfolio
				</div>
				<ul className="flex gap-4 md:gap-8 text-zinc-950">
					<li>
						<a
							href="#home"
							className="hover:text-gray-400 font-times text-sm md:text-lg">
							Home
						</a>
					</li>
					<li>
						<a
							href="#about"
							className="hover:text-gray-400 font-times text-sm md:text-lg ">
							About
						</a>
					</li>
					<li>
						<a
							href="#services"
							className="hover:text-gray-400 font-times text-sm md:text-lg">
							Services
						</a>
					</li>
					<li>
						<a
							href="#contact"
							className="hover:text-gray-400 font-times text-sm md:text-lg">
							Contact
						</a>
					</li>
				</ul>
			</div>
		</motion.nav>
	);
};

export default Nav;
