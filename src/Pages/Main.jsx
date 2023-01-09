import React from 'react';
import { motion } from 'framer-motion';
import Header from 'components/Header';
import Intro from 'components/Intro';
import Skills from 'components/Skills';
import Work from 'components/Work';
import Contact from 'components/Contact';
import Line from 'components/Line';
import Copyright from 'components/Copyright';
import Experience from 'components/Experience';

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
      <Experience />
      <Line />
      <Skills />
      <Line />
      <Work />
      <Line />
      <Contact />
      <Copyright />
    </motion.main>
  )
}

export default Main;