import { Route, createRoutesFromChildren } from 'react-router-dom';
import App from '../App';
import HomePage from '../Pages/HomePage';
// const routes: any[] = [
//   {
//     path: "/",
//     element: <RootPage />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: "/",
//         element: <HomePage />,
//       },
//       {
//         path: "/:id",
//         element: <FolderPage />,
//       },
//     ],
//   },
// ];

const routes = createRoutesFromChildren(
  <Route path="/" element={<App />}>
    <Route path="/:id" element={<HomePage />} />
  </Route>,
);

export default routes;
