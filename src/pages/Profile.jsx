import React from 'react';
import InfoCard from '../components/InfoCard.jsx';
import { Tangent, Palette, PanelsTopLeft, PenTool } from 'lucide-react';

const Profile = () => {
	return (
		<div className="profile w-full bg-white h-full pt-40 pb-20 inter">
			<main className="w-full max-w-2/3 mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 ">
				<div className="w-full flex items-center justify-center">
					<div className="relative border-[20px] border-zinc-900 min-w-[18.75rem] h-[25rem] ">
						<img
							className="absolute min-w-[18.75rem] h-[25rem] -top-18 left-10 object-cover shadow-lg"
							src="https://i.pinimg.com/736x/7a/c6/79/7ac679ad113372f53fba6dca810ffd70.jpg"
							alt=""
						/>
					</div>
					{/* <div className="w-[300px] h-[400px] bg-amber-400 -translate-x-60 -translate-y-15"></div> */}
				</div>
				<div className=" w-full flex flex-col gap-4">
					<h1 className="text-2xl font-semibold w-full max-w-4/6 text-wrap font-times">
						Full-Stack Web Developer & Computer Science Student
					</h1>
					<p className="text-lg text-zinc-700 text-pretty">
						I specialize in building responsive, scalable, and user-centric web
						applications using modern tools like React, Node.js, and MongoDB.
						With a strong foundation in computer science and a passion for
						solving real-world problems, I design systems that are not just
						functional—but intuitive, efficient, and maintainable. Whether it's
						streamlining school operations with QR-based systems or creating
						dynamic user interfaces, I approach every project with clarity,
						purpose, and technical precision.
					</p>
				</div>
			</main>
			<div className="flex flex-wrap w-full max-w-2/3 mx-auto py-20 ">
				<div className=" w-full flex gap-8">
					<InfoCard
						icon={<Tangent size={40} />}
						title="Graphic Design"
						subtitle="Transforming ideas into visuals that speak."
					/>
					<InfoCard
						icon={<Palette size={40} />}
						title="UI/UX Design"
						subtitle="Transforming ideas into visuals that speak."
					/>
					<InfoCard
						icon={<PanelsTopLeft size={40} />}
						title="Brand Identity"
						subtitle="Transforming ideas into visuals that speak."
					/>
					<InfoCard
						icon={<PenTool size={40} />}
						title="Web Design"
						subtitle="Transforming ideas into visuals that speak."
					/>
				</div>
			</div>
		</div>
	);
};

export default Profile;
