import React from 'react';
import SocialLinks from './socialLinks.js';

export default function Header() {
  return (
    <header id="fh5co-header" class="fh5co-cover js-fullheight" role="banner"  data-stellar-background-ratio="0.5">
        <div class="overlay"></div>
        <div class="container">
            <div class="row">
                <div class="col-md-8 col-md-offset-2 text-center">
                    <div class="display-t js-fullheight">
                        <div class="display-tc js-fullheight animate-box" data-animate-effect="fadeIn">
                            <div class="profile-thumb"></div>
                            <h1><span>Leandro Gonçalves</span></h1>
                            <h3><span>Web and Mobile Developer </span></h3>
                            <SocialLinks />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
  );
}
