import getAvailableTimesSelected from '../helpers/getAvailableTimesSelected';
import SchedulingTime from '../types/SchedulingTime';
import apiRequest from './apiRequest';

const postSchedulingTimes = async (
  date: string,
  state: any,
  timesFromApi: SchedulingTime[],
): Promise<void> => {
  const { lastTimeToSchedule } = state;
  const availableTimesSelected = getAvailableTimesSelected(state, timesFromApi);
  const apiObject = {
    times: availableTimesSelected
      .filter((availableTimeSelected) => availableTimeSelected !== lastTimeToSchedule),
    ...(lastTimeToSchedule !== 'Nenhum horário' && { lastTimeToSchedule }),
  };

  await apiRequest('post', `/scheduling-date-time/time/${date}`, apiObject);
};

export default postSchedulingTimes;
