import whatsappHandleClick from '../../helpers/whatsappHandleClick';
import Schedule from '../../types/Schedule';
import styles from './ScheduleTable.module.css';

interface ScheduleTableProps {
  schedules: Schedule[];
}

function ScheduleTable({ schedules }: ScheduleTableProps) {
  return (
    <table className={ styles.table }>
      <thead>
        <tr>
          <th className={ styles['first-column'] }>NOME</th>
          <th>DATA</th>
          <th>HORÁRIO</th>
          <th>PRODUÇÃO</th>
          <th>EVENTO</th>
          <th> </th>
          <th className={ styles['last-column'] }> </th>
        </tr>
      </thead>
      <tbody>
        { schedules.map((
          { id,
            clientName,
            clientNumber,
            date,
            startTime,
            productionName,
            eventName,
          },
        ) => (
          <tr key={ `schedule-${id}` }>
            <td style={ { fontWeight: 'bold' } }>{clientName}</td>
            <td>{date}</td>
            <td>{startTime}</td>
            <td>{productionName}</td>
            <td>{eventName}</td>
            <td className={ styles['handle-column'] }>
              <button
                onClick={ () => whatsappHandleClick(clientNumber) }
                style={ { color: '#765ac2', fontWeight: 'bold' } }
              >
                Contato
              </button>
            </td>
            <td className={ styles['handle-column'] }>
              <button style={ { color: '#dc3545', fontWeight: 'bold' } }>
                Cancelar
              </button>
            </td>
          </tr>
        )) }
      </tbody>
    </table>
  );
}

export default ScheduleTable;
