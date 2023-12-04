import Image from 'next/image';
import React from 'react';
import logo from '../../public/assets/mylogo.png';

const Footer = () => {
	return (
		<footer className=" w-full border-t border-t-gray-300 h-24 relative">
			<div className="max-w-5xl flex justify-end items-center absolute z-20 right-6 top-6">
				<p className="text-slate-200/75 text-2xl">Made by </p>
				<span className="ml-2">
					<Image src={logo} height={50} width={50} alt="logo" />
				</span>
			</div>
			<div className="h-full bg-[#141414] opacity-50  z-10" />
		</footer>
	);
};

export default Footer;
