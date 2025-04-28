import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../style/header.scss";

const Header = () => {
  return (
    <header className="header">
      <Link className="header__title" to="/">
        <div className="header__title__icon" />
        <h1 className="header__title__text">
          JIA SONG
          <br />
          PORTFOLIO 2022
        </h1>
      </Link>
      <p className="header__location">
        BASED IN SYDNEY
        <br />
        AUSTRALIA
      </p>
    </header>
  );
};

export default React.memo(Header);
