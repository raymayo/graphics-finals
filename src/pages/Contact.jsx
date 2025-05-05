import React from 'react';

const Contact = () => {
	return (
		<div className="w-full bg-zinc-100 mx-auto flex flex-col items-center justify-center min-w-[320px]">
			<div className="w-full max-w-7xl grid gap-20 py-20 px-10">
				<h1 className="font-times text-7xl lg:text-8xl">
					Get in <span className="italic">touch</span>
				</h1>
				<div className="flex flex-col gap-6">
					<h1 className="inter text-lg lg:text-2xl font-semibold">
						LEAVE AN APPLICATION FOR AN APPOINTMENT
					</h1>
					<form className="flex flex-col lg:flex-row gap-12">
						<input
							className="font-times text-xl border-b w-full py-2 active: outline-0"
							type="text"
							placeholder="Name"
						/>
						<input
							className="font-times text-xl border-b w-full py-2 active: outline-0"
							type="email"
							placeholder="Email"
						/>
						<input
							className="font-times text-xl border-b w-full py-2 active: outline-0"
							type="tel"
							placeholder="Phone"
						/>
					</form>
					<button className="self-end font-times text-2xl px-6 py-3 border rounded-full w-fit cursor-pointer bg-zinc-900 text-zinc-100">
						Submit
					</button>
				</div>
				<div className="flex flex-col lg:flex-row  justify-between items-start gap-4">
					<div className="flex flex-col gap-4 lg:flex-row">
						<h1 className="font-times text-6xl lg:text-6xl max-w-[350px]">
							Design Portfolio
						</h1>
						<div className="flex flex-col">
							<h1 className="font-times font-semibold text-xl">Contact Info</h1>
							<p className="font-times text-zinc-700 text-lg font-normal">
								Phone: 123-456-7890
							</p>
							<p className="font-times text-zinc-700 text-lg font-normal">
								Email: johndoe@gmail.com
							</p>
							<p className="font-times text-zinc-700 text-lg font-normal">
								Address: 123 Main St, City, State, Zip
							</p>
						</div>
					</div>
					<h1 className="font-times text-xl lg:self-end">
						© Design Portfolio 2025
					</h1>
				</div>
			</div>
		</div>
	);
};

export default Contact;
