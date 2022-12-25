import { PomodoroTimesProps } from "@/interfaces";

export const saveDataInLocalStorage = (
  useFont: { activeFont: string; newFont: string },
  useColor: { activeColor: string; newColor: string },
  pomodoroTimes: PomodoroTimesProps
) => {
  console.log(
    useFont.newFont.length > 0 ? useFont.newFont : useFont.activeFont
  );
  console.log(useColor.newColor);

  localStorage.setItem(
    "useFont",
    JSON.stringify({
      activeFont:
        useFont.newFont.length > 0 ? useFont.newFont : useFont.activeFont
    })
  );
  localStorage.setItem(
    "useColor",
    JSON.stringify({
      activeColor:
        useColor.newColor.length > 0 ? useColor.newColor : useColor.activeColor
    })
  );
  localStorage.setItem(
    "pomodoroTimes",
    JSON.stringify({
      pomodoro:
        pomodoroTimes.newPomodoro !== 0
          ? pomodoroTimes.newPomodoro
          : pomodoroTimes.pomodoro,
      shortBreak:
        pomodoroTimes.newShortBreak !== 0
          ? pomodoroTimes.newShortBreak
          : pomodoroTimes.shortBreak,
      longBreak:
        pomodoroTimes.newLongBreak !== 0
          ? pomodoroTimes.newLongBreak
          : pomodoroTimes.longBreak
    })
  );
};
