import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "Components/Header";
import ProjectIntro from "Components/ProjectIntro";
import ProjectControl from "Components/ProjectControl";
import works from "../projectData.js";
import "../style/project.scss";

const Project = () => {
  const { id } = useParams();
  const [show, setShow] = useState(false);

  const data = works.filter((work) => work.id === id)[0];

  // to scroll up to the top
  useEffect(() => {
    setTimeout(() => setShow(true), 100);
  }, []);

  return (
    show && (
      <motion.section
        className="project"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Header />

        {/* project title and summary */}
        <ProjectIntro data={data} />

        {/* project introduction */}
        <div className="project__about text">
          <p>{data.text[0].para}</p>
        </div>

        {/* main screenshot */}
        <img
          className="project__introImg img"
          src={data.screenshot.pc[0]}
          alt="screenshot"
        />

        {/* project purpose */}
        <div className="project__purpose text">
          <h2>{data.text[1].title}</h2>
          {data.text[1].para.map((text, id) => (
            <p key={id}>{text}</p>
          ))}
        </div>

        {/* project stack */}
        <div className="project__stack">
          <div className="project__stack__icon">
            <div>
              {data.stackIcon.map((icon, id) => (
                <img key={id} className="img" src={icon} alt="stack icon" />
              ))}
            </div>
          </div>
          <div className="project__stack__text text">
            <h2>{data.text[2].title}</h2>
            {data.text[2].para.map((text, id) => (
              <p key={id}>{text}</p>
            ))}
          </div>
        </div>

        {/* mobile screenshot */}
        {data.screenshot.mobile.length !== 0 && (
          <div className="project__imgs --mobile">
            {data.screenshot.mobile.map((img, id) => (
              <img key={id} className="img" src={img} alt="mobile screenshot" />
            ))}
          </div>
        )}

        {/* desktop screenshot */}
        <div className="project__imgs">
          {data.screenshot.pc
            .filter((e, index) => index !== 0)
            .map((img, id) => (
              <img
                key={id}
                className="img"
                src={img}
                alt="desktop screenshot"
              />
            ))}
        </div>

        <ProjectControl />
      </motion.section>
    )
  );
};

export default Project;
