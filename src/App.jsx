import React from 'react'
import './App.css';
import Header from './components/header/Header.jsx'
import About from './components/about/About.jsx'
import Experience from './components/experience/Experience.jsx'
import Portfolio from './components/portfolio/Portfolio.jsx'

import Contact from './components/contact/Contact.jsx'
import Footer from './components/footer/Footer.jsx'
import Testimonials from './components/testimonials/Testimonials';
import Navbar from './components/nav/Navbar';
import Qualification from './components/qualification/Qualification';
function App() {
  return (
    <div className="App">
      <Header />
      <Navbar/>
      <About />
      <Qualification/>
      <Experience />
      <Portfolio />
      <Testimonials/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
