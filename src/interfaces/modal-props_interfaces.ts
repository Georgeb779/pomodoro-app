export type ModalProps = {
  useFont: { activeFont: string; newFont: string };
  useColor: { activeColor: string; newColor: string };
  setUseFont: (useFont: { activeFont: string; newFont: string }) => void;
  setPomodoroTimes: (pomodoroTimes: {
    pomodoro: number;
    shortBreak: number;
    longBreak: number;
  }) => void;
  setUseColor: (useColor: { activeColor: string; newColor: string }) => void;
};
