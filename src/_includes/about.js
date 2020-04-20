import React from 'react';
import SocialLinks from './socialLinks.js';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default function Header() {
  return (
        <div id="fh5co-about" className="animate-box">
			<div className="container">
				<div className="row">
					<div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
						<h2>Sobre</h2>
					</div>
				</div>
				<div className="row">
					<div className="col-md-6">
						<ul className="info">
							<li><span className="first-block">Nome:</span><span className="second-block">Leandro Gonçalves da Silva</span></li>
							<li><span className="first-block">Telefone:</span><span className="second-block">+55 11 98681-0345</span></li>
							<li><span className="first-block">Email:</span><span className="second-block">contato.leandrogoncalves@gmail.com</span></li>
							<li><span className="first-block">Website:</span><span className="second-block">www.leandrogoncalves.com.br</span></li>
						</ul>
					</div>
					<div className="col-md-6">
						<h2>Olá!</h2>
						<p>Me chamo Leandro, estou há 8 anos no mercado atuando como desenvolvedor de sistemas web e mobile, comecei minha carreira em agências digitais programando sistemas para web. Trabalhei como Analista de Sistemas desenvolvendo aplicações na linguagem PHP, NodeJs e C# .NET e atualmente sou desenvolvedor FullStack na Fundação de Desenvolvimento da Educação de SP e nas horas livres sou um eterno estudante de tecnologia e aceito uns frelas :)  
							  &nbsp;<AnchorLink href='#fh5co-consult'>Entre em contato comigo</AnchorLink>
						</p>
					
						<SocialLinks />
					</div>
				</div>
			</div>
		</div>
     )
}