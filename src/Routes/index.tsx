import { Outlet } from 'react-router-dom';
import RootPage from '../Pages/RootPage';
import ErrorPage from '../Pages/ErrorPage';

const Notes = () => {
  return (
    <>
      Notes!!
      <Outlet />
    </>
  );
}

const Questions = () => {
  return (
    <>
      Questions!!
      <Outlet />
    </>
  );
}

const routes: any[] = [
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "Notes",
        element: <Notes />,
      },
      {
        path: "Questions",
        element: <Questions />,
      },
    ],
  },
];

export default routes;