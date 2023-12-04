import React, { Children } from 'react';

export const CardBorderHover = ({ children }) => {
	return (
		<div className="bg-gradient p-1 rounded-3xl hover:scale-105 transition ease-in duration-500">
			<div className="card-bg overflow-hidden">{children}</div>
		</div>
	);
};
export const CardBorder = ({ children }) => {
	return (
		<div className="bg-gradient p-1 rounded-3xl ">
			<div className="card-bg overflow-hidden">{children}</div>
		</div>
	);
};
