import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ManagerSchedulesPage from '../pages/ManagerSchedulesPage';
import DatesPage from '../pages/DatesPage';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/agendamentos" element={ <ManagerSchedulesPage /> } />
        <Route path="/datas" element={ <DatesPage /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
