import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#ff6f00',
    },
  },
  typography: {
    allVariants: {
      fontFamily: 'Cairo Play',
    },
  },
});

export default darkTheme;
