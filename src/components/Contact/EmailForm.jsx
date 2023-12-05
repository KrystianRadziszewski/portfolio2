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
	const serviceID = process.env.YOUR_SERVICE_ID;
	const templateID = process.env.YOUR_TEMPLATE_ID;
	const publicKey = process.env.YOUR_PUBLIC_KEY;

	const handleSubmit = async (e) => {
		e.preventDefault();

		emailjs.sendForm(serviceID, templateID, form.current, publicKey).then(
			(result) => {
				console.log(result.text);
			},
			(error) => {
				console.log(error.text);
			}
		);

		// const response = await fetch('/api/send', {
		// 	method: 'POST',
		// 	header: {
		// 		'Content-Type': 'application/json',
		// 	},
		// 	body: JSON.stringify(data),
		// });

		// const resData = await response.json();
		// console.log(resData);

		// if (response.status === 200) {
		// 	console.log('Message send.');
		// 	setData({});
		// }
	};

	return (
		<form ref={form} onSubmit={handleSubmit} className="flex flex-col gap-8 p-4">
			<input onChange={(e) => setData.name(e.target.value)} name="name" type="text" placeholder="Imię" required maxLength="20" className=" input" />
			<input onChange={(e) => setData.email(e.target.value)} name="email" type="email" placeholder="Email" required maxLength="20" className=" input" />
			<input onChange={(e) => setData.subject(e.target.value)} name="subject" type="text" placeholder="Temat" required maxLength="20" className=" input" />
			<textarea onChange={(e) => setData.message(e.target.value)} name="message" type="text" placeholder="Wiadomość:" rows="5" required className=" input" />
			<button type="submit" className="bg-gradient w-full p-1 mt-4 text-gray-200 rounded-full">
				<span className=" block bg-[#444444] hover:bg-transparent transition rounded-full px-5 py-2 tracking-widest">Wyślij</span>
			</button>
		</form>
	);
};

export default EmailForm;
