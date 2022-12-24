import { CountDownBar } from "@/components/CountDownBar";
import React from "react";
import "./index.scss";

export function ScreenTime() {
  return (
    <div className='screen-time__container'>
      <div className='screen-time-value__container'>
        <div className='screen-time-timer__container'>
          <CountDownBar />
          <div className='screen-time-timer__container--value'>17:59</div>
          <div className='screen-time-timer__container--btn'>
            <button>START</button>
          </div>
        </div>
      </div>
    </div>
  );
}
