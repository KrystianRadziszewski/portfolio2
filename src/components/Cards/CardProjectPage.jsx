'use client';

import LanguageContext from '@/context/language';
import { projectData } from '@/projectdata/data';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';

const CardProjectPage = ({ projectID }) => {
	const ctx = useContext(LanguageContext);
	const project = projectData.find((project) => project.id === projectID);

	return (
		<div className="max-w-3xl flex flex-col md:grid gap-4 md:grid-rows-2 relative">
			<div className="relative h-[150px] md:hidden md:row-start-1 md:row-end-2 w-full">
				<Image src={project.imgUrl} fill alt="project_img" />
			</div>
			<div className="relative hidden md:block md:row-start-1 md:row-end-2 w-full">
				<Image src={project.imgUrl} fill objectFit="cover" alt="project_img" />
			</div>

			<div className="md:row-start-2 md:row-end-3 flex flex-col gap-5 px-3 pb-10 border-4 border-gray-700/30 rounded-3xl ">
				<h2 className="text-2xl text-slate-100">{project.title}</h2>
				<p className="text-slate-300">{ctx.english ? project.descriptionENG : project.description}</p>
				<h3 className="text-slate-100 pt-9">{ctx.english ? 'Technologies:' : 'Technologie:'}</h3>
				<ul className="text-slate-300 list-disc">
					{project.technologies.map((el, index) => (
						<li key={index} className="ml-4">
							{el}
						</li>
					))}
				</ul>

				<div className="absolute bottom-4 right-5 hidden md:block">
					<div className="bg-gradient w-full p-1 mt-4 text-gray-200 rounded-full ">
						<Link href={project.githubUrl}>
							<span className=" block bg-[#444444] hover:bg-transparent transition rounded-full px-5 py-2 tracking-widest text-center">GITHUB</span>
						</Link>
					</div>
					<div className="bg-gradient w-full p-1 mt-4 text-gray-200 rounded-full ">
						<span className=" block bg-[#444444] hover:bg-transparent transition rounded-full px-5 py-2 tracking-widest text-center">
							<Link href={project.liveUrl}>{ctx.english ? 'VISIT' : 'ODWIEDŹ'}</Link>
						</span>
					</div>
				</div>
			</div>
			{/* small device */}
			<div className="md:hidden mx-7 mb-7">
				<div className="bg-gradient w-full p-1 mt-4 text-gray-200 rounded-full ">
					<Link href={project.githubUrl}>
						<span className=" block bg-[#444444] hover:bg-transparent transition rounded-full px-5 py-2 tracking-widest text-center">GITHUB</span>
					</Link>
				</div>
				<div className="bg-gradient w-full p-1 mt-4 text-gray-200 rounded-full ">
					<span className=" block bg-[#444444] hover:bg-transparent transition rounded-full px-5 py-2 tracking-widest text-center">
						<Link href={project.liveUrl}>{ctx.english ? 'VISIT' : 'ODWIEDŹ'}</Link>
					</span>
				</div>
			</div>
		</div>
	);
};

export default CardProjectPage;
