import React from 'react';
import '../style/projects.css';
import { SiHtml5 } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import memorygame from '../../../images/memorygame.png';
import ropasi from '../../../images/rock-paper-sissor.png';
import Flame from '../../../images/Flame.png';
import profileproject from '../../../images/profile-project.png';


function Projects() {
  return (
    <div>
        <h1 className='project' id='projects'>Projects</h1>
        <div className='projects'>
            <div className='memorygame'>
                <h1>Memory Game</h1>
                <img src={memorygame} alt='my-memorygame-project' />
                <div className='teck'>
                <SiHtml5 className='html1' />
                <FaCss3Alt className='css1' />
                <SiJavascript className='javascript1' />
                </div>
                <div className='memorygame-links'>
                    <div><h3 className='livesite'><a href='https://ibrahimseraj.github.io/memory-game/' target='_blank' rel="noreferrer">Live Site</a></h3></div>
                    <h3>|</h3>
                    <div><h3 className='projectsgithup'><a href='https://github.com/Ibrahimseraj/memory-game' target='_blank' rel="noreferrer">Githup repo</a></h3></div>
                </div>
                <div className='r-p-s'>
                  <h1>rock - paper - sissor</h1>
                  <img src={ropasi} alt='my-rock-paper-sissor-game-project' />
                  <div className='teck2'>
                    <SiHtml5 className='html2' />
                    <FaCss3Alt className='css2' />
                    <SiJavascript className='javascript2' />
                </div>
                  <div className='r-p-s-links'>
                    <div><h3 className='livesite'><a href='https://ibrahimseraj.github.io/rock-paper-sissor/' target='_blank' rel="noreferrer">Live Site</a></h3></div>
                    <h3>|</h3>
                    <div><h3 className='projectsgithup'><a href='https://github.com/Ibrahimseraj/rock-paper-sissor' target='_blank' rel="noreferrer">Githup repo</a></h3></div>
                  </div>
                </div>
                <div className='flame'>
                  <h1>Flame</h1>
                  <img src={Flame} alt='my-Flame-project' />
                  <div className='teck4'>
                    <SiMongodb className='flame-project-mongodb' />
                    <SiExpress className='flame-project-expressjs' />
                    <GrReactjs className='flame-project-react' />
                    <FaNodeJs className='flame-project-nodejs' />                 
                </div>
                  <div className='flame-links'>
                    <div><h3 className='livesite'><a href='https://flame-socail.vercel.app/' target='_blank' rel="noreferrer">Live Site</a></h3></div>
                    <h3>|</h3>
                    <div><h3 className='projectsgithup'><a href='https://github.com/Ibrahimseraj/flame-backend' target='_blank' rel="noreferrer">Githup repo</a></h3></div>
                  </div>
                </div>
                <div className='flame'>
                  <h1>PROFILE</h1>
                  <img src={profileproject} alt='my-Flame-project' />
                  <div className='teck4'>
                    <SiMongodb className='flame-project-mongodb' />
                    <SiExpress className='flame-project-expressjs' />
                    <GrReactjs className='flame-project-react' />
                    <FaNodeJs className='flame-project-nodejs' />                 
                </div>
                  <div className='flame-links'>
                    <div><h3 className='livesite'><a href='https://get-profile.vercel.app/' target='_blank' rel="noreferrer">Live Site</a></h3></div>
                    <h3>|</h3>
                    <div><h3 className='projectsgithup'><a href='https://github.com/Ibrahimseraj/profile-backend' target='_blank' rel="noreferrer">Githup repo</a></h3></div>
                  </div>
                </div>
            </div>
         </div>
    </div>
  )
}

export default Projects;