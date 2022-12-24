import { ReactFragment } from "react";

export type ColorItemProps = {
  useColor: { activeColor: string; newColor: string };
  colors: string[];
  icon: string | ReactFragment | JSX.Element;
  setUseColor: (useColor: { activeColor: string; newColor: string }) => void;
};
