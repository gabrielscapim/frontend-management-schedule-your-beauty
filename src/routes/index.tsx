import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ManagerSchedulesPage from '../pages/ManagerSchedulesPage';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/agendamentos" element={ <ManagerSchedulesPage /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
