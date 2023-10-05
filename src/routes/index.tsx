import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ManagerSchedulesPage from '../pages/ManagerSchedulesPage';
import DatesPage from '../pages/DatesPage';
import NotFoundPage from '../pages/NotFoundPage';
import MainPage from '../pages/MainPage';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <MainPage /> } />
        <Route path="/agendamentos" element={ <ManagerSchedulesPage /> } />
        <Route path="/datas" element={ <DatesPage /> } />
        <Route path="*" element={ <NotFoundPage /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
