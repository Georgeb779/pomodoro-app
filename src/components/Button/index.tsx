import React from "react";
import { ButtonProps } from "@/interfaces";
import "./index.scss";

export function Button({ text, color, type, onClick, icon }: ButtonProps) {
  return (
    <>
      <button onClick={onClick} className={`btn btn--${type}`}>
        {text && text.length > 0 ? text : icon}
      </button>
    </>
  );
}
