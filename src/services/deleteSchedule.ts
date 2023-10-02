import apiRequest from './apiRequest';

const deleteSchedule = async (id: number) => {
  await apiRequest('delete', `/schedule/${id}`);
};

export default deleteSchedule;
