import RootPage from '../Pages/RootPage';
import ErrorPage from '../Pages/ErrorPage';
import HomePage from '../Pages/HomePage';
import FolderPage from '../Pages/FolderPage';

const routes: any[] = [
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/:id",
        element: <FolderPage />,
      },
    ],
  },
];

export default routes;