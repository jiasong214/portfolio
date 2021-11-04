import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import works from '../projectData';
import '../style/work.scss';

const Work = () => {
  return (
    <section className="work">
      <h1 className="work__title">Selected Works</h1>
      <ul className="work__list">

        {works.map((work, index) => (
          <li className="work__item" key={index}>
            <Link to={work.project}>
              <div className="work__item__img-wrapper">
                <motion.img
                  className="work__item__img" 
                  src={work.thumbnail}
                  alt={`${work.title} thumbnail`}
                  whileHover={{scale: 1.03}}
                  transition={{duration: 1, ease: [0.43, 0.13, 0.23, 0.96]}}
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
                  Link
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
                to={work.project}
                className="work__item__projectBtn hover-button"
              >
                View Project
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