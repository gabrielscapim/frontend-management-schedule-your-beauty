import Schedule from '../types/Schedule';

const SchedulesMock: Schedule[] = [
  {
    id: 2,
    client: {
      id: 3,
      name: 'Isabela',
      number: '88888888888',
    },
    production: {
      id: 3,
      name: 'Penteado',
      price: 50,
    },
    startTime: '12:30:00',
    date: '26/09/2023',
    schedulingDateTimes: [
      {
        id: 2,
        dateTime: '2023-09-26 12:30:00',
        lastScheduleTimeDay: false,
        available: false,
      },
    ],
    eventName: 'Formatura',
  },
  {
    id: 3,
    client: {
      id: 4,
      name: 'isa',
      number: '44991343233',
    },
    production: {
      id: 2,
      name: 'Maquiagem',
      price: 130,
    },
    startTime: '13:30:00',
    date: '26/09/2023',
    schedulingDateTimes: [
      {
        id: 4,
        dateTime: '2023-09-26 13:30:00',
        lastScheduleTimeDay: false,
        available: false,
      },
      {
        id: 5,
        dateTime: '2023-09-26 14:00:00',
        lastScheduleTimeDay: false,
        available: false,
      },
      {
        id: 6,
        dateTime: '2023-09-26 14:30:00',
        lastScheduleTimeDay: false,
        available: false,
      },
    ],
    eventName: 'casamento',
  },
];

export default SchedulesMock;
