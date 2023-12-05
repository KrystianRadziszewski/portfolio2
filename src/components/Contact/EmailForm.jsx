'use client';

import React, { useRef, useState } from 'react';
// import emailjs from '@emailjs/browser';

const EmailForm = () => {
	const [data, setData] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});
	const form = useRef();

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(data);

		setData({ name: '', email: '', subject: '', message: '' });
	};

	return (
		<form ref={form} onSubmit={handleSubmit} className="flex flex-col gap-8 p-4">
			<input onChange={(e) => setData((prevData) => ({ ...prevData, name: e.target.value }))} name="name" type="text" placeholder="Imię" required maxLength="20" className=" input" value={data.name} />
			<input
				onChange={(e) => setData((prevData) => ({ ...prevData, email: e.target.value }))}
				name="email"
				type="email"
				placeholder="Email"
				required
				maxLength="20"
				className=" input"
				value={data.email}
			/>
			<input
				onChange={(e) => setData((prevData) => ({ ...prevData, subject: e.target.value }))}
				name="subject"
				type="text"
				placeholder="Temat"
				required
				maxLength="20"
				className=" input"
				value={data.subject}
			/>
			<textarea
				onChange={(e) => setData((prevData) => ({ ...prevData, message: e.target.value }))}
				name="message"
				type="text"
				placeholder="Wiadomość"
				rows="5"
				required
				className=" input"
				value={data.message}
			/>
			<button type="submit" className="bg-gradient w-full p-1 mt-4 text-gray-200 rounded-full">
				<span className=" block bg-[#444444] hover:bg-transparent transition rounded-full px-5 py-2 tracking-widest">Wyślij</span>
			</button>
		</form>
	);
};

export default EmailForm;
