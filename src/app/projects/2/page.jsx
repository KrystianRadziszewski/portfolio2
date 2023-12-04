import { CardBorder } from '@/components/Cards/CardBorder';
import CardProjectPage from '@/components/Cards/CardProjectPage';
import React from 'react';

const page = () => {
	return (
		<div className="CardPage">
			<CardBorder>
				<CardProjectPage projectID={2} />
			</CardBorder>
		</div>
	);
};

export default page;
