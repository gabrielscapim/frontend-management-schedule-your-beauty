import AllTimesInterface from '../interfaces/AllTimeInterface';
import SchedulingTime from '../types/SchedulingTime';

const filterSchedulingTimes = (timesFromApi: SchedulingTime[]) => {
  return timesFromApi
    .reduce((acc: AllTimesInterface, time: SchedulingTime) => {
      acc[time.time] = true;
      return acc;
    }, {} as AllTimesInterface);
};

export default filterSchedulingTimes;
