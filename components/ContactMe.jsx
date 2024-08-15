import React from 'react';
import Button from './Button';
import style from '../styles/Contact.module.scss';

const ContactMe = () => {
  return (
    <div className={style.contact} id='contactMe'>
      <h1>Let&apos;s Design Together</h1>
      <p>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus <br/>netus in. Aliquet donec morbi convallis pretium.</p>
      <div>
        <input type="email" placeholder="Enter Your email" />
        <Button className={style.Btn}>Contact Me</Button>
      </div>
    </div>
  );
}

export default ContactMe;

