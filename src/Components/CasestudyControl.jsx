import React from 'react';
import { useHistory } from 'react-router-dom';
import '../style/casestudyControl.scss';

const CasestudyControl = () => {
  const history = useHistory();

  const handleBack = () => history.goBack();
  const handleTop = () => window.scrollTo(0,0);

  return (
    <menu className="casestudyControl">
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

export default React.memo(CasestudyControl);