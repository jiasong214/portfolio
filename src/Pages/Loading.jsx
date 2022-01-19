import '../style/loading.scss';

const Loading = ({loading}) => {
  return (
    <div className={`loading ${loading}`}>
      <h1 className="loading__title">
        <div className="loading__title__icon"/>
        <p className="loading__title__text">
          JIA SONG
          <br/> PORTFOLIO 2022
        </p>
      </h1>
    </div>
  )
}

export default Loading;