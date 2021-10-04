import React from 'react';

import './Card.css';

const Card = (props) => {
  return (
    <div className='card'>
      <span className='bg-dark'></span>
      <span className='number'>{props.value}</span>
      <span className='indicator'>{props.format}</span>
    </div>
  );
};

export { Card };
