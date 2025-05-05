import React from 'react';

const PortfolioCard = ({ image, title, type }) => {
	return (
		<div className="w-fit rounded-md">
			<img
				className="w-full h-full object-cover grayscale brightness-75 cursor-pointer hover:brightness-100 hover:grayscale-0 transition-all duration-300"
				src={image}
				alt={title}
			/>
			<div className="flex justify-between py-4">
				<div className="flex flex-col">
					<h1 className="font-times text-lg lg:text-2xl">{title}</h1>
					<p className="inter text-xs lg:text-sm font-light text-zinc-400">
						{type}
					</p>
				</div>
				{/* <button className="border rounded-full py-3 px-6 cursor-pointer font-times">
					View
				</button> */}
			</div>
		</div>
	);
};

export default PortfolioCard;
