import React from 'react';
import '../style/intro.scss';

const Intro = () => {
  return (
    <section className="intro">
      <div className="intro__innerbox">
        <h1 className="intro__title">Hello, I'm Jia</h1>
        <p className="intro__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Velit dicta doloribus ab ex eum odio, tempore minima nihil consectetur exercitationem<br/> eos itaque maxime eveniet cumque omnis. Aspernatur dicta nobis rem.
        </p>
      </div>
    </section>
  )
}

export default React.memo(Intro);