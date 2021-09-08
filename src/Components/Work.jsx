import React from 'react';
import { Link } from 'react-router-dom';
import works from '../casestudyData';
import '../style/work.scss';

const Work = () => {
  return (
    <section className="work">
      <h1 className="work__title">Selected Works</h1>
      <ul className="work__list">

        {works.map((work, index) => (
          <li className="work__item" key={index}>
            <Link to={work.casestudy}>
              <div className="work__item__img-wrapper">
                <img
                  className="work__item__img" 
                  src={work.thumbnail}
                  alt={`${work.title} thumbnail`} 
                />
              </div>
            </Link>
            <div className="work__item__text-wrapper">
              <h2 className="work__item__title">{work.title}</h2>
              <div className="work__item__links">
                <a
                  className="hover-button"
                  href={work.demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo
                </a>
                <a
                  className="hover-button"
                  href={work.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </div>
              <p className="work__item__text">{work.summary}</p>
              <Link 
                to={work.casestudy} 
                className="work__item__casestudyBtn hover-button"
              >
                See Casestudy
              </Link>
            </div>
          </li>
        ))}

      </ul>
      <a 
        className="work__github" 
        href="https://github.com/jiasong214"
        target="_blank"
        rel="noreferrer"
      >
        More in Github
      </a>
    </section>
  )
}

export default React.memo(Work);