import { Button } from "@/components/Button";
import { useState } from "react";
import "./index.scss";

function App() {
  const [count, setCount] = useState([]);

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

      <div className='choice_container'>
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
    </div>
  );
}

export default App;
