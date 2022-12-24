import React from "react";
import { FontItemProps } from "@interfaces";
import { Button } from "@/components/Button";

export function FontItem({ useFont, fonts, setUseFont }: FontItemProps) {
  return (
    <>
      {fonts.map((font: string, index) => {
        return (
          <Button
            key={index}
            text='Aa'
            type={`font_item ${
              useFont.newFont !== ""
                ? useFont.newFont === font && "active"
                : useFont.activeFont === font && "active"
            } `}
            onClick={() => {
              setUseFont({
                activeFont: useFont.activeFont,
                newFont: font
              });
            }}
          />
        );
      })}
    </>
  );
}
