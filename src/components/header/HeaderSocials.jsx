import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {SiLeetcode} from 'react-icons/si'
import {BsInstagram} from 'react-icons/bs'

function HeaderSocials() {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/khushi270/' target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href='https://github.com/Khushi260' target="_blank" rel="noreferrer"><BsGithub/></a>
        <a href='https://leetcode.com/Khushi260/' target="_blank" rel="noreferrer"><SiLeetcode/></a>
        <a href='https://www.instagram.com/_khushi.jha/' target="_blank" rel="noreferrer"><BsInstagram/></a> 
    </div>
  )
}

export default HeaderSocials