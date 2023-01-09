import '../style/loading.scss';

const Loading = ({loading}) => {
  const year = new Date().getFullYear()
  
  return (
    <div className={`loading ${loading}`}>
      <h1 className="loading__title">
        <div className="loading__title__icon"/>
        <p className="loading__title__text">
          JIA SONG
          <br/> PORTFOLIO {year}
        </p>
      </h1>
    </div>
  )
}

export default Loading;