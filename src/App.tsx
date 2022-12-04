import { Button } from "@/components/Button";
import { ScreenTime } from "@/components/ScreenTime";
import { useState } from "react";
import "./index.scss";

function App() {
  const [active, setActive] = useState({
    btn1: true,
    btn2: false,
    btn3: false
  });

  const activeABtnDisableTheRest = (btn: string) => {
    setActive({
      btn1: false,
      btn2: false,
      btn3: false,
      [btn]: true
    });
  };

  return (
    <div className='app_container'>
      <h1>Pomodoro</h1>

      <div
        className={`choice_container ${
          active.btn1 ? "primary-1" : active.btn2 ? "primary-2" : "primary-3"
        }`}
      >
        <Button
          text='Pomodoro'
          color='red'
          type={active.btn1 ? "primary" : "disabled"}
          onClick={() => {
            activeABtnDisableTheRest("btn1");
          }}
        />
        <Button
          text='Short Break'
          color='green'
          type={active.btn2 ? "primary" : "disabled"}
          onClick={() => {
            activeABtnDisableTheRest("btn2");
          }}
        />

        <Button
          text='Long Break'
          color='blue'
          type={active.btn3 ? "primary" : "disabled"}
          onClick={() => {
            activeABtnDisableTheRest("btn3");
          }}
        />
      </div>

      <div className='timer_container'>
        <ScreenTime />
      </div>
    </div>
  );
}

export default App;
