import React from 'react';
import './Testimonials.css';
import NL from '../../assests/Testimonials/NAMAN LAMBA.jpeg';
import AB from '../../assests/Testimonials/Abheesht Bhatt.jpg';
import PPS from '../../assests/Testimonials/Piyush Pratap Singh.jpg'
import AG from '../../assests/Testimonials/Aditya Gupta.jpg'
import SG from '../../assests/Testimonials/Shreya Gupta.jpg'
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Testimonials() {
  const testimonials = [
    {
      name: 'Naman Lamba',
      avatar: NL,
      review:
        "I've had the pleasure of knowing Khushi Jha for quite some time now, and it's an absolute delight to write this testimonial for her. Khushi's intelligence and work ethic are truly remarkable. From a young age, she has consistently excelled, earning numerous scholarships and recognitions along the way. I have no doubt that she will continue to achieve great things in the future and make her family incredibly proud. Khushi is a shining example of dedication and talent, and I'm grateful to have her as a friend.",
      position: 'Student @MAIT',
    },
    {
      name: 'Abheesht Bhatt',
      avatar: AB,
      review:
        'Khushi is not just a classmate of mine but also a dear friend. She inspires me to get better every day through her sheer hard work and passion towards coding. Her excellence in front-end development motivates me to get better every day. Her intelligence and work ethic are truly remarkable.  have no doubt that she will continue to achieve great things in the future and make her family incredibly proud. Khushi is a shining example of dedication and talent,',
      position: 'Student @MAIT',
    },
    {
      name: 'Piyush Pratap Singh',
      avatar: PPS,
      review:
        'I had the privilege of working alongside Khushi, and I can wholeheartedly attest to her exceptional qualities as a professional. She is not only highly knowledgeable but also consistently goes the extra mile to be helpful and collaborative. I have no doubt that she will continue to excel in her career. Her commitment to innovation and teamwork is truly commendable, and I look forward to witnessing her continued success.',
      position: 'Developer @ABC',
    },
    {
      name: 'Aditya Gupta',
      avatar: AG,
      review:
        'I have had the privilege of knowing Khushi both as a friend and a classmate for an extended period. Khushi is an exceptional front-end developer and I wholeheartedly endorse her as an invaluable addition to any team. She is a master of her craft, possessing a unique combination of creativity and technical prowess. She has an incredible eye for design, ensuring that every project she touches not only functions flawlessly but also looks visually stunning. Her attention to detail and dedication to creating user-friendly interfaces are second to none.',
      position: 'Student @MAIT',
    },
    {
      name: 'Shreya Gupta',
      avatar: SG,
      review:
        'I am delighted to provide a brief testimonial for my friend Khushi. She is a passionate learner with an exceptional talent for coding. Her consistency in her pursuit of knowledge is truly impressive. Her coding skills are top-notch, and she approaches every challenge with enthusiasm, inspiring those around her. Her willingness to collaborate and support her peers sets her apart as a team player. Khushi is a kind and empathetic individual who fosters inclusivity within our batch. Her positive attitude and readiness to help make her a pleasure to work with.',
      position: 'Student @MAIT',
    },
  ];

  // Slick carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // Change slide every 5 seconds
  };

  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <div className='container testimonials_container'>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index}>
              <article className='testimonial'>
                <div className='client__avatar'>
                  <img src={testimonial.avatar} alt={testimonial.name} />
                </div>
                <h5 className='client__name'>{testimonial.name}</h5>
                <h7 className='client__position'>{testimonial.position}</h7>
                <small className='client__review'>{testimonial.review}</small>
              </article>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Testimonials;
