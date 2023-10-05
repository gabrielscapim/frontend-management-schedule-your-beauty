/* eslint-disable sonarjs/no-duplicate-string */
import { useEffect, useState } from 'react';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import Checkbox from '../components/Checkbox';
import styles from './DatesPage.module.css';
import Input from '../components/Input';
import allTimes from '../assets/AllTimes';
import fetchSchedulingTimes from '../services/fetchSchedulingTimes';
import SchedulingTime from '../types/SchedulingTime';
import filterSchedulingTimes from '../helpers/filterSchedulingTimes';
import Loading from '../components/Loading';
import Select from '../components/Select';
import Button from '../components/Button';
import getAvailableTimesSelected from '../helpers/getAvailableTimesSelected';
import postSchedulingTimes from '../services/postSchedulingTimes';

function DatesPage() {
  const navigate = useNavigate();
  const CURRENT_DATE = moment().format('YYYY-MM-DD');
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());

  const [timesFromApi, setTimesFromApi] = useState<SchedulingTime[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [state, setState] = useState<any>({
    date: params.date || CURRENT_DATE,
    lastTimeToSchedule: 'Nenhum horário',
  });
  const [dateSearched, setDateSearched] = useState<string>(state.date);

  const getSchedulingTimes = async () => {
    setIsLoading(true);
    setDateSearched(state.date);
    const schedulingTimes = await fetchSchedulingTimes(state.date);
    const filteredSchedulingTimes = filterSchedulingTimes(schedulingTimes);
    const lastTimeToSchedule = schedulingTimes
      .find((time) => time.lastScheduleTimeDay === true)?.time;

    setTimesFromApi(schedulingTimes);
    setState((prevState: any) => ({
      ...prevState,
      lastTimeToSchedule: lastTimeToSchedule || 'Nenhum horário',
      ...allTimes,
      ...filteredSchedulingTimes }));
    setIsLoading(false);
  };

  const handleUpdateTimes = async () => {
    if (window.confirm('Deseja atualizar os horários de agendamento?')) {
      await postSchedulingTimes(dateSearched, state, timesFromApi);
      window.alert('Horários atualizados com sucesso!');
      navigate(`/datas?date=${dateSearched}`);
    }
  };

  useEffect(() => {
    getSchedulingTimes();
  }, []);

  const handleChange = ({ target }:
  React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value, type } = target;
    return setState((prevState: any) => ({
      ...prevState,
      [name]: type === 'checkbox' && target instanceof HTMLInputElement
        ? target.checked : value,
    }));
  };

  return (
    <section className={ styles['page-container'] }>
      <h5 className={ styles['page-title'] }>DATAS</h5>
      <h6 className={ styles['date-title'] }>
        { moment(dateSearched).format('DD/MM/YYYY') }
      </h6>
      <div className={ styles['search-container'] }>
        <Input
          type="date"
          id="date"
          label=""
          name="date"
          value={ state.date }
          handleChange={ handleChange }
        />
        <button
          className={ styles['search-btn'] }
          onClick={ getSchedulingTimes }
        >
          <i className="bi bi-search"> </i>
        </button>
      </div>
      { isLoading && <Loading /> }
      { !isLoading && (
        <>
          <div className={ styles['times-container'] }>
            <h6>Selecione os horários que você pode realizar uma produção</h6>
            <div className={ styles['checkbox-container'] }>
              { Object.keys(allTimes).map((time) => (
                <Checkbox
                  key={ time }
                  id={ time }
                  label={ time }
                  handleChange={ handleChange }
                  name={ time }
                  disabled={ timesFromApi.some((timeFromApi) => (
                    timeFromApi.time === time && !timeFromApi.available
                  )) }
                  checked={ state[time as keyof typeof allTimes] }
                />
              )) }
            </div>
            { timesFromApi.some((time) => time.lastScheduleTimeDay === true
            && !time.available) ? (
              <span>
                { `
                Último horário do dia (sem disponibilidade): ${
                  timesFromApi.find((time) => time.lastScheduleTimeDay === true)?.time} 
                  Hrs` }
              </span>
              ) : (
                <Select
                  id="lastTimeToSchedule"
                  label="Último horário disponível para agendamento"
                  handleChange={ handleChange }
                  options={ ['Nenhum horário',
                    getAvailableTimesSelected(state, timesFromApi).slice(-1)[0]] }
                  name="lastTimeToSchedule"
                  disabled={ (Object
                    .keys(state).filter((key) => (state[key] === true))).length === 0 }
                  value={ state.lastTimeToSchedule }
                />
              ) }
          </div>
          <div className={ styles['button-container'] }>
            <Button
              label="Atualizar horários"
              handleClick={ handleUpdateTimes }
            />
          </div>
        </>
      ) }
    </section>
  );
}

export default DatesPage;
