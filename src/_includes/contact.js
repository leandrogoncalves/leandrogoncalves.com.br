import React, {useState} from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Mail from '../_services/mail.js';
import ReCAPTCHA from "react-google-recaptcha";

const RECAPTCHA_PUBLIC = process.env.RECAPTCHA_PUBLIC;


export default function Contact() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');
	const recaptchaRef = React.createRef();

	function sendMail (e){
		e.preventDefault();

		if (!name) {
			alert("Por favor preencha o nome");
			return;
		}

		if (!email) {
			alert("Por favor preencha o email");
			return;
		}

		if (!subject) {
			alert("Por favor preencha o assunto");
			return;
		}

		if (!message) {
			alert("Por favor preencha a mensagem");
			return;
		}

		let mailOptions = {
		from: 'no-reply@leandrogoncalves.com.br',
		to: 'contato.leandrogoncalves@gmail.com',
		subject: subject,
		text: `
			Nome: ${name}
			email: ${email}
			Assunto: ${subject}
			Mensagem: ${message}
		`,
		html: `
			<strong> Nome:</strong> ${name}
			<strong> email:</strong> ${email}
			<strong> Assunto:</strong> ${subject}
			<strong> Mensagem:</strong> ${message}
		`
		};

		
		try{
			//SENDGRID
			let response = Mail.send(mailOptions);
			//OTHER
			// transporter.sendMail(mailOptions, function(error, info){
			//MAIL GUN
			// transporter.messages().send(mailOptions, function(error, info){
			if (response) {
				console.log(response);
			} else {
				console.log('Email enviado: ' + response);
			}
			// });

		}catch(error){
			console.error(error);
		}
		
		alert('Email enviado com sucesso');
	
	}
	

  	return (
    <div>
        <div id="fh5co-started" class="fh5co-bg-dark">
			<div class="overlay"></div>
			<div class="container">
				<div class="row animate-box">
					<div class="col-md-8 col-md-offset-2 text-center fh5co-heading">
						<h2>Entre em contato comigo!</h2>
						<p>Preencha o formulário abaixo e me envie uma mensagem que em breve entrarei em contato com você :)</p>
						<AnchorLink href='#fh5co-consult' class="btn btn-default btn-lg">Contato</AnchorLink>
					</div>
				</div>
			</div>
		</div>

		<div id="fh5co-consult">
			<div class="video fh5co-video" >
				<div class="overlay"></div>
			</div>
			<div class="choose animate-box">
				<h2>Contato</h2>
				<form action="#" onSubmit={sendMail}>
				<ReCAPTCHA
				ref={recaptchaRef}
				size="invisible"
				sitekey={RECAPTCHA_PUBLIC}
				/>
					<div class="row form-group">
						<div class="col-md-6">
							<input 
							value={name}
							onChange={e=>setName(e.target.value)}
							required
							type="text" id="fname" class="form-control" placeholder="Nome" />
						</div>
					</div>

					<div class="row form-group">
						<div class="col-md-12">
							<input 
							value={email}
							onChange={e=>setEmail(e.target.value)}
							required
							type="email" id="email" class="form-control" placeholder="E-mail" />
						</div>
					</div>

					<div class="row form-group">
						<div class="col-md-12">
							<input 
							value={subject}
							onChange={e=>setSubject(e.target.value)}
							required
							type="text" id="subject" class="form-control" placeholder="Assunto"/>
						</div>
					</div>

					<div class="row form-group">
						<div class="col-md-12">
							<textarea 
							value={message}
							onChange={e=>setMessage(e.target.value)}
							required
							name="message" id="message" cols="30" rows="10" class="form-control" placeholder="Como posso te ajudar?"></textarea>
						</div>
					</div>

					<div class="form-group">
						<input type="submit" value="Enviar" class="btn btn-primary" />
					</div>

				</form>	
			</div>
		</div>

		{/* <div id="map" class="fh5co-map"></div> */}

    </div>
  )
};