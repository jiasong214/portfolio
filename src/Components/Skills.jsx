import React from 'react';
import '../style/skills.scss';

const Skills = () => {
  return (
    <section className="skills">
      <h1 className="skills__title">My Skills</h1>
      <p className="skills__text">
        Throughout my study and commercial experience I have developed strong abilities in various techs.
        <br /> I am always ready to learn.
      </p>
      <ul className="skills__list">
        <li>
          <span>HTML5</span>
          <span>CSS3</span>
          <span>SASS</span>
          <span>JS</span>
        </li>
        <li>
          <span>Typescript</span>
          <span>React</span>
          <span>Redux</span>
          <span>MobX</span>
        </li>
        <li>
          <span>Node.js</span>
          <span>Rest API</span>
          <span>MySQL</span>
        </li>
        <li>
          <span>Git</span>
        </li>
      </ul>
    </section>
  )
}

export default React.memo(Skills);