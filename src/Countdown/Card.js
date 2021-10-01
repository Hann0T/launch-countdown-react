import React from 'react';

const Card = (props) => {
  return (
    <div className='card'>
      <span>{props.value}</span>
      <span>{props.format}</span>
    </div>
  );
};

export { Card };
