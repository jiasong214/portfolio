import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { motion } from 'framer-motion';
import Header from 'Components/Header';
import ProjectIntro from '../Components/ProjectIntro';
import ProjectControl from '../Components/ProjectControl';
import works from '../projectData.js';
import '../style/project.scss';

const Project = () => {  
  const { id } = useParams();
  const [show, setShow] = useState(false);

  const data = works.filter((work) => work.id === id)[0];

  useEffect(() => {
    setTimeout(() => setShow(true), 300);
  },[]);

  return show && (
    <motion.section 
      className="project"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Header />
      <ProjectIntro data={data} />

      <div className="project__about text">
        <p>{data.text[0].para}</p>
      </div>

      <img
        className="project__introImg img"
        src={data.screenshot.pc[0]}
        alt="" 
      />

      <div className="project__purpose text">
        <h2>{data.text[1].title}</h2>
        {data.text[1].para.map((text, id) => <p key={id}>{text}</p>)}
      </div>

      <div className="project__stack">
        <div className="project__stack__icon">
          <div>
            {data.stackIcon.map((icon, id) => (
              <img key={id} className="img" src={icon} alt="" />
            ))}
          </div>
        </div>
        <div className="project__stack__text text">
          <h2>{data.text[2].title}</h2>
          {data.text[2].para.map((text, id) => <p key={id}>{text}</p>)}
        </div>
      </div>

      {data.screenshot.mobile.length !== 0 &&
        <div className="project__imgs --mobile">
          <img className="img" src={data.screenshot.mobile[0]} alt="" />
          <img className="img" src={data.screenshot.mobile[1]} alt="" />
          <img className="img" src={data.screenshot.mobile[2]} alt="" />
        </div>
      }
      <div className="project__imgs">
        <img className="img" src={data.screenshot.pc[1]} alt="" />
        <img className="img" src={data.screenshot.pc[2]} alt="" />
      </div>
      <ProjectControl />
    </motion.section>
  )
}

export default Project;