import React from 'react';
import { motion } from 'framer-motion';
import Header from 'Components/Header';
import Intro from '../Components/Intro';
import Work from '../Components/Work';
import Contact from '../Components/Contact';
import Line from '../Components/Line';
import Copyright from '../Components/copyright';

const Main = () => {
  return (
    <motion.main 
      className="main"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <Intro />
      <Line />
      <Work />
      <Line />
      <Contact />
      <Copyright />
    </motion.main>
  )
}

export default Main;