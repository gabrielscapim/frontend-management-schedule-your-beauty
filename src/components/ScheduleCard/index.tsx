import Schedule from '../../types/Schedule';
import styles from './ScheduleCard.module.css';

interface ScheduleCardProps {
  schedule: Schedule;
}

function ScheduleCard({ schedule }: ScheduleCardProps) {
  const contactHandleClick = (number: string) => {
    window.location.href = `https://wa.me/55${number}`;
  };

  const {
    clientName,
    clientNumber,
    date,
    startTime,
    productionName,
    eventName,
  } = schedule;
  return (
    <div className={ styles['schedule-card-container'] }>
      <div className={ styles['column-1'] }>
        <h5>{ clientName }</h5>
        <h6>{ `${date} às ${startTime}` }</h6>
        <span>{ productionName.toLocaleUpperCase() }</span>
        <span>{ eventName.toLocaleUpperCase() }</span>
      </div>
      <div className={ styles['column-2'] }>
        <button>
          <i className="bi bi-x-circle" style={ { color: '#b90b1d' } }> </i>
        </button>
        <button onClick={ () => contactHandleClick(clientNumber) }>
          <i className="bi bi-telephone-fill" style={ { color: '#4f388f' } }> </i>
        </button>
      </div>
    </div>
  );
}

export default ScheduleCard;
