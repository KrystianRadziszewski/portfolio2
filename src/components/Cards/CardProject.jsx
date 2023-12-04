'use client';

import React from 'react';
import Image from 'next/image';
import { CardBorderHover } from './CardBorder';
import Link from 'next/link';

const CardProject = ({ imgUrl, title, url }) => {
	return (
		<div className="rounded-3xl overflow-hidden border-4 border-gray-600/40">
			{/* <div className="group mx-auto relative flex items-center justify-center h-auto w-full hover:bg-[#424242] "> */}
			<div className="group mx-auto relative h-auto w-full hover:bg-[#424242] ">
				<div className={`relative group-hover:opacity-10 transition h-4/6 w-full overflow-hidden`}>
					<Image src={imgUrl} alt="project_img" width={500} height={500} />
				</div>
				<div className="hidden w-1/2 p-3 text-center group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
					<CardBorderHover>
						<Link href={`/projects/${url}`}>
							<span className="text-white text-xl">Szczegóły</span>
						</Link>
					</CardBorderHover>

					{/* <p className=" btn bg-gradient text-center transition-colors">
						<span className="bg-[#444444] p-2 rounded-3xl w-full">Szczegóły</span>
					</p> */}
				</div>
			</div>
			<div className="text-white py-6 px-4 bg-[#1f1f1f]">
				<h5 className="text-xl font-semibold">{title}</h5>
			</div>
		</div>
	);
};

export default CardProject;
