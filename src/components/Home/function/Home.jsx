import React, { useEffect, useRef } from 'react';
import '../style/Home.css';
import hello from '../../../images/hello.jfif';



function Home() {
  return (
    <div className='home'>
        <div className='home-info'>
            <h4>Hey there, I'm</h4>
            <h1>Ibrahim Seraj</h1>
            <h3>Full Stack Developer</h3>
        </div>
        <div className='home-img-con'>
            <img src={hello} alt='my-vr-emoje' className='ibrahim-hello-img' />
        </div>
    </div>
  )
}

export default Home;