'use client';

import Link from 'next/link';
import React, { useContext } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import EmailForm from './EmailForm';
import LanguageContext from '@/context/language';

const Contact = () => {
	const ctx = useContext(LanguageContext);
	return (
		<section id="contact" className="grid grid-cols-1 lg:grid-cols-5 my-12 py-24 gap-6 lg:gap-20 relative">
			<div className="bg-purple-500 opacity-40 rounded-full h-96 w-96 blur-2xl absolute bottom-10 -left-4 -translate-x-1/2 translate-y-1/2 -z-10" />
			<div className="card-bg p-4 h-[250px] lg:h-auto lg:col-span-2 flex flex-col z-10">
				<h2 className="text-white font-bold text-2xl my-2">{ctx.english ? 'Contact' : 'Kontakt'}</h2>
				<p className="description-text mb-4 max-w-md">{ctx.english ? 'Contact me or check using the links below' : 'Skontaktuj się ze mną lub sprawdź korzystając z poniższych linków'}</p>
				<div className="flex flex-row gap-6 mt-8 ">
					<Link href={`https://github.com/KrystianRadziszewski`}>
						<FaGithub className="text-white text-5xl hover:text-gray-300 transition-colors" />
					</Link>
					<Link href={`https://www.linkedin.com/in/krystian-radziszewski`}>
						<FaLinkedin className="text-white text-5xl hover:text-gray-300 transition-colors" />
					</Link>
				</div>
			</div>
			<div className="card-bg p-4 lg:col-span-3 lg:col-end-6">
				<EmailForm />
			</div>
		</section>
	);
};

export default Contact;
