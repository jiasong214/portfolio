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
              Rebuilt a client's website that was originally made with a CMS (Webflow). Worked in a team of 3 engineers, and I was solely in charge of the frontend. Used React with Typescript, and Remix for SSR. Recreated the original website design using SASS and implemented the interactive animations. Worked on it to completion for a period of approximately 60 hours.
            </p>
            <p className='experience__tech'>
              React.js | Remix | SASS
            </p>
          </div>
        </li>
      </ul>
    </section>
  )
}

export default React.memo(Experience);