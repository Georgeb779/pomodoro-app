import { useState } from "react";
import { Button, ScreenTime, Modal } from "@/components/";
import "./index.scss";

function App() {
  const [activeBtn, setActiveBtn] = useState({
    btn1: true,
    btn2: false,
    btn3: false
  });

  const [useFont, setUseFont] = useState({
    activeFont: "primary-font",
    newFont: ""
  });

  const [useColor, setUseColor] = useState({
    activeColor: "primary-color",
    newColor: ""
  });

  const [pomodoroTimes, setPomodoroTimes] = useState({
    pomodoro: 25,
    shortBreak: 2,
    longBreak: 15
  });

  const animateActiveBtn = (btn: string) => {
    setActiveBtn({
      btn1: false,
      btn2: false,
      btn3: false,
      [btn]: true
    });
  };

  return (
    <div
      className={`app_container ${useColor.activeColor} ${useFont.activeFont}`}
    >
      <h1>Pomodoro</h1>
      <div
        className={`choice_container ${useColor.activeColor} ${
          activeBtn.btn1
            ? "primary-1"
            : activeBtn.btn2
            ? "primary-2"
            : "primary-3"
        }`}
      >
        <Button
          text='Pomodoro'
          color='red'
          type={activeBtn.btn1 ? "active" : "disabled"}
          onClick={() => {
            animateActiveBtn("btn1");
          }}
        />
        <Button
          text='Short Break'
          color='green'
          type={activeBtn.btn2 ? "active" : "disabled"}
          onClick={() => {
            animateActiveBtn("btn2");
          }}
        />

        <Button
          text='Long Break'
          color='blue'
          type={activeBtn.btn3 ? "active" : "disabled"}
          onClick={() => {
            animateActiveBtn("btn3");
          }}
        />
      </div>

      <div className={`timer_container ${useColor.activeColor}`}>
        <ScreenTime
          pomodoroTimes={
            activeBtn.btn1
              ? pomodoroTimes.pomodoro
              : activeBtn.btn2
              ? pomodoroTimes.shortBreak
              : pomodoroTimes.longBreak
          }

          activeBtn={activeBtn}
        />
      </div>

      <Modal
        useColor={useColor}
        useFont={useFont}
        setUseFont={setUseFont}
        setUseColor={setUseColor}
        setPomodoroTimes={setPomodoroTimes}
      />
    </div>
  );
}

export default App;
