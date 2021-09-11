import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { motion } from 'framer-motion';
import Header from 'Components/Header';
import CasestudyIntro from '../Components/CasestudyIntro';
import CasestudyText from '../Components/CasestudyText';
import CasestudyImg from '../Components/CasestudyImg';
import CasestudyControl from '../Components/CasestudyControl';
import works from '../casestudyData.js';

const Casestudy = () => {  
  const { id } = useParams();
  const [show, setShow] = useState(false);

  const data = works.filter((work) => work.id === id)[0];

  useEffect(() => {
    setTimeout(() => setShow(true), 300);
  },[]);

  return show && (
    <motion.section 
      className="casestudy"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <CasestudyIntro data={data} />
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
    </motion.section>
  )
}

export default Casestudy;