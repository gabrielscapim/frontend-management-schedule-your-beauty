/* eslint-disable sonarjs/no-duplicate-string */
import Schedule from '../types/Schedule';

const SchedulesMock: Schedule[] = [
  {
    id: 1,
    clientName: 'Gabriel',
    date: '26/09/2023',
    startTime: '12:00:00',
    productionName: 'Penteado',
    eventName: 'Formatura',
    clientNumber: '11111111111',
  },
  {
    id: 2,
    clientName: 'Isabela',
    date: '26/09/2023',
    startTime: '12:30:00',
    productionName: 'Penteado',
    eventName: 'Formatura',
    clientNumber: '88888888888',
  },
  {
    id: 3,
    clientName: 'isa',
    date: '26/09/2023',
    startTime: '13:30:00',
    productionName: 'Maquiagem',
    eventName: 'casamento',
    clientNumber: '44991343233',
  },
];

export default SchedulesMock;
