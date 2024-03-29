import axios from 'axios';

const URL: string = import.meta.env.VITE_API_URL;

const apiRequest = async (method: string, endpoint: string, data: any = null)
: Promise<any> => {
  try {
    let response;
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    switch (method.toLowerCase()) {
      case 'get':
        response = await axios.get(`${URL}${endpoint}`, config);
        break;
      case 'post':
        response = await axios.post(`${URL}${endpoint}`, data, config);
        break;
      case 'put':
        response = await axios.put(`${URL}${endpoint}`, data, config);
        break;
      case 'delete':
        response = await axios.delete(`${URL}${endpoint}`, config);
        break;
      default:
        throw new Error(`Invalid HTTP method: ${method}`);
    }

    return response.data;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export default apiRequest;
