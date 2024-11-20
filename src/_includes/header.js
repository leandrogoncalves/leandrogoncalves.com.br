import React from 'react';
import SocialLinks from './socialLinks.js';

export default function Header() {
  return (
    <header id="fh5co-header" className="fh5co-cover js-fullheight" role="banner"  data-stellar-background-ratio="0.5">
        <div className="overlay"></div>
        <div className="container">
            <div className="row">
                <div className="col-md-8 col-md-offset-2 text-center">
                    <div className="display-t js-fullheight">
                        <div className="display-tc js-fullheight animate-box" data-animate-effect="fadeIn">
                            <div className="profile-thumb"></div>
                            <h1><span>Leandro Gonçalves</span></h1>
                            <h3><span>Web and Mobile Developer </span></h3>
                            <SocialLinks />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id='flags'>
            <a href='?lang=pt-BR'>
                <img src='/assets/images/br.png' width={25} height={15} alt='pt-BR' />
            </a>
            <a href='?lang=en-US'>
                <img src='/assets/images/en.png' width={25} height={15} alt='en-US' />
            </a>
        </div>
    </header>
  );
}
