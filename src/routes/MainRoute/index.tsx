import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ManagerSchedulesPage from '../../pages/ManagerSchedulesPage/ManagerSchedulesPage';
import DatesPage from '../../pages/DatesPage/DatesPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import MainPage from '../../pages/MainPage/MainPage';

function MainRoutes() {
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

export default MainRoutes;
