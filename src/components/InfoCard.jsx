import React from 'react';

const InfoCard = ({ icon, title, subtitle }) => {
	return (
		<div className=" rounded-full p-4 flex items-center gap-4 w-full max-w-[300px] bg-zinc-100/60 backdrop-blur-sm border border-zinc-950/5 shadow-sm text-zinc-800">
			{icon}
			<div className="text-zinc-900 flex flex-col items-start justify-between w-full">
				<h1 className="font-times text-lg font-semibold">{title}</h1>
				<p className="text-sm text-zinc-700 font-light">{subtitle}</p>
			</div>
		</div>
	);
};
export default InfoCard;
