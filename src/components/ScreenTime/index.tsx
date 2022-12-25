import { CountDownBar } from "@/components/CountDownBar";
import { ScreenTimeProps } from "@interfaces";
import React, { useEffect, useState } from "react";
import "./index.scss";

export function ScreenTime({ pomodoroTimes, activeBtn }: ScreenTimeProps) {
  const convertTimeToSeconds = (time: number) => {
    return time * 60;
  };

  const [isRunning, setIsRunning] = useState(false);
  const [activeTime, setActiveTime] = useState(
    convertTimeToSeconds(pomodoroTimes)
  );

  function timeConverter(num: number) {
    var hours = Math.floor(num / 60);
    var minutes = num % 60;
    return (
      (hours < 10 ? "0" : "") +
      hours +
      ":" +
      (minutes < 10 ? "0" : "") +
      minutes
    );
  }

  const countDown = () => {
    setActiveTime(activeTime - 1);
  };

  useEffect(() => {
    if (activeTime > 0 && isRunning) {
      const interval = setInterval(countDown, 1000);
      return () => clearInterval(interval);
    } else {
    }
    if (activeTime <= 0) {
      setIsRunning(false);
      setActiveTime(convertTimeToSeconds(pomodoroTimes));
    }
  }, [activeTime, isRunning]);

  useEffect(() => {
    setActiveTime(convertTimeToSeconds(pomodoroTimes));
    setIsRunning(false);
  }, [activeBtn]);

  return (
    <div className='screen-time__container'>
      <div className='screen-time-value__container'>
        <div className='screen-time-timer__container'>
          <CountDownBar
            activeTime={activeTime}
            isRunning={isRunning}
            activeBtn={activeBtn}
          />
          <div className='screen-time-timer__container--value'>
            {timeConverter(activeTime)}
          </div>
          <div className='screen-time-timer__container--btn'>
            <button
              onClick={() => {
                setIsRunning(!isRunning);
              }}
            >
              {isRunning ? "PAUSE" : "START"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
