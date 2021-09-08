import React from 'react';
import Intro from '../Components/Intro';
import Work from '../Components/Work';
import Contact from '../Components/Contact';
import Line from '../Components/Line';
import Copyright from '../Components/copyright';
import TransitionWrapper from '../Components/TransitionWrapper';
import '../style/main.scss'

const Main = () => {
  return (
    <main className="main">
      <div className="main-innerbox">
        <Intro />
        <Line />
        <Work />
        <Line />
        <Contact />
        <Copyright />
      </div>
      <TransitionWrapper />
    </main>
  )
}

export default Main;