import '../style/projectIntro.scss';

const ProjectIntro = ({data}) => {
  return (
    <div className="projectIntro">
      <h1 className="projectIntro__title">
        {data.title}
      </h1>
      <div className="projectIntro__info">
        <p>
          <span>Stack</span>
          <span>{data.stack}</span>
        </p>
        <p>
          <span>Live</span>
          <span>
            <a
              className="hover-button"
              href={data.demo}
              target="_blank"
              rel="noreferrer"
            >
              Website
            </a>
          </span>
        </p>
        <p>
          <span>Code</span>
          <span>
            <a
              className="hover-button"
              href={data.github}
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </span>
        </p>
      </div>
  </div>
  )
}

export default ProjectIntro;