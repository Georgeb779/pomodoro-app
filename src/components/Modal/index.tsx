import React, { useEffect, useState } from "react";
import { GearIcon, Close, CheckMark } from "@/assets/icons";
import { Button, ColorItem, FontItem, PomodoroTimeInput } from "@/components/";
import { ModalProps } from "@/interfaces";
import {
  updateFontAndColor,
  updatePomodoroTimes,
  resetState,
  saveDataInLocalStorage
} from "@/utils";
import "./index.scss";

export function Modal({
  useFont,
  activeBtn,
  useColor,
  setUseFont,
  pomodoroTimes,
  setPomodoroTimes,
  setUseColor
}: ModalProps) {
  const [modalActive, setModalActive] = useState(false);

  return (
    <div className='modal__container'>
      <div
        className={`modal-item__container ${modalActive ? "" : "disable"}`}
        onClick={() => {
          resetState(
            setModalActive,
            setUseFont,
            setUseColor,
            setPomodoroTimes,
            useFont,
            useColor,
            pomodoroTimes
          );
        }}
      >
        <div
          className={`modal-item__container--content`}
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
                resetState(
                  setModalActive,
                  setUseFont,
                  setUseColor,
                  setPomodoroTimes,
                  useFont,
                  useColor,
                  pomodoroTimes
                );
              }}
            />
          </header>
          <div className='modal-item__container--content--body'>
            <div className='modal-item__container--content--section'>
              <h2>Time (minutes)</h2>
              <PomodoroTimeInput
                label='Pomodoro'
                name='pomodoro'
                id='pomodoro'
                value={pomodoroTimes.newPomodoro || pomodoroTimes.pomodoro}
                setValue={(value) =>
                  setPomodoroTimes({ ...pomodoroTimes, newPomodoro: value })
                }
              />
              <PomodoroTimeInput
                label='short break'
                name='short break'
                id='short break'
                value={pomodoroTimes.newShortBreak || pomodoroTimes.shortBreak}
                setValue={(value) =>
                  setPomodoroTimes({ ...pomodoroTimes, newShortBreak: value })
                }
              />
              <PomodoroTimeInput
                label='long break'
                name='long break'
                id='long break'
                value={pomodoroTimes.newLongBreak || pomodoroTimes.longBreak}
                setValue={(value) =>
                  setPomodoroTimes({
                    ...pomodoroTimes,
                    newLongBreak: value
                  })
                }
              />
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
                  colors={[
                    "primary-color",
                    "secondary-color",
                    "tertiary-color"
                  ]}
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
                updateFontAndColor(useColor, setUseColor, useFont, setUseFont);
                updatePomodoroTimes(pomodoroTimes, setPomodoroTimes);

                saveDataInLocalStorage(
                  useFont,
                  useColor,
                  pomodoroTimes
                );
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
