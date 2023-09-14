import { Route, createRoutesFromChildren } from 'react-router-dom';
import App from '../App';
import CodeNotesPage, { AllCodeDisplay } from '../Pages/CodeNotesPage';

const routes = createRoutesFromChildren(
  <Route path="/" element={<App />}>
    <Route path="/" element={<CodeNotesPage />} />
    <Route path="/code-notes" element={<AllCodeDisplay />} />
  </Route>,
);

export default routes;
