import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

const Navbar = React.lazy(() => import('../../Component/Navbar'));

const RootLayout: FC = () => {
  // const location = useLocation();
  // useEffect(() => {
  //   // Your function to be executed every time a different route is opened
  //   console.log(`The route has changed to ${location.pathname}`);
  // }, [location]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
