import React from 'react';
import '../style/casestudyText.scss';

const CasestudyText = ({text}) => {
  return (
    <div className="casestudyText">
      <div className="casestudyText-innerbox">
      <h2 className="casestudyText__title">{text.title}</h2>
      {text.para.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
      </div>
    </div>
  )
}

export default React.memo(CasestudyText);