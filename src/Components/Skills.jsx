import React from 'react';
import '../style/skills.scss';

const Skills = () => {
  return (
    <section className="skills">
      <h1 className="skills__title">My Skills</h1>
      <p className="skills__text">
        Throughout my time self-learning I have developed strong abilities in various techs.
        <br /> I am always ready to learn.
      </p>
      <ul className="skills__list">
        <li>
          <span>HTML5</span>
          <span>CSS3</span>
          <span>Sass</span>
          <span>ES6</span>
        </li>
        <li>
          <span>React</span>
          <span>Redux</span>
          <span>Styled-Component</span>
        </li>
        <li>
          <span>Node.js</span>
          <span>Ruby on Rails</span>
          <span>Rest API</span>
          <span>MySQL</span>
        </li>
        <li>
          <span>Git</span>
          <span>Adobe Photoshop</span>
        </li>
      </ul>
    </section>
  )
}

export default React.memo(Skills);