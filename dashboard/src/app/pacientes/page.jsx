import axios from "axios";
import PacienteList from "./PacienteList";

async function getPacientes() {
  const { data } = await axios.get("http://localhost:3000/api/pacientes");
  return data;
}
async function Pacientes() {
  const pacientes = await getPacientes();
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>DNI</th>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Telefono</th>
            <th>Dolencia</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {pacientes.map((paciente) => (
            <PacienteList paciente={paciente} key={paciente.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Pacientes;
