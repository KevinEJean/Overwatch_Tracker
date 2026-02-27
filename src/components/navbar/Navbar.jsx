import { useState } from 'react';
import './Navbar.css'
import { href } from 'react-router-dom';

export default function Navbar({ setFrame, curFrame='' }) {

  var frameChecker = false;

  const changeFrame = (e) => {
    e.preventDefault()
    setFrame(String(e.target.textContent))
    e.target.style.color = 'white'
  }

  if (curFrame == '' && window.location.pathname == '/') {
    frameChecker = true; 
  }

  return (
    <div className='navbarRoot'>
      <a id='home_btn' href='/' style={{ color: frameChecker ? 'white' : '' }}>Home</a>
      <a href='' onClick={changeFrame}>Search</a>
      <a href='/profil' target='_blank'>Profil</a>
      <a href='https://github.com/KevinEJean/Portfolio' target='_blank'>Portfolio</a>
    </div>
  );
}