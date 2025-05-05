import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const Hero = () => {
	const container = {
		hidden: { opacity: 1 },
		show: {
			opacity: 1,
			transition: {
				duration: 1,
				ease: 'circOut',
				staggerChildren: 0.2, // delay between children
			},
		},
	};

	const item = {
		hidden: { opacity: 0, x: -150 },
		show: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.5,
				ease: 'circOut',
			},
		},
	};
	return (
		<motion.div
			variants={container}
			initial="hidden"
			animate="show"
			className=" w-full grid mx-auto place-items-center py-45 px-12 gap-1 bg-zinc-100 md:gap-6 lg:gap-6 min-w-[320px]">
			<motion.h1
				variants={item}
				className="font-times font-normal text-[2rem] text-center flex gap-2.5 mx-auto items-center justify-center sm:text-6xl md:text-7xl lg:text-8xl">
				I'm <span className="italic text-zinc-500 md:ml-2"> Ray</span>{' '}
				<img
					className="rounded-full w-14 h-10 object-cover border-3 border-zinc-950 shadow-md md:w-25 lg:w-25 md:h-18 lg:h-18"
					src="https://i.pinimg.com/736x/7a/c6/79/7ac679ad113372f53fba6dca810ffd70.jpg"
					alt=""
				/>
				,
			</motion.h1>
			<motion.h1
				variants={item}
				className="font-times font-normal text-[2rem] text-center flex gap-2 mx-auto items-center justify-center sm:text-6xl md:text-7xl lg:text-8xl">
				a Graphic{' '}
				<img
					className="rounded-full w-14 h-10 object-cover border-3 border-zinc-950 shadow-md md:w-25 lg:w-25 md:h-18 lg:h-18 object-left"
					src="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt=""
				/>{' '}
				<span className="italic text-zinc-500 ">Designer</span>
			</motion.h1>
			<motion.h1
				variants={item}
				className="font-times font-normal text-[2rem] text-center flex gap-2 mx-auto items-center justify-center sm:text-6xl md:text-7xl lg:text-8xl">
				based in <span className=" md:ml-2">Manila</span>{' '}
				<img
					className="rounded-full w-14 h-10 object-fit border-3 border-zinc-950 shadow-md md:w-25 lg:w-25 md:h-18 lg:h-18"
					src="https://images.unsplash.com/photo-1575225955002-0dbb52a6d1ff?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt=""
				/>{' '}
			</motion.h1>
			<motion.p
				initial={{ opacity: 0, y: 200 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, ease: 'circOut' }}
				className="inter text-center text-[10px] max-w-[400px] w-full text-zinc-600 sm:max-w-md sm:text-[.8rem] md:max-w-[600px] md:text-lg lg:text-lg mt-3 md:mt-6">
				I have 2 years of experience working on useful and mindful products
				together with startups and known brands.
			</motion.p>
			<motion.button
				initial={{ opacity: 0, y: 200 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.25, duration: 0.5, ease: 'circOut' }}
				className="font-times bg-zinc-950 text-zinc-100 px-6 py-3 rounded-full text-md sm:text-xl md:text-2xl shadow-2xl cursor-pointer mt-8">
				Let's Connect
			</motion.button>
		</motion.div>
	);
};

export default Hero;
