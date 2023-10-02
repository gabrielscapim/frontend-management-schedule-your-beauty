import React, { useEffect, useState } from 'react';
import moment from 'moment';
import Input from '../components/Input';
import ScheduleCard from '../components/ScheduleCard';
import ScheduleTable from '../components/ScheduleTable';
import styles from './ManagerSchedulesPage.module.css';
import Schedule from '../types/Schedule';
import fetchSchedules from '../services/fetchSchedules';
import Loading from '../components/Loading';

function ManagerSchedulesPage() {
  const [schedules, setSchedules] = useState<[] | Schedule[]>();
  const [state, setState] = useState<{ scheduleDate: string }>({
    scheduleDate: moment().format('YYYY-MM-DD'),
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [dateSearched, setDateSearched] = useState<string>(state.scheduleDate);

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    return setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const getSchedules = async () => {
    setIsLoading(true);
    setDateSearched(state.scheduleDate);
    setSchedules(await fetchSchedules(state.scheduleDate));
    setIsLoading(false);
  };

  useEffect(() => {
    getSchedules();
  }, []);

  return (
    <section className={ styles['page-container'] }>
      <h5 className={ styles['page-title'] }>AGENDAMENTOS</h5>
      <h6 className={ styles['date-title'] }>
        { moment(dateSearched).format('DD/MM/YYYY') }
      </h6>
      <div className={ styles['search-container'] }>
        <Input
          type="date"
          id="scheduleDate"
          label=""
          name="scheduleDate"
          placeholder="Nome do cliente"
          value={ state.scheduleDate }
          handleChange={ handleChange }
        />
        <button
          className={ styles['search-btn'] }
          onClick={ getSchedules }
        >
          <i className="bi bi-search"> </i>
        </button>
      </div>
      { !isLoading && schedules && schedules?.length === 0 && (
        <h5 className={ styles['no-schedules-warning'] }>
          Não existem agendamentos para a data selecionada!
        </h5>
      ) }
      { isLoading && <Loading /> }
      { !isLoading && schedules && schedules?.length > 0 && (
        schedules.map((schedule) => (
          <ScheduleCard schedule={ schedule } key={ `schedule-id-${schedule.id}` } />
        ))
      )}
      { !isLoading && schedules && schedules?.length > 0 && (
        <ScheduleTable schedules={ schedules } />
      )}
    </section>
  );
}

export default ManagerSchedulesPage;
