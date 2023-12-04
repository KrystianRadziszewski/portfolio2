import About from '@/components/About';
import Contact from '@/components/Contact/Contact';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';

export default function Home() {
	return (
		<main className="min-h-screen flex-col flex container mx-auto mt-28 px-12 py-4">
			<Hero />
			<About />
			<Projects />
			<Contact />
		</main>
	);
}
