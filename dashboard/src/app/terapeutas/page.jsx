import axios from "axios";
import TerapeutaList from "./TerapeutaList";
import Th from "@/components/ui/Th";

async function getTerapeutas() {
  const { data } = await axios.get("http://localhost:3000/api/terapeutas");
  return data;
}

async function Terapeutas() {
  const terapeutas = await getTerapeutas();
  return (
    <div>
      <table className="table-fixed w-full">
        <thead>
          <tr>
            <Th>DNI</Th>
            <Th>NOMBRE</Th>
            <Th>ESPECIALIDAD</Th>
            <Th>TELEFONO</Th>
            <Th>Acciones</Th>
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
