import React from 'react';
import style from './../styles/Footer.module.scss';

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className='mb-3'>
        <img className={style.logoImg} src={'/logo.svg'} />
      </div>
      <div className='my-3 d-flex gap-3'>
        <a href="#topSection">Home</a>
        <a href="#aboutMe">About Me</a>
        <a href="#services">Services</a>
        <a href="#projects">My Projects</a>
        <a href="#testimonials">Testimonial</a>
        <a href="#contactMe">Contact</a>
      </div>
      <div className='my-3'>
        <img src={'/SocialMediaBlack.png'}/>
      </div>
      <div className={style.lastFooter}>
        <p>© 2023 <spain>Mumair</spain> All Rights Reserved , Inc.</p>
      </div>
    </div>
  )
}

export default Footer
