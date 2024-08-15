import React, { useState, useRef } from 'react';
import style from '../styles/About.module.scss';

const About = () => {
  const [skills, setSkills] = useState({
    UX: 90,
    WebDesign: 80,
    AppDesign: 50,
    GraphicDesign: 70
  });

  const handleMouseDown = (skill) => (e) => {
    const progressRef = progressRefs.current[skill];
    
    const handleMouseMove = (e) => {
      const rect = progressRef.getBoundingClientRect();
      const newLevel = Math.min(Math.max((e.clientX - rect.left) / rect.width * 100, 0), 100);
      setSkills(prevSkills => ({ ...prevSkills, [skill]: newLevel }));
    };

    const handleMouseUp = () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  const progressRefs = useRef({});

  return (
    <div className={style.About} id='aboutMe'>
      <div className={style.AboutImage}>
        <img src={'/About.svg'} alt="About" />
        <div className={style.orangeDiv}></div>
      </div>
      <div className={style.AboutContent}>
        <h1>About Me</h1>
        <p>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra</p>
        
        <div className={style.skills}>
          {Object.keys(skills).map(skill => (
            <div key={skill} className={style.draggableSkillBar}>
              <span className={style.skillName}>{skill}</span>
              <div
                className={style.progressContainer}
                ref={el => progressRefs.current[skill] = el}
                onMouseDown={handleMouseDown(skill)}
              >
                <div className={style.progress} style={{ width: `${skills[skill]}%` }}>
                  <div className={style.progressEnd} style={{ right: `-${32 - (skills[skill] * 0.32)}px` }}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
