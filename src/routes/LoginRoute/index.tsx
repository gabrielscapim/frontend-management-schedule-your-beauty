import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from '../../pages/LoginPage/LoginPage';

function LoginRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/*"
          element={ <Navigate to="/login" replace /> }
        />
        <Route path="/login" element={ <LoginPage /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default LoginRoute;
