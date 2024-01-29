import axios from 'axios';

const login = async (username: string, password: string): Promise<void> => {
  const URL: string = import.meta.env.VITE_API_URL;

  try {
    const { token } = await axios
      .post(`${URL}/auth/login`, { username, password }) as any;
    localStorage.setItem('token', token);
  } catch (error) {
    console.log(error);
  }
};

export default login;
