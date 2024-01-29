import { Outlet, Navigate } from 'react-router-dom';

function LoginRedirect() {
  const token = localStorage.getItem('token');

  return (
    token ? <Navigate to="/" /> : <Outlet />
  );
}

export default LoginRedirect;
