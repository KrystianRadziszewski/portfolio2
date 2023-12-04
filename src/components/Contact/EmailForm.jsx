'use client';

import React from 'react';

const EmailForm = () => {
	const handleSubmit = async (e) => {
		e.preventDefault();
		const data = {
			name: e.target.name.value,
			email: e.target.email.value,
			subject: e.target.subject.value,
			message: e.target.message.value,
		};

		const JSONdata = JSON.stringify(data);
		const endpoint = '/api/send';

		const options = {
			method: 'POST',
			header: {
				'Content-Type': 'application/json',
			},
			body: JSONdata,
		};

		const response = await fetch(endpoint, options);
		const resData = await response.json();
		console.log(resData);

		if (response.status === 200) {
			console.log('Message send.');
		}
	};

	return (
		<form onSubmit={handleSubmit} className="flex flex-col gap-8 p-4">
			<input name="name" type="text" placeholder="Imię" required maxLength="20" className=" input" />
			<input name="email" type="email" placeholder="Email" required maxLength="20" className=" input" />
			<input name="subject" type="text" placeholder="Temat" required maxLength="20" className=" input" />
			<textarea name="message" type="text" placeholder="Wiadomość:" rows="5" required className=" input" />
			<button type="submit" className="bg-gradient w-full p-1 mt-4 text-gray-200 rounded-full">
				<span className=" block bg-[#444444] hover:bg-transparent transition rounded-full px-5 py-2 tracking-widest">Wyślij</span>
			</button>
		</form>
	);
};

export default EmailForm;
