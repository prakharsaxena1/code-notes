import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';

const Navbar = React.lazy(() => import('./Component/Navbar'));

const theme = createTheme({
  typography: {
    fontFamily: ['Cairo Play', 'monospace', 'sans-serif'].join(','),
  },
});

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </ThemeProvider>
  );
};

export default App;
