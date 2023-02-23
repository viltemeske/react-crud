import { createTheme } from '@mui/material';

const theme = createTheme({
  zIndex: {
    appBar: 1201,
  },
  typography: {
    fontFamily: [
      'Courier New, monospace',
      'Roboto',
    ].join(','),
  },
  palette: {
    primary: {
      main: '#424242',
    },
    secondary: {
      main: '#9e9e9e',
    },
  },
  shape: {
    borderRadius: 0,
  },
});

export default theme;
