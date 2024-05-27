
import Buttons from "./Buttons";
import axios from "axios";

async function getTerapeuta(terapeutaId) {
  const { data } = await axios.get(
    `http://localhost:3000/api/terapeutas/` + terapeutaId
  );
  return data;
}

async function TerapeutaPage({ params }) {
  const terapeuta = await getTerapeuta(params.id);
  return (
    <section className="flex justify-center items-center">
      <div className="p-6">
        <h1 className="text-2xl font-bold">{terapeuta.nombre}</h1>
        <p className="text-lg">{terapeuta.dni}</p>
        <p className="text-lg">{terapeuta.especialidad}</p>
        <p className="text-lg">{terapeuta.telefono}</p>
        <Buttons terapeutaId={terapeuta.id} />
      </div>
    </section>
  );
}

export default TerapeutaPage;
