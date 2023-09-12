import React from 'react'
import './About.css'
import ABOUTME from '../../assests/Meabout.jpg'
import { BsAward } from 'react-icons/bs'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__conatiner">

        <div className="about__me">
          <img src={ABOUTME}alt="aboutimage" className='about__me-img' />
        </div>


        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BsAward className='about__icon' />
              <h5>Experience</h5>
              <small>+1 Years</small>
            </article>


            <article className="about__card">
              <FiUsers className='about__icon' />
              <h5>Open Source</h5>
              <small>100+ Contributions</small>
            </article>


            <article className="about__card">
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>
          <p>
          I'm a final year B.Tech student studying Information Technology and Engineering. I'm passionate about building things and solving problems. I love staying updated with the latest technologies and taking on projects of all sizes. Explore my portfolio website to see what I've been creating!
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>



      </div>
    </section>
  )
}

export default about