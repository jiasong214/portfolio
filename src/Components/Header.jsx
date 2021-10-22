import React from 'react';
import { Link } from 'react-router-dom';
import '../style/header.scss';

const Header = () => {
  return (
    <header className="header">
      <Link className="header__logo" to="/">
        JIA
      </Link>
    </header>
  )
}

export default React.memo(Header);