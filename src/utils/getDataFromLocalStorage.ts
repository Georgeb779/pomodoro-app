import { PomodoroTimesProps } from "@/interfaces";

export const getDataFromLocalStorage = ({
  setUseFont,
  setUseColor,
  setPomodoroTimes
}: {
  setUseFont: (useFont: { activeFont: string; newFont: string }) => void;
  setUseColor: (useColor: { activeColor: string; newColor: string }) => void;
  setPomodoroTimes: (pomodoroTimes: PomodoroTimesProps) => void;
}) => {
  const useFontData =
    localStorage.getItem("useFont") &&
    JSON.parse(localStorage.getItem("useFont") || "");
  const useColorData =
    localStorage.getItem("useColor") &&
    JSON.parse(localStorage.getItem("useColor") || "");
  const pomodoroTimesData =
    localStorage.getItem("pomodoroTimes") &&
    JSON.parse(localStorage.getItem("pomodoroTimes") || "");

  if (useFontData) {
    setUseFont({
      activeFont: useFontData.activeFont,
      newFont: ""
    });
  }
  if (useColorData) {
    setUseColor({
      activeColor: useColorData.activeColor,
      newColor: ""
    });
  }
  if (pomodoroTimesData) {
    setPomodoroTimes({
      pomodoro: pomodoroTimesData.pomodoro,
      shortBreak: pomodoroTimesData.shortBreak,
      longBreak: pomodoroTimesData.longBreak,

      newPomodoro: 0,
      newShortBreak: 0,
      newLongBreak: 0
    });
  }
};
