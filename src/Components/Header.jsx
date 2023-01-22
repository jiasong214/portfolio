import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/header.scss';

const Header = () => {
  const year = new Date().getFullYear()

  return (
    <header className="header">
      <Link className="header__title" to="/">
        <div className="header__title__icon" />
        <h1 className="header__title__text">
          JIA SONG<br />
          PORTFOLIO {year}
        </h1>
      </Link>
      <p className="header__location">
        BASED IN SYDNEY<br />
        AUSTRALIA
      </p>
    </header>
  )
}

export default React.memo(Header);