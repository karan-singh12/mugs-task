import { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from '../styles/Testimonials.module.scss';

const Testimonial = ({ data = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    customPaging: function (i) {
      return (
        <div className={style.customDotWrapper}>
          <img
            src={i === activeIndex ? '/active.svg' : '/inactive.svg'}
            alt="dot"
            className={style.customPagination}
          />
        </div>
      );
    },
    dotsClass: "slick-dots",
    afterChange: (current) => setActiveIndex(current),
  };

  function CarouselCard({ img, name, position, content, className }) {
    return (
      <div className={`${style.carouselCard} ${className} p-4 d-flex justify-content-center flex-row`}>
        <div>
          <img src={img} alt="" className={style.image} />
        </div>
        <div className='mx-5 mt-5'>
          <p className='text-start'>
            <span style={{ color: '#FD6F00' }}>&quot;</span>{content}<span style={{ color: '#FD6F00' }}>&quot;</span>
          </p>
          <h4 className="mb-3 mt-3">{name}</h4>
          <p>{position}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={style.testimonials} id='testimonials'>
      <h1>Testimonials</h1>
      <p>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus <br/> netus in. Aliquet donec morbi convallis pretium</p>
      <div className={`${style.cards} m-auto`}>
        <Slider {...settings}>
          {data.map((contentObj, i) => (
            <div key={i} className="p-3 m-auto">
              <CarouselCard img={contentObj.img} name={contentObj.name} content={contentObj.content} position={contentObj.position} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
