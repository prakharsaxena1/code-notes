import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

const Navbar = React.lazy(() => import('./Component/Navbar'));

const App: FC = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default App;
