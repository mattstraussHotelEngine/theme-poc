// NOTE: This file needs to be considered to be either deleted or modified as the sizes in here were mostly moved to the theme
export const breakpoints = {
  xs: 320,
  sm: 480,
  md: 576,
  lg: 768,
  xl: 992,
  xxl: 1200,
  xxxl: 1400,
} as const;

export const sizes = {
  breakpoints: {
    xs: `${breakpoints.xs}px`,
    sm: `${breakpoints.sm}px`,
    md: `${breakpoints.md}px`,
    lg: `${breakpoints.lg}px`,
    xl: `${breakpoints.xl}px`,
    xxl: `${breakpoints.xxl}px`,
    xxxl: `${breakpoints.xxxl}px`,
  },
} as const;
