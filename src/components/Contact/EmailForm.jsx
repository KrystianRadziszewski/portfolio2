'use client';

import React, { useContext, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import LanguageContext from '@/context/language';

const EmailForm = () => {
	const ctx = useContext(LanguageContext);
	const [data, setData] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});
	const [sendMsg, setSendMsg] = useState(false);
	const form = useRef();

	const handleSubmit = (e) => {
		e.preventDefault();

		emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, process.env.NEXT_PUBLIC_PUBLIC_KEY).then(
			(result) => {
				console.log(result.text);
			},
			(error) => {
				console.log(error.text);
			}
		);

		setData({ name: '', email: '', subject: '', message: '' });
		setSendMsg(true);
		setTimeout(() => {
			setSendMsg(false);
		}, 10000);
	};

	return (
		<form ref={form} onSubmit={handleSubmit} className="flex flex-col gap-8 p-4">
			<input
				onChange={(e) => setData((prevData) => ({ ...prevData, name: e.target.value }))}
				name="name"
				type="text"
				placeholder={ctx.english ? 'Name' : 'Imię'}
				required
				maxLength="20"
				className=" input"
				value={data.name}
			/>
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
				placeholder={ctx.english ? 'Subject' : 'Temat'}
				required
				maxLength="20"
				className=" input"
				value={data.subject}
			/>
			<textarea
				onChange={(e) => setData((prevData) => ({ ...prevData, message: e.target.value }))}
				name="message"
				type="text"
				placeholder={ctx.english ? 'Message' : 'Wiadomość'}
				rows="5"
				required
				className=" input"
				value={data.message}
			/>
			<div className="p-2 flex-shrink-0 content text-green-500/60 font-medium">{sendMsg && <p>{ctx.english ? 'Message sent' : 'Wiadomość wysłana'}</p>}</div>
			<button type="submit" className="bg-gradient w-full p-1 mt-4 text-gray-200 rounded-full">
				<span className=" block bg-[#444444] hover:bg-transparent transition rounded-full px-5 py-2 tracking-widest">{ctx.english ? 'Send' : 'Wyślij'}</span>
			</button>
		</form>
	);
};

export default EmailForm;
