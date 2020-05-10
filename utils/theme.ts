import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { red, common } from '@material-ui/core/colors';

// Create a theme instance.
// Theme Colors from - https://picular.co/rock
let theme = createMuiTheme({
  palette: {
    common: {
      white: common.white,
      black: '#333',
    },
    primary: {
      main: '#5491da',
      light: '#7ea7dd',
      dark: '#3f5ea5',
    },
    secondary: {
      main: '#8FADDC',
      light: '#C2D4F7',
      dark: '#6E7882',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#FFFFFF',
      paper: common.white,
    },
  },
  typography: {
    fontFamily: ['"Montserrat"', 'sans-serif'].join(','),
  },
});

theme = responsiveFontSizes(theme);

export default theme;
