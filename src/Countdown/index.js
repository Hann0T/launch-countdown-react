import React from 'react';

import { Card } from './Card';

import './Countdown.css';

const Countdown = () => {
  return (
    <section className='countdown'>
      <Card value='08' format='DAYS' />
      <Card value='23' format='HOURS' />
    </section>
  );
};

export { Countdown };
