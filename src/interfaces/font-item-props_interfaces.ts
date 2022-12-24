import { ReactFragment } from "react";

export type FontItemProps = {
  useFont: { activeFont: string; newFont: string };
  fonts: string[];
  setUseFont: (useFont: { activeFont: string; newFont: string }) => void;
};
