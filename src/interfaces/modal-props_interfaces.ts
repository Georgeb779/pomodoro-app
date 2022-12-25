import { PomodoroTimesProps } from "./pomodoro-times-props_interfaces";

export type ModalProps = {
  useFont: { activeFont: string; newFont: string };
  activeBtn: { btn1: boolean; btn2: boolean; btn3: boolean };
  useColor: { activeColor: string; newColor: string };
  setUseFont: (useFont: { activeFont: string; newFont: string }) => void;
  pomodoroTimes: PomodoroTimesProps;
  setPomodoroTimes: (pomodoroTimes: PomodoroTimesProps) => void;
  setUseColor: (useColor: { activeColor: string; newColor: string }) => void;
};
