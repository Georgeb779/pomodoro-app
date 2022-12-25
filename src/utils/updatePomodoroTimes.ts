import { PomodoroTimesProps } from "@/interfaces";

export const updatePomodoroTimes = (
  pomodoroTimes: PomodoroTimesProps,
  setPomodoroTimes: (pomodoroTimes: PomodoroTimesProps) => void
) => {
  if (pomodoroTimes.newPomodoro !== 0) {
    setPomodoroTimes({
      ...pomodoroTimes,
      pomodoro: pomodoroTimes.newPomodoro,
      newPomodoro: 0
    });
  }
  if (pomodoroTimes.newShortBreak !== 0) {
    setPomodoroTimes({
      ...pomodoroTimes,
      shortBreak: pomodoroTimes.newShortBreak,
      newShortBreak: 0
    });
  }
  if (pomodoroTimes.newLongBreak !== 0) {
    setPomodoroTimes({
      ...pomodoroTimes,
      longBreak: pomodoroTimes.newLongBreak,
      newLongBreak: 0
    });
  }
};
