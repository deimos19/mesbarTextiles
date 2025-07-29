import React, { useEffect, useState } from 'react';

const Counter = ({ target, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 10);
    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(interval);
      }
      setCount(Math.floor(start));
    }, 10);

    return () => clearInterval(interval);
  }, [target, duration]);

  return <>{count.toLocaleString()}</>;
};

export default Counter;
