/* eslint-disable react/jsx-max-depth */
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import ManagerSchedulesPage from './pages/ManagerSchedulesPage/ManagerSchedulesPage';
import MainPage from './pages/MainPage/MainPage';
import DatesPage from './pages/DatesPage/DatesPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import PrivateRoutes from './routes/PrivateRoutes';
import LoginRedirect from './routes/LoginRedirect';
import LoginPage from './pages/LoginPage/LoginPage';
import SideBar from './components/SideBar';

function App() {
  const dateNow = Date.now();
  const tokenGenerationTime = Number(localStorage.getItem('tokenGenerationTime'));
  const TOKEN_EXPIRATION_TIME = 28800000;

  if (tokenGenerationTime && (dateNow - tokenGenerationTime > TOKEN_EXPIRATION_TIME)) {
    localStorage.removeItem('token');
    localStorage.removeItem('tokenGenerationTime');
  }

  return (
    <div className="App">
      <main>
        {localStorage.getItem('token') && <SideBar />}
        <BrowserRouter>
          <Routes>
            <Route element={ <PrivateRoutes /> }>
              <Route path="/" element={ <MainPage /> } />
              <Route path="/agendamentos" element={ <ManagerSchedulesPage /> } />
              <Route path="/datas" element={ <DatesPage /> } />
              <Route path="*" element={ <NotFoundPage /> } />
            </Route>
            <Route element={ <LoginRedirect /> }>
              <Route path="*" element={ <Navigate to="login" replace /> } />
              <Route path="/login" Component={ LoginPage } />
            </Route>
          </Routes>
        </BrowserRouter>
      </main>
      <Footer />
    </div>
  );
}

export default App;
