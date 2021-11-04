import React from 'react';
import '../style/contact.scss';

const Contact = () => {
  return (
    <address className="contact">
      <h1 className="contact__title">Let's Work Together!</h1>
      <p className="contact__text">
        Feel free to contact me if you're looking for a developer, have a question, or just want to connect.
      </p>
      <ul>
        <li className="contact__item hover-button">
          <a href="mailto:jiasong214@gmail.com">
            jiasong214@gmail.com
          </a>
        </li>
        <li className="contact__item hover-button">
          {/* <a href="tel:61413173676"> */}
            +61 413 173 676
          {/* </a> */}
        </li>
        <li className="contact__item">
          <a 
            className="hover-button" 
            href="https://www.linkedin.com/in/jiasong214/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </address>
  )
}

export default React.memo(Contact);