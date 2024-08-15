"use client"
import React, { useState } from 'react';
import style from '../styles/Navbar.module.scss';
import Button from './Button';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={style.navbar}>
      <div className={style.logo}>
        <img className={style.logoImg} src={'/logo.svg'} />
      </div>
      <ul className={`${style.navLinks} ${isOpen ? style.open : ''}`}>
        <li><a href="#topSection">Home</a></li>
        <li><a href="#aboutMe">About Me</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#projects">My Projects</a></li>
        <li><a href="#testimonials">Testimonial</a></li>
        <li><a href="#contactMe">Contact</a></li>
      </ul>
      <div className={style.burger} onClick={toggleMenu}>
        <div className={style.line}></div>
        <div className={style.line}></div>
        <div className={style.line}></div>
      </div>
      <Button>Download CV</Button>
    </nav>
  );
}

export default Navbar;

