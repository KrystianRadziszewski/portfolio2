'use client';

import React, { useContext } from 'react';
import Image from 'next/image';
import { CardBorderHover } from './CardBorder';
import Link from 'next/link';
import LanguageContext from '@/context/language';

const CardProject = ({ imgUrl, title, url }) => {
	const ctx = useContext(LanguageContext);

	return (
		<div className="rounded-3xl overflow-hidden border-4 border-gray-600/40">
			<div className="group mx-auto relative h-auto w-full hover:bg-[#424242] ">
				<div className={`relative  group-hover:opacity-10 transition h-[150px] lg:h-[200px] w-full overflow-hidden`}>
					<Image src={imgUrl} alt="project_img" fill />
				</div>
				<div className="hidden w-1/2 p-3 text-center group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
					<CardBorderHover>
						<Link href={`/projects/${url}`}>
							<span className="text-white text-xl">{ctx.english ? 'Details' : 'Szczegóły'}</span>
						</Link>
					</CardBorderHover>
				</div>
			</div>
			<div className="text-white py-6 px-4 bg-[#1f1f1f]">
				<h5 className="text-xl font-semibold">{title}</h5>
			</div>
		</div>
	);
};

export default CardProject;
