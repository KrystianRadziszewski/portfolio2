// import { EmailTemplate } from '../../../components/EmailTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
// const fromEmail = process.env.FROM_EMAIL;

export async function POST(req) {
	try {
		const body = await req.json();
		console.log('body: ', body);

		const { name, email, subject, message } = body;
		const data = await resend.emails.send({
			from: 'krystian-radziszewski-it@o2.pl',
			to: email,
			subject: subject,
			react: (
				<>
					<h1>{subject}</h1>
					<p>Hi meses</p>
					{/* <p>{message}</p> */}
				</>
			),
		});

		return NextResponse.json(data);
	} catch (error) {
		return NextResponse.json({ error });
	}
}
