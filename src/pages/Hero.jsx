import React from 'react';

const Hero = () => {
	return (
		<div className=" w-full grid mx-auto place-items-center py-45 px-12 gap-2 bg-zinc-100 md:gap-6 lg:gap-6">
			<h1 className="font-times font-normal text-4xl text-center flex gap-2.5 mx-auto items-center justify-center md:text-7xl lg:text-8xl">
				I'm <span> </span>
				<span className="italic text-zinc-500"> Ray</span>{' '}
				<img
					className="rounded-full w-21 h-14 object-cover border-3 border-zinc-950 shadow-md md:w-25 lg:w-25 md:h-18 lg:h-18"
					src="https://i.pinimg.com/736x/7a/c6/79/7ac679ad113372f53fba6dca810ffd70.jpg"
					alt=""
				/>
				,
			</h1>
			<h1 className="font-times font-normal text-4xl text-center flex gap-2 mx-auto items-center justify-center md:text-7xl lg:text-8xl">
				a Graphic{' '}
				<img
					className="rounded-full w-21 h-14 object-cover border-3 border-zinc-950 shadow-md md:w-25 lg:w-25 md:h-18 lg:h-18 object-left"
					src="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt=""
				/>{' '}
				<span className="italic text-zinc-500">Designer</span>
			</h1>
			<h1 className="font-times font-normal text-4xl text-center flex gap-2 mx-auto items-center justify-center md:text-7xl lg:text-8xl">
				based in Manila{' '}
				<img
					className="rounded-full w-21 h-14 object-cover border-3 border-zinc-950 shadow-md md:w-25 lg:w-25 md:h-18 lg:h-18"
					src="https://images.unsplash.com/photo-1598258710957-db8614c2881e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt=""
				/>{' '}
			</h1>
			<p className="inter text-center text-sm max-w-[600px] w-full text-zinc-600 md:text-md lg:text-lg mt-6">
				I have 2 years of experience working on useful and mindful products
				together with startups and known brands.
			</p>
			<button className="font-times bg-zinc-950 text-zinc-100 px-6 py-3 rounded-full text-2xl shadow-2xl cursor-pointer mt-8">
				Let's Connect
			</button>
		</div>
	);
};

export default Hero;
