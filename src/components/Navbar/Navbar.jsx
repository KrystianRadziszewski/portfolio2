'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import NavLink from './NavLink';
import Image from 'next/image';
import logo from '../../../public/assets/mylogo.png';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Poland from '../../../public/assets/poland.svg';
import UK from '../../../public/assets/united-kingdom.svg';

const navLinks = [
	{
		title: 'O mnie',
		path: '/#about',
	},
	{
		title: 'Projekty',
		path: '/#projects',
	},
	{
		title: 'Kontakt',
		path: '/#contact',
	},
];

const Navbar = () => {
	const [mobileNav, setMobileNav] = useState(false);

	return (
		<nav className="fixed top-0 left-0 right-0 bg-[#171717] border-b-2 border-gray-500 z-20">
			<div className="container flex flex-wrap items-center justify-between mx-auto px-4 ">
				<Link href={`/`} className="">
					<Image src={logo} width={100} height={100} alt="logo" />
				</Link>

				{/* MOBILE NAV ICON*/}
				<div className="block md:hidden">
					{!mobileNav ? (
						<button onClick={() => setMobileNav(true)} className="flex items-center px-4 py-3 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
							<Bars3Icon className="h-6 w-6" />
						</button>
					) : (
						<button onClick={() => setMobileNav(false)} className="flex items-center px-4 py-3 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
							<XMarkIcon className="h-6 w-6" />
						</button>
					)}
				</div>

				{/* //DESKTOP NAV */}
				<div className="menu hidden md:block w-auto">
					<ul className="flex md:flex-row p-4 md:p-0 md:space-x-8">
						{navLinks.map((link, index) => (
							<li key={index}>
								<NavLink href={link.path} title={link.title} />
							</li>
						))}
						<li>
							<Image src={Poland} height={30} alt="lngBtn" />
						</li>
					</ul>
				</div>
			</div>
			{/* MOBILE NAV LINKS */}

			{mobileNav ? (
				<div onClick={() => setMobileNav(false)}>
					<ul className="flex flex-col gap-3 pt-2 pb-4 items-center">
						{navLinks.map((link, index) => (
							<li key={index}>
								<NavLink href={link.path} title={link.title} />
							</li>
						))}
						<li>
							<Image src={Poland} height={30} alt="lngBtn" />
						</li>
					</ul>
					<div className=" h-screen w-screen fixed z-[5] bg-black/80" />
				</div>
			) : null}
		</nav>
	);
};

export default Navbar;
