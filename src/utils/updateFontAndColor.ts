export const updateFontAndColor = (
  useColor: { activeColor: string; newColor: string },
  setUseColor: {
    (useColor: { activeColor: string; newColor: string }): void;
    (arg0: { activeColor: string; newColor: string }): void;
  },
  useFont: { activeFont: string; newFont: string },
  setUseFont: {
    (useFont: { activeFont: string; newFont: string }): void;
    (arg0: { activeFont: string; newFont: string }): void;
  }
) => {
  if (useColor.newColor !== useColor.activeColor && useColor.newColor !== "") {
    setUseColor({
      activeColor: useColor.newColor,
      newColor: ""
    });
  }
  if (useFont.newFont !== useFont.activeFont && useFont.newFont !== "") {
    setUseFont({
      activeFont: useFont.newFont,
      newFont: ""
    });
  }
};
