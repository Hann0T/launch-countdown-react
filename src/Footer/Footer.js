import React from 'react';

import './Footer.css';

import Facebook from '../images/icon-facebook.svg';
import Pinterest from '../images/icon-pinterest.svg';
import Instagram from '../images/icon-instagram.svg';

const Footer = () => {
  return (
    <ul className='main-footer'>
      <li className='main-footer__item'>
        <a href='https://facebook.com' target='_blank' rel='noreferrer'>
          <img src={Facebook} alt='Facebook icon' />
        </a>
      </li>
      <li className='main-footer__item'>
        <a href='https://pinterest.com' target='_blank' rel='noreferrer'>
          <img src={Pinterest} alt='Pinterest icon' />
        </a>
      </li>
      <li className='main-footer__item'>
        <a href='https://instagram.com' target='_blank' rel='noreferrer'>
          <img src={Instagram} alt='Instagram icon' />
        </a>
      </li>
    </ul>
  );
};

export { Footer };
