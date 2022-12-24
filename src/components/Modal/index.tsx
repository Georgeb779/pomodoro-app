import React, { useState } from "react";
import "./index.scss";
import { GearIcon, Close } from "@/assets/icons";
import { Button } from "@/components/Button";

export function Modal() {

  const [modalActive, setModalActive] = useState(false);

  return (
    <div className='modal__container'>

      <div className={`modal-item__container ${modalActive ? '' : 'disable'}`} onClick={(e) => {
        setModalActive(!modalActive);
      }}>

        <div className={`modal-item__container--content`} onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          e.nativeEvent.stopImmediatePropagation();

        }} >

          <header><h1>Settings</h1> <Button icon={<Close />} onClick={() => {
            setModalActive(!modalActive);
          }} /></header>

          <div className='modal-item__container--content--body' >

            <div className='modal-item__container--content--section'>
              <h2>Time (minutes)</h2>

              <span><label htmlFor="pomodoro">Pomodoro</label> <input type="number" name="pomodoro" id="pomodoro" /></span>
              <span><label htmlFor="short break">short break</label> <input type="number" name="short break" id="short break" /></span>
              <span><label htmlFor="long break">long break</label> <input type="number" name="long break" id="long break" /></span>

            </div>

            <div className='modal-item__container--content--section'>
              <h2>Font</h2>

              <div className="font__container">
                <div className="font_item active">Aa</div>
                <div className="font_item">Aa</div>
                <div className="font_item">Aa</div>
              </div>

            </div>

            <div className='modal-item__container--content--section'>
              <h2>Color</h2>

              <div className="color__container">
                <div className="color_item"></div>
                <div className="color_item"></div>
                <div className="color_item"></div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <Button icon={<GearIcon />} onClick={() => {
        setModalActive(!modalActive);
      }} />

    </div >
  );
}
