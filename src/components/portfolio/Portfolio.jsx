import React from 'react';
import './Portfolio.css';
import IMG1 from '../../assests/Portfolio/Tindog.png';
import IMG2 from '../../assests/Portfolio/DrumKit.png';
import IMG3 from '../../assests/Portfolio/Dice.png';
import IMG4 from '../../assests/Portfolio/CSS Cards.png';
import IMG5 from '../../assests/Portfolio/SignIn.png';
import IMG6 from '../../assests/Portfolio/Codeverse.png';
import IMG7 from '../../assests/Portfolio/GERICHT.png';
import IMG8 from '../../assests/Portfolio/Article.png';
import IMG9 from '../../assests/Portfolio/BookStore.png'

const data = [
  {
    id: 1,
    image: IMG1, // Use the imported variable IMG1
    title: 'TinDog',
    techstack: 'Techstack : HTML, CSS',
    github: 'https://github.com/Khushi260/Tindog',
    demo: 'https://khushi260.github.io/Tindog/',
  },
  {
    id: 4,
    image: IMG4, // Use the imported variable IMG4
    title: 'CSS Cards',
    techstack: 'Techstack : HTML, CSS',
    github: 'https://github.com/Khushi260/CSS-Cards',
    demo: 'https://khushi260.github.io/CSS-Cards/',
  },
  {
    id: 2,
    image: IMG2, // Use the imported variable IMG2
    title: 'DrumKit',
    techstack: 'Techstack : HTML, CSS, Javascript',
    github: 'https://github.com/Khushi260/Drum-Kit',
    demo: 'https://khushi260.github.io/Drum-Kit/',
  },
  {
    id: 3,
    image: IMG3, // Use the imported variable IMG3
    title: 'Roll the Dice',
    techstack: 'Techstack : HTML, CSS, Javascript',
    github: 'https://github.com/Khushi260/Roll-the-Dice',
    demo: 'https://github.com/Khushi260/Roll-the-Dice',
  },
   {
    id: 6,
    image: IMG6, // Use the imported variable IMG6
    title: 'Codeverse',
    techstack: 'Techstack : HTML, CSS, Javascript',
    github: 'https://github.com/Khushi260/CodeVerse',
    demo: 'https://khushi260.github.io/CodeVerse/',
  }, 
 
  {
    id: 5,
    image: IMG5, // Use the imported variable IMG5
    title: 'SignIn Page',
    techstack: 'Techstack : HTML, CSS, Javascript',
    github: 'https://github.com/Khushi260/SignIn-Page',
    demo: 'https://khushi260.github.io/SignIn-Page/',
  },
 
  {
    id: 7,
    image: IMG7, // Use the imported variable IMG6
    title: 'GERITCH-Key to Fine Dining',
    techstack: 'Techstack : ReactJS, CSS, Figma',
    github: 'https://github.com/Khushi260/GERITCH-Key-to-Fine-Dining',
    demo: 'https://geritchrestaurant.netlify.app/',
  },
  {
    id: 8,
    image: IMG8, // Use the imported variable IMG5
    title: 'Article Summerizer',
    techstack: 'Techstack : ReactJS, Open AI',
    github: 'https://articlesummarize.netlify.app/',
    demo: 'https://github.com/Khushi260/Article-Summerizer',
  },
  {
    id: 9,
    image: IMG9, // Use the imported variable IMG5
    title: 'BookStore',
    techstack: 'Techstack : ReactJS, NodeJS, ExpressJs, MongoBD',
    github: 'https://github.com/Khushi260/BookStore',
    demo: 'https://github.com/Khushi260/BookStore',
  },
].reverse();

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="portfolio_container">
        {data.map(({ id, image, title, github, demo, techstack }) => {
          return (
            <article className="portfolio__item" key={id}>
              <div className="portfolio__item-img">
                <img src={image} alt={title} />
                <h3>{title}</h3>
                <h5>{techstack}</h5>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn demo" target="_blank" rel="noopener noreferrer">
                    Github
                  </a>
                  <a href={demo} className="btn btn-primary demo demobtn" target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
