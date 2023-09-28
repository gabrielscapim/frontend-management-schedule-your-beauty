import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ManagerSchedules from '../pages/ManagerSchedules';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/agendamentos" element={ <ManagerSchedules /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
