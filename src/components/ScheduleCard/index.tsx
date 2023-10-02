import whatsappHandleClick from '../../helpers/whatsappHandleClick';
import deleteSchedule from '../../services/deleteSchedule';
import Schedule from '../../types/Schedule';
import styles from './ScheduleCard.module.css';

interface ScheduleCardProps {
  schedule: Schedule;
  cancelScheduleAvailable: boolean;
}

function ScheduleCard({ schedule, cancelScheduleAvailable }: ScheduleCardProps) {
  const {
    id,
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
        { cancelScheduleAvailable && (
          <button onClick={ () => deleteSchedule(id) }>
            <i className="bi bi-x-circle" style={ { color: '#b90b1d' } }> </i>
          </button>
        ) }
        <button onClick={ () => whatsappHandleClick(clientNumber) }>
          <i className="bi bi-telephone-fill" style={ { color: '#4f388f' } }> </i>
        </button>
      </div>
    </div>
  );
}

export default ScheduleCard;
