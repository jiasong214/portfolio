import React from 'react';
import '../style/casestudyImg.scss';

const CasestudyImg = ({contents, background="white"}) => {
  return (
    <div 
      className="casestudyImg-wrapper"
      style={{backgroundColor: `${background}`}}
    >
      <div className="casestudyImg-container">
        {contents.map((content, index) => (
          content.img ? 
            <img
              key={index}
              src={content.img} 
              alt="screenshot"  
            />
          : <video
              key={index}
              src={content.video}
              autoPlay
              muted
              loop
            />
        ))}
      </div>
    </div>
  )
}

export default React.memo(CasestudyImg);