import apiRequest from './apiRequest';

const fetchSchedules = async (date: string) => {
  const schedules = await apiRequest('get', `/schedule/${date}`);
  return schedules;
};

export default fetchSchedules;
