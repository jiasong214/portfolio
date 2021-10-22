import React from 'react';
import '../style/intro.scss';

const Intro = () => {
  return (
    <section className="intro">
      <div className="intro__innerbox">
        <h1 className="intro__title">Hi there, I'm Jia. <br/> Junior frontend developer</h1>
        <p className="intro__text">
          I am a self-taught developer with a passion for building responsive web apps, and a strong focus on UI/UX.<br></br>I am seeking my first developer role whilst continuing to learn and grow.
        </p>
      </div>
    </section>
  )
}

export default React.memo(Intro);