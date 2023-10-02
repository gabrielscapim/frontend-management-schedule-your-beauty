import Client from './Client';
import Production from './Production';
import SchedulingDateTime from './SchedulingDateTime';

type Schedule = {
  id: number;
  client: Client;
  production: Production;
  schedulingDateTimes: SchedulingDateTime[];
  eventName: string;
  startTime: string,
  date: string,
};

export default Schedule;
