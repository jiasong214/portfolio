import '../style/casestudyIntro.scss';


const CasestudyIntro = ({data, onReady}) => {
  let imageCount = 0;

  const handleAllImageReady = () => {
    const totalImage = 2;

    imageCount ++;
    imageCount < totalImage && onReady();
  }

  return (
    <div className="casestudyIntro">
      <div className="casestudyIntro-innerbox">
        <img 
          className="casestudyIntro__background" 
          src={data.background} 
          alt="background"
          onLoad={handleAllImageReady}
        />
        <div>
          <span className="casestudyIntro__index">01</span>
          <h1 className="casestudyIntro__title">
            {data.title}
          </h1>
          <p className="casestudyIntro__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dolorum quisquam.
          </p>
          <div className="casestudyIntro__img">
            <img 
              src="" 
              alt={`${data.title} thumbnail`}
              onLoad={handleAllImageReady}
            />
          </div>
        </div>
      </div>
      <div className="casestudyIntro__info-wrapper">
        <div className="casestudyIntro__info">
          <p>
            <span>Tech</span>
            <span>{data.tech}</span>
          </p>
          <p>
            <span>Demo</span>
            <span>
              <a href={data.demo} className="hover-button">
                {data.demo}
              </a>
            </span>
          </p>
          <p>
            <span>Code</span>
            <span>
              <a href={data.github} className="hover-button">
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