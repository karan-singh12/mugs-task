import React from 'react';
import style from '../styles/Services.module.scss';

const Services = () => {

  let staticCardData = [
    {
      img: 'uiux.svg',
      heading:'UI/UX',
      content: "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum"
    },
    {
      img: '/webDev.svg',
      heading:'Web Design ',
      content: "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum"
    },
    {
      img: '/AppDev.svg',
      heading:'App Design',
      content: "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum"
    },
    {
      img: '/graphic.svg',
      heading:'Graphic Design ',
      content: "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum"
    }
  ]
  
  function StaticCard({ img, content, heading, className }) {
    return (
      <div className={style.staticCard}>
        <img className='my-3 w-25 h-25' src={img} alt=""/>
        <h2 className='my-3'>{heading}</h2>
        <p >{content}</p>
      </div>
    )
  }
  
  return (
    <div className={style.services} id='services'>
      <h1>Services</h1>
      <p>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus <br/> netus in. Aliquet donec morbi convallis pretium</p>
      <div className={style.cards}>
        {
          staticCardData.map((contentObj, i) => {
            return (
              <div key={i} >
                <StaticCard img={contentObj.img} heading={contentObj.heading} content={contentObj.content} />
              </div>
            )
          })
        }
      </div>  
    </div>
  )
}

export default Services
