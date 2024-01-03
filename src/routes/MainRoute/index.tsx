import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ManagerSchedulesPage from '../../pages/ManagerSchedulesPage/ManagerSchedulesPage';
import DatesPage from '../../pages/DatesPage/DatesPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import MainPage from '../../pages/MainPage/MainPage';
import LoginPage from '../../pages/LoginPage/LoginPage';

function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <MainPage /> } />
        <Route path="/login" element={ <LoginPage /> } />
        <Route path="/agendamentos" element={ <ManagerSchedulesPage /> } />
        <Route path="/datas" element={ <DatesPage /> } />
        <Route path="*" element={ <NotFoundPage /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default MainRoutes;
