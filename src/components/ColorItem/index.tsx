import React from "react";
import { ColorItemProps } from "@interfaces";
import { Button } from "@/components/Button";

export function ColorItem({
  useColor,
  colors,
  icon,
  setUseColor
}: ColorItemProps) {
  return (
    <>
      {colors.map((color, index) => {
        return (
          <Button
            key={index}
            type={`color_item ${
              useColor.newColor !== ""
                ? useColor.newColor === color && "active"
                : useColor.activeColor === color && "active"
            } `}
            icon={icon}
            onClick={() => {
              setUseColor({
                activeColor: useColor.activeColor,
                newColor: color
              });
            }}
          />
        );
      })}
    </>
  );
}
