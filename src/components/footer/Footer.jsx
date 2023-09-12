import React from 'react'
import './Footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'

const footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'></a>
      <ul className='permalinks'>
        <li><a href="#">HOME </a></li>
        <li><a href="#about">ABOUT </a></li>
        <li><a href="#experience">EXPERIENCE</a></li>
        <li><a href="#portfolio">PORTFOLIO</a></li>
        <li><a href="#contact">CONTACT</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/profile.php?id=100011015134238" target="_blank" rel="noreferrer"><FaFacebookF/></a>
        <a href="https://www.instagram.com/_khushi.jha/" target="_blank" rel="noreferrer"><AiOutlineInstagram/></a>
        <a href="https://twitter.com/Khushi1950" target="_blank" rel="noreferrer"><AiOutlineTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>Made by Khushi Jha</small>
      </div>
    </footer>
  )
}

export default footer