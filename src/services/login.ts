import axios from 'axios';

const login = async (username: string, password: string): Promise<string> => {
  const URL: string = import.meta.env.VITE_API_URL;

  const { data: { token } } = await axios
    .post(`${URL}/auth/login`, { username, password }) as any;

  return token;
};

export default login;
