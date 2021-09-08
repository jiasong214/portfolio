import React from 'react';
import { useParams } from "react-router-dom";
import CasestudyIntro from '../Components/CasestudyIntro';
import CasestudyText from '../Components/CasestudyText';
import CasestudyImg from '../Components/CasestudyImg';
import CasestudyControl from '../Components/CasestudyControl';
import TransitionWrapper from '../Components/TransitionWrapper';
import works from '../casestudyData.js';
import '../style/casestudy.scss';

const Casestudy = () => {  
  const { id } = useParams();
  const data = works.filter((work) => work.id === id)[0];

  return (
    <section className="casestudy">
      <CasestudyIntro 
        title={data.title}
        tech={data.tech}
        demo={data.demo}
        github={data.github}
      />
      <div className="casestudy__text-container">
        {data.text.map((item, index) => (
          <CasestudyText 
            key={index}
            text={item} 
          />
        ))}
      </div>
      <div className="casestudy__img-container">
        {data.screenshot.map((item, index) => (
          <CasestudyImg 
            key={index}
            contents={item}
            background={"rgba(0,0,0,0.1)"} 
          />
        ))}
      </div>
      <CasestudyControl />
      <TransitionWrapper />
    </section>
  )
}

export default Casestudy;