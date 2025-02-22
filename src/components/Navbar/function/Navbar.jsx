import React from 'react';
import '../style/Navbar.css';


function Navbar() {
  return (
      <div className='nav' id='nav'>
        <div className='linkes'>
            <a href='#contact' className='click'>contact</a>
            <a href='#projects' className='click'>projects</a>
            <a href='#skills' className='click'>skills</a>
            <a href='#about' className='click'>about</a>
        </div>
        <h1>Ibrahim</h1>
    </div>
  )
}

export default Navbar;