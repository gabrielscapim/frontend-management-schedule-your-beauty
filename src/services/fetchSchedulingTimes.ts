import SchedulingTime from '../types/SchedulingTime';
import apiRequest from './apiRequest';

const fetchSchedulingTimes = async (date: string): Promise<SchedulingTime[]> => {
  const schedulingTimes = await apiRequest(
    'get',
    `/scheduling-date-time/time/${date}`,
  );
  return schedulingTimes;
};

export default fetchSchedulingTimes;
