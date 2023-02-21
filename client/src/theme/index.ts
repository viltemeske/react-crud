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
    secondary: {
      main: '#9e9e9e',
    },
  },
});

export default theme;
