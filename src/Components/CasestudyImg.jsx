import React from 'react';
import ProgressiveImage from 'react-progressive-image';
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
            <ProgressiveImage
              key={index}
              src=''
              placeholder=''
            >
              {(src) =>
                <img
                  src={content.img} 
                  alt="screenshot"  
                />
              }
            </ProgressiveImage>
          : <video
              key={index}
              src={content.video}
              autoPlay={window.innerWidth > 480 ? true : false}
              muted
              loop
            />
        ))}
      </div>
    </div>
  )
}

export default React.memo(CasestudyImg);