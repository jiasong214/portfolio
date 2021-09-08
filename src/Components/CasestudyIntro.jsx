import ProgressiveImage from 'react-progressive-image';
import '../style/casestudyIntro.scss';

const CasestudyIntro = ({title, tech, demo, github}) => {
  return (
    <div className="casestudyIntro">
      <div className="casestudyIntro-background">
        <span className="casestudyIntro__index">01</span>
        {/* <motion.div
          className="casestudyIntro__img"
          initial={{width: 0}}
          animate={{width: "100%"}}
          transition={{duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96], delay: 0.5}}
        >
          <ProgressiveImage
            src={test}
            // placeholder: 여기에 낮은 해상도 이미지 파일 추가
          >
            {(src) => <motion.img 
              src={src} 
              alt=""  
              />}
          </ProgressiveImage>
        </motion.div> */}
        <h1 className="casestudyIntro__title">
          {title}
        </h1>
        <p className="casestudyIntro__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dolorum quisquam.
        </p>
        <div className="casestudyIntro__img">
          <img src="" alt="" />
        </div>
      </div>
      <div className="casestudyIntro__info-wrapper">
        <div className="casestudyIntro__info">
          <p>
            <span>Tech</span>
            <span>{tech}</span>
          </p>
          <p>
            <span>Demo</span>
            <span>
              <a href={demo} className="hover-button">
                {demo}
              </a>
            </span>
          </p>
          <p>
            <span>Code</span>
            <span>
              <a href={github} className="hover-button">
                Github
              </a>
            </span>
          </p>
        </div>
      </div>
  </div>
  )
}

export default CasestudyIntro;