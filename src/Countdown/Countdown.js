import React from 'react';

import { Card } from './Card';

import './Countdown.css';

const Countdown = () => {
  const [count, setCount] = React.useState({
    days: 8,
    hours: 0,
    minutes: 0,
    seconds: 10,
  });

  React.useEffect(() => {
    setTimeout(() => {
      changeTime(count);
    }, 1000);
  });

  const changeTime = ({ days, hours, minutes, seconds }) => {
    if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
      console.log('the count is empty');
      return;
    }
    if (seconds >= 0) {
      setCount({
        ...count,
        seconds: count.seconds - 1,
      });
    }
    if (seconds <= 0 && minutes > -1) {
      setCount({
        ...count,
        seconds: 60,
        minutes: count.minutes - 1,
      });
    }
    if (minutes <= 0 && hours >= 0) {
      setCount({
        ...count,
        minutes: 60,
        hours: count.hours - 1,
      });
    }
    if (hours <= 0 && days > 0) {
      setCount({
        ...count,
        hours: 24,
        days: count.days - 1,
      });
      return;
    }
  };
  const fixFormat = (value) => {
    return value < 10 ? `0${value}` : `${value}`;
  };

  return (
    <section className='countdown'>
      <Card value={count.days} format='DAYS' />
      <Card value={count.hours} format='HOURS' />
      <Card value={count.minutes} format='MINUTES' />
      {/* <Card value={fixFormat(count.seconds)} format='SECONDS' /> */}
      <Card value={count.seconds} format='SECONDS' />
    </section>
  );
};

export { Countdown };
