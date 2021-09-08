import React from 'react';
import '../style/contact.scss';

const Contact = () => {
  return (
    <address className="contact">
      <h2 className="contact__title">Contact</h2>
      <ul>
        <li className="contact__item hover-button">
          <a href="mailto:jiasong214@gmail.com">
            Jiasong214@gmail.com
          </a>
        </li>
        <li className="contact__item hover-button">
          {/* <a href="tel:61413173676"> */}
            +61 123 123 123
          {/* </a> */}
        </li>
      </ul>
    </address>
  )
}

export default React.memo(Contact);