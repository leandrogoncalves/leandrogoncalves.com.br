import React from 'react';
import SocialLinks from './socialLinks.js';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default function Header() {
  return (
        <div id="fh5co-about" class="animate-box">
			<div class="container">
				<div class="row">
					<div class="col-md-8 col-md-offset-2 text-center fh5co-heading">
						<h2>Sobre</h2>
					</div>
				</div>
				<div class="row">
					<div class="col-md-6">
						<ul class="info">
							<li><span class="first-block">Nome:</span><span class="second-block">Leandro Gonçalves da Silva</span></li>
							<li><span class="first-block">Telefone:</span><span class="second-block">+55 11 98681-0345</span></li>
							<li><span class="first-block">Email:</span><span class="second-block">contato.leandrogoncalves@gmail.com</span></li>
							<li><span class="first-block">Website:</span><span class="second-block">www.leandrogoncalves.com.br</span></li>
						</ul>
					</div>
					<div class="col-md-6">
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