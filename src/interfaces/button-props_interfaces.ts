import { ReactFragment } from "react";

export type ButtonProps = {
  text?: string;
  color?: string;
  type?: string;
  icon?: string | ReactFragment | JSX.Element;
  onClick?: () => void;
};
