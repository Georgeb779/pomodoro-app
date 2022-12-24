import { useState } from "react";
import { Button, ScreenTime, Modal } from "@/components/";
import "./index.scss";

function App() {


  const [activeBtn, setActiveBtn] = useState({
    btn1: true,
    btn2: false,
    btn3: false
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
    <div className='app_container'>
      <h1>Pomodoro</h1>

      <div
        className={`choice_container ${activeBtn.btn1 ? "primary-1" : activeBtn.btn2 ? "primary-2" : "primary-3"
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

      <div className='timer_container'>
        <ScreenTime />
      </div>

      <Modal />
    </div>
  );
}

export default App;
