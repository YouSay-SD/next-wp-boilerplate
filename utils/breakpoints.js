// Window Width
const width = window.innerWidth;

// Breakpoints
const breakpoints = {
  xxs: 321,
  xs: 576,
  sm: 768,
  md: 992,
  l: 1080,
  lg: 1200,
};

// Respond Below
export const respondBelow = size => width <= breakpoints[size];

// Respond Above
export const respondAbove = size => width >= breakpoints[size];
