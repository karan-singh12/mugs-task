import React from 'react';
import Button from './Button';
import style from '../styles/topSection.module.scss'

const TopSection = () => {
  return (
    <div className={`${style.topSection} container`} id='topSection'>
      <div className={style.content}>
        <h2>Hi I am </h2>
        <spain>Muhammad Umair </spain>
        <h1>UI & UX <br/><spain>Designer</spain></h1>
        <p className='mt-3'>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra</p>
        <Button>Hire Me</Button>
      </div>
      <div className={style.imageSection}>
        <img  src={'/topSection.svg'}/>
        <div className={style.orangeDiv}></div>
        <img className={style.icons} src={'/SocialMediaBlack.png'}/>
      </div>
    </div>
  )
}

export default TopSection
