import React from "react";

type PomodoroTimeInputProps = {
  label: string;
  name: string;
  id: string;
  value: number;
  setValue: (value: number) => void;
};

export function PomodoroTimeInput({
  label,
  name,
  id,
  value,
  setValue
}: PomodoroTimeInputProps) {
  return (
    <span>
      <label htmlFor={id}>{label}</label>{" "}
      <input
        type='number'
        name={name}
        id={id}
        value={value}
        onChange={(e) => {
          setValue(Number(e.target.value));
        }}
        min={0}
        max={60}
        step={1}
      />
    </span>
  );
}
