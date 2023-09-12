import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assests/poto1.jpg'
import HeaderSocials from './HeaderSocials'

const header = () => {
  return (
    <header>
      <div className="conatiner header__container">
        <h5>Hello I'm</h5>
        <h1>Khushi Jha</h1>
        <h5 className="text-light">Software Developer | FullStack Developer</h5>
        <CTA />
        <HeaderSocials/>
        
        <div className="me">
          <img src={ME} alt=""></img>
        </div>

        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default header