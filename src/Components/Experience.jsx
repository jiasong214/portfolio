import React from 'react';
import '../style/experience.scss';

const Experience = () => {

  return (
    <section className='experience'>
      <h1 className="experience__title">Experiences</h1>
      <ul>
        <li>
          <span className='experience__period'>
            Apr '22 - Current
          </span>
          <div>
            <h2 className='experience__company'>
              Style Arcade
            </h2>
            <p className='experience__position'>
              Junior software engineer | Full-time
            </p>
            <p className='experience__summary'>
              Full-stack engineer with a primary focus on front-end development. Exposure to back-end development and data processing.
            </p>
            <p className='experience__tech'>
              TypeScript | React.js | Node.js | SASS | AWS
            </p>
          </div>
        </li>
        <li>
          <span className='experience__period'>
            Dec '22 - Jan '23
          </span>
          <div>
            <h2 className='experience__company'>
              Ridly
            </h2>
            <p className='experience__position'>
              Front-end developer | Freelancing
            </p>
            <p className='experience__summary'>
              Worked as a front-end developer on a team of three engineers to rebuild a website that was originally built on a CMS platform. Used React with Typescript, and Remix for SSR. I created all components, replicated the original website design using SASS, and implemented interactive animations using custom hooks. The front-end side of the project was completed within approximately 60 hours.
            </p>
            <p className='experience__tech'>
              Typescript | React.js | Remix | SASS
            </p>
          </div>
        </li>
      </ul>
    </section>
  )
}

export default React.memo(Experience);