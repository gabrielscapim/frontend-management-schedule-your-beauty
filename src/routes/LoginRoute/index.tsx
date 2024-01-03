import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from '../../pages/LoginPage/LoginPage';

function LoginRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <LoginPage /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default LoginRoute;
