import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/projectControl.scss';

const ProjectControl = () => {
  const navigate = useNavigate();

  const handleBack = () => navigate(-1);
  const handleTop = () => window.scrollTo(0,0);

  return (
    <menu className="projectControl">
      <button onClick={handleBack}>
        <span className="hover-button">
          &larr; Back to home
        </span>
      </button>
      <button onClick={handleTop}>
        <span className="hover-button">
          Top
        </span>
      </button>
    </menu>
  )
}

export default React.memo(ProjectControl);