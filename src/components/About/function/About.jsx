import React, { useEffect, useRef } from 'react';
import '../style/About.css';
import ibrahim from '../../../images/ibrahim.jpeg';


function About() {
  return (
    <div>
        <h1 className='about-me' id='about'>About ME</h1>
        <div className='about'>
            <div className='about-me-description'>
                <h3>
                Welcome to my portfolio! <br />
                I'm a skilled full-stack MERN <br />
                (MongoDB, Express.js, React.js, Node.js) developer. <br />
                With expertise in front-end and back-end development, <br />
                I create seamless web applications. <br />
                I excel in building responsive user interfaces with React.js <br />
                And developing robust server-side applications <br />
                With Node.js and Express.js. <br />
                Explore my portfolio to see examples of <br />
                My clean and efficient code. <br />
                Let's bring your ideas to life together!
                </h3>
            </div>
            <div className='about-image-ibrahim'>
                <img src={ibrahim} alt="ibrahim's-bimoje" />
            </div>
        </div>
    </div>
  );
}

export default About;