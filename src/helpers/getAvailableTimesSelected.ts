import SchedulingTime from '../types/SchedulingTime';

const getAvailableTimesSelected = (state: any, timesFromApi: SchedulingTime[]) => {
  const timesSelected = Object.keys(state).filter((key) => (
    state[key] === true
  ));
  const availableTimesSelected = timesSelected.filter((timeSelected) => (
    !timesFromApi.some((timeFromApi) => (
      timeFromApi.time === timeSelected && !timeFromApi.available
    ))
  ));

  return availableTimesSelected;
};

export default getAvailableTimesSelected;
