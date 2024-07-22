import { createTheme } from '@vanilla-extract/css';

export const [themeClass, vars] = createTheme({
  color: {
    bgDark: 'blue',
    textLight: '#fff'
  },
});