import '../style/casestudyIntro.scss';

const CasestudyIntro = ({data}) => {
  return (
    <div className="casestudyIntro">
      <span className="casestudyIntro__index">01</span>
      <h1 className="casestudyIntro__title">
        {data.title}
      </h1>
      <div className="casestudyIntro__info">
        <p>
          <span>Tech</span>
          <span>{data.tech}</span>
        </p>
        <p>
          <span>Demo</span>
          <span>
            <a href={data.demo} className="hover-button">
              Website
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
  )
}

export default CasestudyIntro;