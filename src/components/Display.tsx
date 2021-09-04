import React from 'react';
import { IDisplayProps } from '../types/components';

import { setDIsplay } from '../redux/actions/options';

const Display: React.FC<IDisplayProps> = ({ display, dispatch }) => {
  const TIMER_STEP = 100;
  const SHOW_TIME = 1500;

  const [count, setCount] = React.useState(0);
  const [isActive, setIsActive] = React.useState(true);

  React.useEffect(() => {
    let interval: any = null;

    if (!isActive) {
      setCount(0);
      dispatch(setDIsplay(''));
      return () => clearInterval(interval);
    }

    interval = setInterval(() => {
      setCount(count + TIMER_STEP);
      if (count >= SHOW_TIME) setIsActive(false);
    }, TIMER_STEP);

    return () => clearInterval(interval);
  }, [isActive, count, dispatch]);

  React.useEffect(() => {
    console.log('Display');
    setIsActive(true);
    setCount(0);
  }, [display]);

  return <div className="display">{display}</div>;
};

export default Display;
