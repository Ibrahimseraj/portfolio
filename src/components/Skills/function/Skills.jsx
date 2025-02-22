import React from 'react';
import '../style/Skills.css';
import { SiHtml5 } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";



function Skills() {
  return (
    <div>
        <h1 className='skill' id='skills'>skills</h1>
        <div className='skills'>
            <div className='skills-section-one'>
            <div className='html'><div><SiHtml5 className='HTML-skills-icon' /> <p>HTML</p></div></div>
            <div className='css'><div><FaCss3Alt className='css-skills-icon' /><p>CSS</p></div></div>
            <div className='sass'><div><FaSass className='sass-skills-icon' /><p>Sass</p></div></div>
            <div className='javascript'><div><SiJavascript className='javascript-skills-icon' /><p>Javascript</p></div></div>
            <div className='react'><div><GrReactjs className='react-skills-icon' /><p>React</p></div></div>
        </div>
        <div className='skills-section-two'>
            <div className='nodejs'><div><FaNodeJs className='nodejs-skills-icon' /><p>Node Js</p></div></div>
            <div className='expressjs'><div><SiExpress className='expressjs-skills-icon' /><p>Express Js</p></div></div>
            <div className='mongodb'><div><SiMongodb className='mongodb-skills-icon' /><p>Mongo DB</p></div></div>
          </div>
        </div>
    </div>
  )
}

export default Skills;