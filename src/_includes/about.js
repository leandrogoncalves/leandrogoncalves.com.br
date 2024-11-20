import React from 'react';
import SocialLinks from './socialLinks.js';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import I18n from '../_services/i18n';


export default function Header() {
	const _i = I18n.getTranslater();
	
  	return (
        <div id="fh5co-about" className="animate-box">
			<div className="container">
				<div className="row">
					<div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
						<h2>{_i.get("about.title")}</h2>
					</div>
				</div>
				<div className="row">
					<div className="col-md-6">
						<ul className="info">
							<li><span className="first-block">{_i.get("about.name")}:</span><span className="second-block">Leandro Gonçalves da Silva</span></li>
							{/* <li><span className="first-block">{_i.get("about.phone")}:</span><span className="second-block">+55 11 98681-0345</span></li> */}
							<li><span className="first-block">{_i.get("about.mail")}:</span><span className="second-block">contato.leandrogoncalves@gmail.com</span></li>
							<li><span className="first-block">Linkedin:</span><span className="second-block">
								<a href="https://www.linkedin.com/in/leandrogsilva/">
									linkedin.com/in/leandrogsilva
								</a>
							</span></li>
							<li><span className="first-block">Github:</span><span className="second-block">
								<a href="https://github.com/leandrogoncalves">
									github.com/leandrogoncalves
								</a>
							</span></li>
						</ul>
					</div>
					<div className="col-md-6">
						<h2>{_i.get("about.h2")}</h2>
						<p>{_i.get("about.text")}</p>
						<p>{_i.get("about.text1")}</p>
						<p>{_i.get("about.text2")}</p>
						<p>&nbsp;<AnchorLink href='#fh5co-consult'>
							  {_i.get("about.link")} </AnchorLink>
						</p>
					
						<SocialLinks />
					</div>
				</div>
			</div>
		</div>
     )
}