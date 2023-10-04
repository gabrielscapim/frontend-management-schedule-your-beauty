import { useEffect, useState } from 'react';
import moment from 'moment';
import Checkbox from '../components/Checkbox';
import styles from './DatesPage.module.css';
import Input from '../components/Input';
import allTimes from '../assets/AllTimes';
import fetchSchedulingTimes from '../services/fetchSchedulingTimes';
import SchedulingTime from '../types/SchedulingTime';
import filterSchedulingTimes from '../helpers/filterSchedulingTimes';
import Loading from '../components/Loading';

function DatesPage() {
  const CURRENT_DATE = moment().format('YYYY-MM-DD');

  const [timesFromApi, setTimesFromApi] = useState<SchedulingTime[] | []>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [state, setState] = useState<any>({ scheduleDate: CURRENT_DATE });
  const [dateSearched, setDateSearched] = useState<string>(state.scheduleDate);

  const getSchedulingTimes = async () => {
    setIsLoading(true);
    setDateSearched(state.scheduleDate);
    const schedulingTimes = await fetchSchedulingTimes(state.scheduleDate);
    const filteredSchedulingTimes = filterSchedulingTimes(schedulingTimes);

    setTimesFromApi(schedulingTimes);
    setState((prevState: any) => ({
      ...prevState,
      ...allTimes,
      ...filteredSchedulingTimes }));
    setIsLoading(false);
  };

  useEffect(() => {
    getSchedulingTimes();
  }, []);

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked, type } = target;
    return setState((prevState: any) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
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
          id="scheduleDate"
          label=""
          name="scheduleDate"
          value={ state.scheduleDate }
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
        <div className={ styles['times-container'] }>
          <h6>Selecione os horários que você pode realizar uma produção.</h6>
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
        </div>
      ) }
    </section>
  );
}

export default DatesPage;
