import React from "react";
import { ButtonProps } from "@/interfaces";
import "./index.scss";

export function Button({ text, color, type, onClick }: ButtonProps) {
  return (
    <>
      <button onClick={onClick} className={`btn btn--${type}`}>
        {text}
      </button>
    </>
  );
}
