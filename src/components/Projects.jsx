'use client';

import React, { useContext, useEffect, useRef, useState } from 'react';
import CardProject from './Cards/CardProject';
import { projectData } from '@/projectdata/data';
import ProjectTag from './UX/ProjectTag';
import { motion, useInView } from 'framer-motion';
import LanguageContext from '@/context/language';

const Projects = () => {
	const [tag, setTag] = useState('All');
	const [revData, setRevData] = useState([]);
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	const ctx = useContext(LanguageContext);

	useEffect(() => {
		setRevData([...projectData].reverse());
	}, [projectData]);

	const handleTagChange = (newTag) => {
		setTag(newTag);
	};

	const cardVariant = {
		initial: { y: 50, opacity: 0 },
		animate: { y: 0, opacity: 1 },
	};

	const filteredProject = revData.filter((project) => project.tag.includes(tag));
	return (
		<section id="projects" className="relative py-[100px]">
			<div className="bg-purple-500 opacity-30 rounded-full h-[800px] w-[400px] md:h-[800px] lg:h-[1000px] md:w-[800px] lg:w-[1000px] blur-3xl absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10" />
			<h2 className="h1-text my-3">{ctx.english ? 'Projects' : 'Projekty'}</h2>
			<div className="text-white flex flex-row justify-center items-center gap-2 py-12">
				<ProjectTag onClick={handleTagChange} name="All" isSelected={tag === 'All'} title={ctx.english ? 'All' : 'Wszystkie'} />
				<ProjectTag onClick={handleTagChange} name="Courses" isSelected={tag === 'Courses'} title={ctx.english ? 'Courses' : 'Kursy'} />
				<ProjectTag onClick={handleTagChange} name="My" isSelected={tag === 'My'} title={ctx.english ? 'Own' : 'Własne'} />
			</div>
			<ul ref={ref} className="grid md:grid-cols-2 md:gap-10 lg:grid-cols-3 gap-8 lg:gap-12">
				{filteredProject.map((project, index) => (
					<motion.li key={index} variants={cardVariant} initial="initial" animate={isInView ? 'animate' : 'initial'} transition={{ duration: 0.2, delay: index * 0.3 }}>
						<CardProject key={project.id} title={project.title} imgUrl={project.imgUrl} url={project.id} />
					</motion.li>
				))}
			</ul>
		</section>
	);
};

export default Projects;
