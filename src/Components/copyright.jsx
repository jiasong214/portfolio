import React from 'react';
import '../style/copyright.scss';

const Copyright = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="copyright">
      &copy; Jia Song {year}
    </footer>
  )
}

export default React.memo(Copyright);