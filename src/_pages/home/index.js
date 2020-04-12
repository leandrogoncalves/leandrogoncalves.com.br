import React from '../../../node_modules/react';
import Header from '../../_includes/header.js';
import About from '../../_includes/about.js';
import Resume from '../../_includes/resume.js';
import Features from '../../_includes/features.js';
import Skills from '../../_includes/skills.js';
import Contact from '../../_includes/contact.js';

export default function Home() {
  return (
    <div>
      <Header />
      <About />
      <Resume />
      <Features />
      <Skills />
      <Contact />
    </div>
  );
}