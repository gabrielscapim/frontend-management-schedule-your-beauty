import apiRequest from './apiRequest';

const login = async (username: string, password: string): Promise<void> => {
  const body = { username, password };
  const { token } = await apiRequest('post', '/auth/login', body);

  localStorage.setItem('token', token);
};

export default login;
