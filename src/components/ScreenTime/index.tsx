import React from "react";
import "./index.scss";

export function ScreenTime() {
  return (
    <div className='screen-time__container'>
      <div className='screen-time-value__container'>
        <div className='screen-time-timer__container'>
          <div className='screen-time-timer__container--value'>17:59</div>
          <div className='screen-time-timer__container--btn'>
            <button>PAUSE</button>
          </div>
        </div>
      </div>
    </div>
  );
}
