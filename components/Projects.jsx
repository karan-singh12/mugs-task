import React, { useState } from 'react';
import style from '../styles/Projects.module.scss';
import Button from './Button';

const Projects = ({ data }) => {
  const [activeButton, setActiveButton] = useState('WebDesign');

  if (!data) {
    return <div>Error: No project data available.</div>;
  }

  return (
    <div className={style.projects} id='projects'>
      <h1>My Projects</h1>
      <p>Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus <br/> lectus. Phasellus consequat urna tellus</p>
      
      <div className={`${style.buttonContainer} py-3`}>
        {Object.keys(data).map(button => (
          <Button
            key={button}
            onClick={() => setActiveButton(button)}
            className={button === activeButton ? style.activeButton : style.inactiveButton}
          >
            {button}
          </Button>
        ))}
      </div>
      
      <div className={style.projectList}>
        {data[activeButton].map((project, index) => (
          <div key={index} >
            <img src={project.img} alt={project.name} className={style.projectImage} />
            <div className='py-5 text-start'>
              <span className={style.projectType}>{project.type}</span>
              <h3 className='mt-3'>{project.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
