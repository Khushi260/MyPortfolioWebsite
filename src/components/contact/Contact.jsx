import React from 'react'
import './Contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gyl951k', 'template_0sosy4b', form.current, 'Y62sTOI1eejt8LN8w')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset();
  };


  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__conatiner">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>khushi26jha@gmail.com</h5>
            <a href="mailto:khushi26jha@gmail.com">Send a message</a>
          </article>
        </div>



        <form ref={form} onSubmit={form}>
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name="email"
            placeholder='Your Email' required />
          <textarea name="message" id="" cols="30" rows="10" placeholder='Your Message' required></textarea>
          <button className='btn btn-primary'>Submit</button>
        </form>
      </div>


    </section>
  )
}

export default contact