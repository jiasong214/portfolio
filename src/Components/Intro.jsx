import React, {useEffect, useState} from 'react';
import '../style/intro.scss';

const Intro = () => {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    if(window.innerWidth < 769) setMobile(true);
  }, []);

  window.addEventListener("resize", (e) => {
    window.innerWidth < 769 ? setMobile(true) : setMobile(false);
  })

  return (
    <section className="intro">
      <h1 className="intro__title">
        <p className="intro__title__name">Jia Song</p>
        <p className="intro__title__position">
          {mobile ? "Frontend dev" : "Frontend developer"}
        </p>
      </h1>
      <div className="intro__innerbox">
        <p className="intro__text">
          I am a self-taught developer with a passion for building responsive web apps, and a strong focus on UI/UX. 
          <br />Currently seeking my first developer role whilst continuing to learn and grow.
        </p>
        <a 
          className="intro__email hover-button" 
          href="mailto:jiasong214@gmail.com"
        >
          jiasong214@gmail.com
        </a>
        <a 
          className="intro__linkedIn hover-button" 
          href="https://www.linkedin.com/in/jiasong214/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </section>
  )
}

export default React.memo(Intro);