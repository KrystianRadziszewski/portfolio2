'use client';
import Image from 'next/image';
import React, { useState, useTransition } from 'react';
import avatar from '../../public/assets/myAvatar.png';
import ButtonChange from './UX/ButtonChange';

const TAB_DATA = [
	{
		title: 'Skills',
		id: 'skills',
		content: (
			<ul className="list-disc pl-2">
				<li>NextJS</li>
				<li>TypeScript</li>
				<li>TailwindCSS</li>
				<li>Node.js</li>
				<li>Express</li>
				<li>PostgreSQL</li>
				<li>MongoDB</li>
				<li>Mongoose</li>
			</ul>
		),
	},
	{
		title: 'Education',
		id: 'education',
		content: (
			<ul className="list-disc pl-2">
				<li>CSS – The Complete Guide</li>
				<li>JavaScript – The Complete Guide</li>
				<li>JavaScript – Jedyny Kurs, którego Potrzebujesz</li>
				<li>React – The Complete Guide</li>
				<li>Next.js & React – The Complete Guide</li>
			</ul>
		),
	},
];

const About = () => {
	const [tab, setTab] = useState('skills');
	const [isPending, startTransition] = useTransition();

	const handleTabChange = (id) => {
		startTransition(() => {
			setTab(id);
		});
	};

	return (
		<section id="about" className="text-white my-16 pt-[100px] relative ">
			<div className="absolute bg-purple-500 opacity-40 rounded-l-full h-[400px] w-[200px] md:w-[400px] lg:rounded-full blur-2xl  bottom-1 right-2 translate-x-[15%] lg:translate-x-3/4 translate-y-10 -z-10" />
			<div className=" flex flex-col mx-auto lg:grid lg:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16">
				<Image className="rounded-full bg-[#444444] p-2" src={avatar} width={500} height={500} alt="my avatar" />
				<div className="mt-4 md:mt-0 text-left flex flex-col h-full">
					<h2 className="h1-text mb-4">O mnie</h2>
					<p className="description-text">
						Jestem osobą która obecnie tworzy aplikacje typu demo zdobywając doświadczenie oraz jako freelancer realizuję zlecenia. Ciągle poszerzam swoją wiedzę i uczę się nowych technik tworzenia
						aplikacji oraz stron statycznych, dynamicznych, responsywnych i przyjaznych użytkownikowi. Korzystam z oficjalnych dokumentacji wybranych freamworków co pozwala sprawnie rozwiązywać
						bieżące problemy. Zamiłowanie do tworzenia mam od dziecka stąd też pomysł na budownaie w internecie. Uwielbiam nowe wyzwania, poznawanie nowych ludzi oraz pracę zespołową. Podróże są nie
						odłączną częścią mojego życia.
					</p>

					{/* Skills list */}
					<div className="flex flex-row mt-8">
						<ButtonChange selectTab={() => handleTabChange('skills')} active={tab === 'skills'}>
							Umiejętności
						</ButtonChange>
						<ButtonChange selectTab={() => handleTabChange('education')} active={tab === 'education'}>
							Kursy
						</ButtonChange>
					</div>
					<div className="mt-8 h-[200px]">{TAB_DATA.find((t) => t.id === tab).content}</div>
				</div>
			</div>
		</section>
	);
};

export default About;
