import React, { useState } from 'react'
import './Qualification.css'
import {PiGraduationCap} from 'react-icons/pi'
import {PiSuitcaseLight} from 'react-icons/pi'
const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) =>{
    setToggleState(index)
  }
  return (
    <section className='qualification section' id='qualification'>
      <h5>My personel journey</h5>
      <h2>Qualification</h2>
      


      <div className='qualification__container container'>
        <div className='qualification__tabs'>
          <div className={toggleState === 1 ? 'qualification__button qualification__active button--flex'
          : 'qualification__button button--flex'} onClick={()=>toggleTab(1)}>
            <PiGraduationCap className='icon'/>{"  "}Education
          </div>

          <div className={toggleState === 2 ? 'qualification__button qualification__active button--flex'
          : 'qualification__button button--flex'} onClick={()=>toggleTab(2)}>
            <PiSuitcaseLight className='icon'/>{"  "}Experience
          </div>
        </div>

          <div className='qualification__sections'>
            <div className={toggleState === 1 ? 'qualification__content qualification__content-active'
            : 'qualification__content'}>
              <div className='qualification__data'>
                <div>
                  <h3 className='qualification__title'>BTech ITE</h3>
                  <span className='qualification__subtitle'>Maharaja Agrasen Institute of Technology, Delhi</span>
                  <div className='qualification__calendar'>
                    <i className='uil uil-calendar-alt'></i> 2020-2024
                  </div>
                </div>
                <div>
                  <span className='qualification__rounder'></span>
                  <span className='qualification__line'></span>
                </div>
              </div>

              <div className='qualification__data'>
                <div></div>
                <div>
                  <span className='qualification__rounder'></span>
                  <span className='qualification__line'></span>
                </div>
                <div>
                  <h3 className='qualification__title'>Senior Secondary School</h3>
                  <span className='qualification__subtitle'>Govt. Co-ed Sarvodaya Vidyalaya, Delhi</span>
                  <div className='qualification__calendar'>
                    <i className='uil uil-calendar-alt'></i> 2019-2020
                  </div>
                </div>    
              </div>

              <div className='qualification__data'>
                <div>
                  <h3 className='qualification__title'>Secondary School</h3>
                  <span className='qualification__subtitle'>P.S.M Public Senior Secondary School, Delhi</span>
                  <div className='qualification__calendar'>
                    <i className='uil uil-calendar-alt'></i> 2016-2018
                  </div>
                </div>
                <div>
                  <span className='qualification__rounder'></span>
                  {/* <span className='qualification__line'></span> */}
                </div>
              </div>              
            </div>

            <div className={toggleState === 2 ? 'qualification__content qualification__content-active'
            : 'qualification__content'}>
              <div className='qualification__data'>
                <div>
                  <h3 className='qualification__title'>Software Developer Intern</h3>
                  <span className='qualification__subtitle'>Blaziken Technologies </span>
                  <div className='qualification__calendar'>
                    <i className='uil uil-calendar-alt'></i> September 2022 - Present
                  </div>
                </div>
                <div>
                  <span className='qualification__rounder'></span>
                  <span className='qualification__line'></span>
                </div>
              </div> 
              <div className='qualification__data'>
                <div></div>
                <div>
                  <span className='qualification__rounder'></span>
                  <span className='qualification__line'></span>
                </div>
                <div>
                  <h3 className='qualification__title'>Open Source Contributer</h3>
                  <span className='qualification__subtitle'>Hacktober Fest</span>
                  <div className='qualification__calendar'>
                    <i className='uil uil-calendar-alt'></i> 2021-2022
                  </div>
                </div>    
              </div>
              <div className='qualification__data'>
                <div>
                  <h3 className='qualification__title'> Mentor At Girl Code It</h3>
                  <span className='qualification__subtitle'>Maharaja Agrasen Institute of Technology, Delhi</span>
                  <div className='qualification__calendar'>
                    <i className='uil uil-calendar-alt'></i> 2020-2023
                  </div>
                </div>
                <div>
                  <span className='qualification__rounder'></span>
                  {/* <span className='qualification__line'></span> */}
                </div>
              </div>           
            </div>
          </div>
      </div>
    </section>

  )
}

export default Qualification