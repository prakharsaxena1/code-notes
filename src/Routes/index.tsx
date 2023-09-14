import { Route, createRoutesFromChildren } from 'react-router-dom';
import App from '../App';
import CodeNotesPage from '../Pages/CodeNotesPage';
import NotesDisplay from '../Pages/NotesDisplay';

const routes = createRoutesFromChildren(
  <Route path="/" element={<App />}>
    <Route path="/" element={<CodeNotesPage />} />
    <Route path="/code-notes" element={<NotesDisplay />} />
  </Route>,
);

export default routes;
