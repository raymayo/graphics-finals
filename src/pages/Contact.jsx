import React from 'react';

const Contact = () => {
	return (
		<div className="w-full bg-zinc-100 mx-auto flex flex-col items-center justify-center">
			<div className="w-full max-w-2/3 grid gap-20 py-20">
				<h1 className="font-times text-8xl">
					Get in <span className="italic">touch</span>
				</h1>
				<div className="flex flex-col gap-6">
					<h1 className="inter text-2xl font-semibold">
						LEAVE AN APPLICATION FOR AN APPOINTMENT
					</h1>
					<form className="flex gap-12">
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
				<div className="flex justify-between items-start">
					<div className="flex">
						<h1 className="font-times text-6xl max-w-[350px]">
							Design Portfolio
						</h1>
						<div className="flex flex-col">
							<h1 className="font-times font-semibold text-xl mb-2">
								Contact Info
							</h1>
							<p className="inter text-zinc-500 text-base font-normal">
								Phone: 123-456-7890
							</p>
							<p className="inter text-zinc-500 text-base font-normal">
								Email: johndoe@gmail.com
							</p>
							<p className="inter text-zinc-500 text-base font-normal">
								Address: 123 Main St, City, State, Zip
							</p>
						</div>
					</div>
					<h1 className="font-times text-xl self-end">
						© Design Portfolio 2025
					</h1>
				</div>
			</div>
		</div>
	);
};

export default Contact;
