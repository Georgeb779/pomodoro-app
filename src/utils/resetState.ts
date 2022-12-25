import { PomodoroTimesProps } from "@/interfaces";

export const resetState = (
  setModalActive: (modalActive: boolean) => void,
  setUseFont: (useFont: { activeFont: string; newFont: string }) => void,
  setUseColor: (useColor: { activeColor: string; newColor: string }) => void,
  setPomodoroTimes: (pomodoroTimes: PomodoroTimesProps) => void,
  useFont: { activeFont: string; newFont: string },
  useColor: { activeColor: string; newColor: string },
  pomodoroTimes: PomodoroTimesProps,
  
) => {
  setModalActive(false);
  setUseFont({
    activeFont: useFont.activeFont,
    newFont: ""
  });
  setUseColor({
    activeColor: useColor.activeColor,
    newColor: ""
  });
  setPomodoroTimes({
    ...pomodoroTimes,
    newPomodoro: 0,
    newShortBreak: 0,
    newLongBreak: 0
  });
};
