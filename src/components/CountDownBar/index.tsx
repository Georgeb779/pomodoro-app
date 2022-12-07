import React, { useEffect, useState } from "react";
import "./index.scss";

export function CountDownBar() {
  const [time, setTime] = useState(283);

//   const countDown = () => {
//     setTime(time - 3);
//   };

//   useEffect(() => {
//     const interval = setInterval(countDown, 1000);
//     console.log(time);
//     return () => clearInterval(interval);
//   }, [time]);

  return (
    <div className='base-timer'>
      <svg
        className='base-timer__svg'
        viewBox='0 0 100 100'
        xmlns='http://www.w3.org/2000/svg'
        strokeDasharray={`${time} 300`}
      >
        <g className='base-timer__circle'>
          <circle className='base-timer__path-elapsed' cx='50' cy='50' r='45' />
        </g>
      </svg>
      <span></span>
    </div>
  );
}
