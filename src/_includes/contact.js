import React, {useState} from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Mail from '../_services/mail.js';
import ReCAPTCHA from "react-google-recaptcha";


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
        <div id="fh5co-started" className="fh5co-bg-dark">
			<div className="overlay"></div>
			<div className="container">
				<div className="row animate-box">
					<div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
						<h2>Entre em contato comigo!</h2>
						<p>Preencha o formulário abaixo e me envie uma mensagem que em breve entrarei em contato com você :)</p>
						<AnchorLink href='#fh5co-consult' className="btn btn-default btn-lg">Contato</AnchorLink>
					</div>
				</div>
			</div>
		</div>

		<div id="fh5co-consult">
			<div className="video fh5co-video" >
				<div className="overlay"></div>
			</div>
			<div className="choose animate-box">
				<h2>Contato</h2>
				<form action="#" onSubmit={sendMail}>
				<ReCAPTCHA
				ref={recaptchaRef}
				size="invisible"
				sitekey="6LeX6usUAAAAACbK5ails8NbbZ55E69_hCeAdB2W"
				/>
					<div className="row form-group">
						<div className="col-md-6">
							<input 
							value={name}
							onChange={e=>setName(e.target.value)}
							required
							type="text" id="fname" className="form-control" placeholder="Nome" />
						</div>
					</div>

					<div className="row form-group">
						<div className="col-md-12">
							<input 
							value={email}
							onChange={e=>setEmail(e.target.value)}
							required
							type="email" id="email" className="form-control" placeholder="E-mail" />
						</div>
					</div>

					<div className="row form-group">
						<div className="col-md-12">
							<input 
							value={subject}
							onChange={e=>setSubject(e.target.value)}
							required
							type="text" id="subject" className="form-control" placeholder="Assunto"/>
						</div>
					</div>

					<div className="row form-group">
						<div className="col-md-12">
							<textarea 
							value={message}
							onChange={e=>setMessage(e.target.value)}
							required
							name="message" id="message" cols="30" rows="10" className="form-control" placeholder="Como posso te ajudar?"></textarea>
						</div>
					</div>

					<div className="form-group">
						<input type="submit" value="Enviar" className="btn btn-primary" />
					</div>

				</form>	
			</div>
		</div>

		{/* <div id="map" className="fh5co-map"></div> */}

    </div>
  )
};