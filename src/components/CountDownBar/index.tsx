import React, { useEffect, useState } from "react";
import { CountDownProps } from "@interfaces";
import "./index.scss";

export function CountDownBar({
  activeTime,
  isRunning,
  activeBtn
}: CountDownProps) {
  const [time, setTime] = useState(283);

  const decreeingTime = (time: number, activeTime: number) => {
    let speedOfDecreeing = time / activeTime;
    setTime(time - speedOfDecreeing);
  };

  useEffect(() => {
    if (activeTime > 0 && time > 0 && isRunning) {
      const interval = setInterval(() => decreeingTime(time, activeTime), 1000);
      return () => clearInterval(interval);
    }
    if (time <= 0) {
      setTime(283);
    }
  }, [activeTime, time]);

  useEffect(() => {
    setTime(283);
  }, [activeBtn]);

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
