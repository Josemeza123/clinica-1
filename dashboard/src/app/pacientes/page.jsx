import axios from "axios";
import PacienteList from "./PacienteList";
import Th from "@/components/ui/Th";

async function getPacientes() {
  const { data } = await axios.get("http://localhost:3000/api/pacientes");
  return data;
}
async function Pacientes() {
  const pacientes = await getPacientes();
  return (
    <div>
      <table className="table-fixed w-full">
        <thead>
          <tr>
            <Th>DNI</Th>
            <Th>Nombre</Th>
            <Th>Edad</Th>
            <Th>Telefono</Th>
            <Th>Referencia</Th>
            <Th>Dolencia</Th>
            <Th>Acciones</Th>
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
