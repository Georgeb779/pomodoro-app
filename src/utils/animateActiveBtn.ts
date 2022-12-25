export const animateActiveBtn = (
  btn: string,
  setActiveBtn: (arg0: {
    [x: string]: boolean;
    btn1: boolean;
    btn2: boolean;
    btn3: boolean;
  }) => void
) => {
  setActiveBtn({
    btn1: false,
    btn2: false,
    btn3: false,
    [btn]: true
  });
};
