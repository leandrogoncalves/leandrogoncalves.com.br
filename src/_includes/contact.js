import React, {useState} from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Recaptcha from 'react-google-invisible-recaptcha';
import api from '../_services/api';
import I18n from '../_services/i18n';

const dotenv = require('dotenv');
dotenv.config();
const baseURL = process.env.BACKEND_URL || 'https://backend.leandrogoncalves.com.br';

export default function Contact() {
	const _i = I18n.getTranslater();

	let recaptchaInstance;
	
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');

	function clearForm() {
		setName('');
		setEmail('');
		setSubject('');
		setMessage('');
	}

	function submit(e){
		e.preventDefault();
		recaptchaInstance.execute()
		.then((token)=>{
			if (token) {
				sendMail();
			}
		});

	}

	function sendMail(){
		
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
			<strong> Nome:</strong> ${name} <br>
			<strong> email:</strong> ${email} <br>
			<strong> Assunto:</strong> ${subject} <br>
			<strong> Mensagem:</strong> ${message} <br>
		`
		};

		
		try{
			api.post(baseURL+'/email/send',mailOptions)
				.then((res)=>{
					console.log(res);
					clearForm();
					alert('Email enviado com sucesso');
				}).catch((err)=>{
					console.error(err);
					alert('Ocorreu um erro ao enviar o e-mail, por favor tente novamente mais tarde, obrigado!');
				})
		}catch(error){
			console.error(error);
		}
		
	
	}
	

  	return (
    <div>
        <div id="fh5co-started" className="fh5co-bg-dark">
			<div className="overlay"></div>
			<div className="container">
				<div className="row animate-box">
					<div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
						<h2>{_i.get("contact.h2")}</h2>
						<p>{_i.get("contact.p")}</p>
						<AnchorLink href='#fh5co-consult' className="btn btn-default btn-lg">{_i.get("contact.a")}</AnchorLink>
					</div>
				</div>
			</div>
		</div>

		<div id="fh5co-consult">
			<div className="video fh5co-video" >
				<div className="overlay"></div>
			</div>
			<div className="choose animate-box">
				<h3>Contato</h3>
				<form action="#" onSubmit={submit}>
					<div className="row form-group">
						<div className="col-md-6">
							<input 
							value={name}
							onChange={e=>setName(e.target.value)}
							required
							type="text" id="fname" className="form-control" placeholder={_i.get("contact.form.name")} />
						</div>
					</div>

					<div className="row form-group">
						<div className="col-md-12">
							<input 
							value={email}
							onChange={e=>setEmail(e.target.value)}
							required
							type="email" id="email" className="form-control" placeholder={_i.get("contact.form.email")} />
						</div>
					</div>

					<div className="row form-group">
						<div className="col-md-12">
							<input 
							value={subject}
							onChange={e=>setSubject(e.target.value)}
							required
							type="text" id="subject" className="form-control" placeholder={_i.get("contact.form.subject")}/>
						</div>
					</div>

					<div className="row form-group">
						<div className="col-md-12">
							<textarea 
							value={message}
							onChange={e=>setMessage(e.target.value)}
							required
							name="message" id="message" cols="30" rows="10" className="form-control" placeholder={_i.get("contact.form.message")}></textarea>
						</div>
					</div>

					<div className="form-group">
						<input type="submit" value={_i.get("contact.form.send")} className="btn btn-primary" />
					</div>

					<Recaptcha
                        ref={ ref => recaptchaInstance = ref }
                        sitekey="6LflAuwUAAAAABDqgMf1F2ezXDPoVYNQILDz0PdY"
                    />

				</form>	
			</div>
		</div>

		{/* <div id="map" className="fh5co-map"></div> */}

    </div>
  )
};