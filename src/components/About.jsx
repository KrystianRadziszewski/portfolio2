'use client';
import Image from 'next/image';
import React, { useContext, useState, useTransition } from 'react';
import avatar from '../../public/assets/myAvatar.png';
import ButtonChange from './UX/ButtonChange';
import LanguageContext from '@/context/language';
import { TAB_DATA } from '@/projectdata/data';

const About = () => {
	const [tab, setTab] = useState('skills');
	const [isPending, startTransition] = useTransition();
	const ctx = useContext(LanguageContext);

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
					<h2 className="h1-text mb-4">{ctx.english ? 'About me' : 'O mnie'}</h2>
					<p className="description-text">
						{ctx.english
							? 'I am an individual currently developing demo applications to gain experience, and I also work as a freelancer to complete projects. I am constantly expanding my knowledge and learning new techniques for creating static, dynamic, responsive, and user-friendly applications and websites. I rely on the official documentation of selected frameworks, which allows me to efficiently solve ongoing issues. I have had a passion for creating things since childhood, which is why I decided to pursue building things on the internet. I love new challenges, meeting new people, and working in teams. Traveling is an integral part of my life.'
							: 'Jestem osobą która obecnie tworzy aplikacje typu demo zdobywając doświadczenie oraz jako freelancer realizuję zlecenia. Ciągle poszerzam swoją wiedzę i uczę się nowych technik tworzenia aplikacji oraz stron statycznych, dynamicznych, responsywnych i przyjaznych użytkownikowi. Korzystam z oficjalnych dokumentacji wybranych freamworków co pozwala sprawnie rozwiązywać		bieżące problemy. Zamiłowanie do tworzenia mam od dziecka stąd też pomysł na budownaie w internecie. Uwielbiam nowe wyzwania, poznawanie nowych ludzi oraz pracę zespołową. Podróże są nie odłączną częścią mojego życia.'}
					</p>

					{/* Skills list */}
					<div className="flex flex-row mt-8">
						<ButtonChange selectTab={() => handleTabChange('skills')} active={tab === 'skills'}>
							{ctx.english ? 'Skills' : 'Umiejętności'}
						</ButtonChange>
						<ButtonChange selectTab={() => handleTabChange('education')} active={tab === 'education'}>
							{ctx.english ? 'Courses' : 'Kursy'}
						</ButtonChange>
					</div>
					<div className="mt-8 h-[200px]">{TAB_DATA.find((t) => t.id === tab).content}</div>
				</div>
			</div>
		</section>
	);
};

export default About;
