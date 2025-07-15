import React from 'react';

const Navbar = () => {
	return (
		<div className="flex justify-between border-b-2 border-b-gray-600 pb-2">
			<div className="logo text-blue-500 font-black text-4xl">MoodAI</div>
			<ul className="flex gap-16">
				<li className="cursor-pointer opacity-70 hover:opacity-100 transition-all duration-300">
					Home
				</li>
				<li className="cursor-pointer opacity-70 hover:opacity-100 transition-all duration-300">
					Pricing
				</li>
				<li className="cursor-pointer opacity-70 hover:opacity-100 transition-all duration-300">
					About
				</li>
				<li className="cursor-pointer opacity-70 hover:opacity-100 transition-all duration-300">
					Contact
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
