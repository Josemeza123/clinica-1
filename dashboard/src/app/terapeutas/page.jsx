import axios from "axios";
import TerapeutaList from "./TerapeutaList";

async function getTerapeutas() {
    const { data } = await axios.get("http://localhost:3000/api/terapeutas");
    return data;
    }

async function Terapeutas() {
    const terapeutas = await getTerapeutas();
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>DNI</th>
            <th>NOMBRE</th>
            <th>ESPECIALIDAD</th>
            <th>TELEFONO</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {terapeutas.map((terapeuta) => (
            <TerapeutaList terapeuta={terapeuta} key={terapeuta.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Terapeutas;
