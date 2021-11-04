import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/header.scss';

const Header = () => {
  const [time, setTime] = useState(getTime());

  function getTime() {
    let date = new Date();
    let hour = date.getHours() >= 10 ? date.getHours() : `0${date.getHours()}`;
    let min = date.getMinutes() >= 10 ? date.getMinutes() : `0${date.getMinutes()}`;

    return `${hour}:${min}`;
  }

  useEffect(() => {
    let createClock = setInterval(() => 
      setTime(getTime())
    , 10000);

    return () => clearInterval(createClock);
  }, []);

  return (
    <header className="header">
      <Link className="header__title" to="/">
        <div className="header__title__icon" />
        <h1 className="header__title__text">
          JIA SONG<br />
          PORTFOLIO 2021
        </h1>
      </Link>
      <p className="header__location">
        SYDNEY, AUS<br />
        {time}
      </p>
    </header>
  )
}

export default React.memo(Header);