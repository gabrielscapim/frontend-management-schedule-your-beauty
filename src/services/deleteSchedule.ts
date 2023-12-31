import apiRequest from './apiRequest';

const deleteSchedule = async (id: number) => {
  if (window.confirm('Deseja cancelar o agendamento?')) {
    await apiRequest('delete', `/schedule/${id}`);
    window.alert('Agendamento cancelado com sucesso!');
    window.location.reload();
  }
};

export default deleteSchedule;
