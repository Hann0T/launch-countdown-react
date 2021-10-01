import React from 'react';

// import Facebook from '/public/images/icon-facebook.svg';

const Footer = () => {
  return (
    <ul>
      <li>
        <a href='https://facebook.com' target='_blank' rel='noreferrer'>
          <img src='/images/icon-facebook.svg' alt='Facebook icon' />
        </a>
      </li>
      <li>
        <a href='https://pinterest.com' target='_blank' rel='noreferrer'>
          <img src='/images/icon-pinterest.svg' alt='Pinterest icon' />
        </a>
      </li>
      <li>
        <a href='https://instagram.com' target='_blank' rel='noreferrer'>
          <img src='/images/icon-instagram.svg' alt='Instagram icon' />
        </a>
      </li>
    </ul>
  );
};

export { Footer };
