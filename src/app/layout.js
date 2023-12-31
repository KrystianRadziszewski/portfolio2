import Navbar from '@/components/Navbar/Navbar';
import { LanguageContextProvider } from '../context/language';
import './globals.css';
import { Inter } from 'next/font/google';
import Footer from '@/components/Footer';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Krystian Radziszewski - portfolio',
	description: 'Frontend developer, Krystian Radziszewski, portfolio',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<LanguageContextProvider>
				<body className={inter.className}>
					<Navbar />
					{children}
					<Footer />
					<Analytics />
				</body>
			</LanguageContextProvider>
		</html>
	);
}
