import LanguageContext from '@/context/language';
import React, { useContext } from 'react';

const ButtonLanguage = ({ children }) => {
	const ctx = useContext(LanguageContext);
	return (
		<div onClick={ctx.setLanguage} className="p-3 cursor-pointer hover:scale-105 rounded-full transition ease-in duration-500">
			{children}
		</div>
	);
};

export default ButtonLanguage;
