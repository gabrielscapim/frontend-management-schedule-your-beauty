import Input from '../components/Input';
import ScheduleCard from '../components/ScheduleCard';
import ScheduleTable from '../components/ScheduleTable';
import SchedulesMock from '../mocks/SchedulesMock';
import styles from './ManagerSchedulesPage.module.css';

function ManagerSchedulesPage() {
  return (
    <section className={ styles['page-container'] }>
      <h5 className={ styles['page-title'] }>AGENDAMENTOS</h5>
      <div className={ styles['search-container'] }>
        <Input type="date" id="none" label="" placeholder="Nome do cliente" />
        <button className={ styles['search-btn'] }>
          <i className="bi bi-search"> </i>
        </button>
      </div>
      { SchedulesMock.map((schedule) => (
        <ScheduleCard schedule={ schedule } key={ `schedule-id-${schedule.id}` } />
      )) }
      <ScheduleTable schedules={ SchedulesMock } />
    </section>
  );
}

export default ManagerSchedulesPage;
