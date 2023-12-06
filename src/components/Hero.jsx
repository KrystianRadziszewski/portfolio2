'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import CVpl from '../../public/assets/cvpol2.png';
import CVen from '../../public/assets/cveng2.png';
import { TypeAnimation } from 'react-type-animation';
import { CardBorderHover } from './Cards/CardBorder';
import { motion } from 'framer-motion';
import LanguageContext from '@/context/language';

const Hero = () => {
	const ctx = useContext(LanguageContext);

	return (
		<section className="relative pt-[120px]">
			<div className="bg-purple-500 opacity-40 rounded-full h-[400px] w-[400px] blur-2xl absolute top-2 -left-28 -translate-x-1/2 -z-10" />
			<div className="flex flex-col items-center gap-8 mb-16">
				<motion.h1 initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="h1-text text-center leading-relaxed h-24">
					<span className="text-gradient">{ctx.english ? "Hi I'm" : 'Cześć, jestem'} </span>
					<br />
					<TypeAnimation sequence={['Krystian', 2000, 'Frontend Web Developer', 2000]} wrapper="span" speed={10} style={{ fontSize: '1em', display: 'inline-block' }} repeat={Infinity} />
				</motion.h1>
				<motion.p initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="description-text text-center lg:my-16">
					{!ctx.english
						? 'Koncetruje się na tworzeniu responsywnych stron/aplikacji oraz stron internetowych typu front-end. Podczas budowy korzystam z aktulanej dokumentacji dostępnej na oficjalnych stronach	wybranych freamworków oraz z wykorzystaniem technik pod względem optymalizacji stron w przeglądarkach.'
						: 'I specialize in creating responsive websites/applications and front-end web development. During the development process, I rely on the latest documentation available on official websites of selected frameworks and utilize techniques for optimizing website performance in browsers.'}
				</motion.p>
				<div className="flex gap-8 pt-20">
					<CardBorderHover>
						<Link className="" href="Krystian_Radziszewski-CV(pl).pdf" download>
							<Image src={CVpl} width={150} className="" alt="cvicon" />
						</Link>
					</CardBorderHover>
					<CardBorderHover>
						<Link className="" href="Krystian_Radziszewski-CV(en).pdf" download>
							<Image src={CVen} width={150} className="" alt="cvicon" />
						</Link>
					</CardBorderHover>
				</div>
			</div>
		</section>
	);
};

export default Hero;
