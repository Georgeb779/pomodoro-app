import React, { useState } from "react";
import { GearIcon, Close, CheckMark } from "@/assets/icons";
import { Button, ColorItem, FontItem } from "@/components/";
import "./index.scss";
import { ModalProps } from "@/interfaces";

export function Modal({
  useFont,
  useColor,
  setUseFont,
  setPomodoroTimes,
  setUseColor
}: ModalProps) {
  const [modalActive, setModalActive] = useState(false);

  return (
    <div className='modal__container'>
      <div
        className={`modal-item__container ${modalActive ? "" : "disable"}`}
        onClick={(e) => {
          setModalActive(!modalActive);
          // make one eventually
          setUseFont({
            activeFont: useFont.activeFont,
            newFont: ""
          });
          setUseColor({
            activeColor: useColor.activeColor,
            newColor: ""
          });
        }}
      >
        <div
          className={`modal-item__container--content` }
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            e.nativeEvent.stopImmediatePropagation();
          }}
        >
          <header>
            <h1>Settings</h1>{" "}
            <Button
              icon={<Close />}
              onClick={() => {
                setModalActive(!modalActive);
                // make one eventually
                setUseFont({
                  activeFont: useFont.activeFont,
                  newFont: ""
                });
                setUseColor({
                  activeColor: useColor.activeColor,
                  newColor: ""
                });
              }}
            />
          </header>
          <div className='modal-item__container--content--body'>
            <div className='modal-item__container--content--section'>
              <h2>Time (minutes)</h2>
              <span>
                <label htmlFor='pomodoro'>Pomodoro</label>{" "}
                <input type='number' name='pomodoro' id='pomodoro' />
              </span>
              <span>
                <label htmlFor='short break'>short break</label>{" "}
                <input type='number' name='short break' id='short break' />
              </span>
              <span>
                <label htmlFor='long break'>long break</label>{" "}
                <input type='number' name='long break' id='long break' />
              </span>
            </div>
            <div className='modal-item__container--content--section'>
              <h2>Font</h2>

              <div className='font__container'>
                <FontItem
                  useFont={useFont}
                  fonts={["primary-font", "secondary-font", "tertiary-font"]}
                  setUseFont={setUseFont}
                />
              </div>
            </div>
            <div className='modal-item__container--content--section'>
              <h2>Color</h2>
              <div className='color__container'>
                <ColorItem
                  useColor={useColor}
                  colors={["primary-color", "secondary-color", "tertiary-color"]}
                  icon={<CheckMark />}
                  setUseColor={setUseColor}
                />
              </div>
            </div>
            <Button
              text='Apply'
              type={`primary ${useColor.activeColor}`}
              onClick={() => {
                setModalActive(!modalActive);
                if (
                  useColor.newColor !== useColor.activeColor &&
                  useColor.newColor !== ""
                ) {
                  setUseColor({
                    activeColor: useColor.newColor,
                    newColor: ""
                  });
                }
                if (
                  useFont.newFont !== useFont.activeFont &&
                  useFont.newFont !== ""
                ) {
                  setUseFont({
                    activeFont: useFont.newFont,
                    newFont: ""
                  });
                }
              }}
            />
          </div>
        </div>
      </div>
      <Button
        icon={<GearIcon />}
        onClick={() => {
          setModalActive(!modalActive);
        }}
      />
    </div>
  );
}
