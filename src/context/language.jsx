'use client';

import { createContext, useState } from 'react';

const LanguageContext = createContext({
	english: false,
	setLanguage: () => {},
});

export const LanguageContextProvider = (props) => {
	const [language, setLanguage] = useState(false);

	const changeLanguage = () => {
		setLanguage(!language);
	};

	return (
		<LanguageContext.Provider
			value={{
				english: language,
				setLanguage: changeLanguage,
			}}
		>
			{props.children}
		</LanguageContext.Provider>
	);
};

export default LanguageContext;
