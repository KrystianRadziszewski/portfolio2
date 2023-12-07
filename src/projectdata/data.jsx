import { useContext } from 'react';
import { img2, img3, img4, img5, img6, img7 } from '../../public/assets/projects';
import LanguageContext from '@/context/language';

export const navLinks = [
	{
		title: 'O mnie',
		title2: 'About me',
		path: '/#about',
	},
	{
		title: 'Projekty',
		title2: 'Projects',
		path: '/#projects',
	},
	{
		title: 'Kontakt',
		title2: 'Contact',
		path: '/#contact',
	},
];

export const projectData = [
	{
		id: 1,
		title: 'ASTAP',
		description: `Jest to strona statyczna która została zbudowana przy użyciu freamwork'u Next JS, stylizacja wykonana za pomocą biblioteki tailwind CSS. z Jest ona responsywna, zawiera dane kontaktowe i galerię zdjęć z wykonanych realizacji.`,
		descriptionENG:
			'It is a static website built using the Next.js framework, with styling done using the Tailwind CSS library. It is responsive and includes contact information and a photo gallery showcasing completed projects.',
		imgUrl: img2,
		liveUrl: 'https://tapicer-bialystok.pl',
		githubUrl: 'https://github.com/KrystianRadziszewski/ASTAP',
		technologies: ['JavaScript', 'Tailwind CSS', 'Next JS'],
		tag: ['My', 'All'],
	},
	{
		id: 2,
		title: 'Netflix clone',
		description: `Applikacja responsywna fullstack służąca do zalogowania się na stronie Netflix po przez podanie adresu email i hasła lub założenie nowego konta, wykorzystując next-auth. Po zalogowaniu się możliwość odtworzenia filmu pobranego z bazy danych, dodania  go do ulubionych. Dane użytkownika przechowywane są w MongoDB. Aby przetestować należy wprowadzić poprawną wartość email i hasło, nie jest to nigdzie dalej weryfikowane, ani sprawdzane.`,
		descriptionENG: `A responsive full-stack application used for logging into the Netflix website by providing an email address and password, or creating a new account, utilizing NextAuth. After logging in, users have the ability to play a movie retrieved from the database and add it to their favorites. User data is stored in MongoDB. To test the application, please enter a valid email and password, no further verification or checking is performed.`,
		imgUrl: img3,
		liveUrl: 'https://netflix-clone-mauve-ten.vercel.app',
		githubUrl: 'https://github.com/KrystianRadziszewski/Netflix-clone',
		technologies: ['TypeScript', 'Next JS', 'Tailwind CSS', 'MongoDB', 'Prisma', 'NextAuth'],
		tag: ['Courses', 'All'],
	},
	{
		id: 3,
		title: 'Driving Tests',
		description: `Applikacja klienta do uczenia się na kurs egzaminacyjny na prawo jazdy. Zostałem poproszony o kilka modyfikacji w kodzie i dodanie strony 404 oraz modalów.`,
		descriptionENG: `Client application for learning and preparing for the driving license exam. I have been asked to make a few modifications in the code and add a 404 page and modals.`,
		imgUrl: img4,
		liveUrl: 'https://e-testynaprawojazdy.pl',
		githubUrl: 'https://e-testynaprawojazdy.pl',
		technologies: ['TypeScript', 'Next JS', 'SASS/SCSS'],
		tag: ['My', 'All'],
	},
	{
		id: 4,
		title: 'Car Rent',
		description: `Aplikacja demo imitująca stronę wypożyczalni aut, która jest połączona z zewnętrznym API do pobierania pojazdów i wyświetlania ich w odpowiednio sformatownaych kartach. Dane są pobierane i przetwarzane w odpowiedni sposób, aby następnie można było je filtrować w pasku do wyszukiwania pojazdów ustawiając odpowiednie dla siebie opcje.`,
		descriptionENG: `A demo application simulating a car rental website, which is connected to an external API for retrieving vehicles and displaying them in appropriately formatted cards. Data is fetched and processed in a suitable manner, allowing them to be filtered using the search bar by configuring options according to one's preferences.`,
		imgUrl: img5,
		liveUrl: 'https://car-rent-jet.vercel.app',
		githubUrl: 'https://github.com/KrystianRadziszewski/Car-Rent',
		technologies: ['TypeScript', 'Next JS', 'Tailwind CSS', 'API'],
		tag: ['Courses', 'All'],
	},
	{
		id: 5,
		title: 'Share Ideas',
		description: `Aplikacja umożliwiająca zalogowanie się za pomocą konta Google i dodawanie swoich postów z własnymi pomysłami. Po zalogowaniu się masz możliwość dodawać, edytować i usuwać swoje posty. Pozsotali odwiedzający stronę będą widzieć posty które dodałeś na stronie głownej. Użytkownicy oraz posty są przechowywani w bazie danych MoongoDB.`,
		descriptionENG: `An application that allows users to log in using their Google account and add their own posts with their ideas. After logging in, you have the ability to add, edit, and delete your posts. Other visitors to the website will see the posts you have added on the homepage. Users and posts are stored in a MongoDB database.`,
		imgUrl: img6,
		liveUrl: 'https://project-ideas-three.vercel.app',
		githubUrl: 'https://github.com/KrystianRadziszewski/project_ideas',
		technologies: ['TypeScript', 'Next JS', 'Tailwind CSS', 'Next-auth', 'MoongoDB'],
		tag: ['Courses', 'All'],
	},
	{
		id: 6,
		title: 'Threads',
		description: `Aplikacja stylowana na popularnej aplikacji Threads. Dzięki aplikacji możesz dodawać posty ze swojego konta. Komentować posty pozostałych. Tworzyć organizacje do których możesz zapraszać pozostałych użytkowników i dzielić się tylko z nimi tym czym chcesz. Wszystko jest przechowywane w bazie danych "MongoDB", a uwierzytelnianie jest przeprowadzone za pomocą "Clerk".`,
		descriptionENG: `An application styled after the popular Threads app. With this application, you can create posts from your account, comment on other users' posts, and form groups to which you can invite other users and share specific content. Everything is stored in a "MongoDB" database, and authentication is carried out using "Clerk."`,
		imgUrl: img7,
		liveUrl: 'https://shared-app.vercel.app',
		githubUrl: 'https://github.com/KrystianRadziszewski/Shared-app',
		technologies: ['TypeScript', 'Next JS', 'Tailwind CSS', 'Shadncn', 'Clerk', 'MoongoDB', 'UploadThing'],
		tag: ['Courses', 'All'],
	},
];
