import axios from "axios";
import Buttons from "./Buttons";

async function getPacientes(pacienteId) {
  const { data } = await axios.get(
    `http://localhost:3000/api/pacientes/` + pacienteId
  );
  return data;
}

async function PacientePage({ params }) {
  const paciente = await getPacientes(params.id);
  return (
    <div>
      <section className="flex justify-center items-center">
        <div className="p-6">
          <h1 className="text-2xl font-bold">{paciente.nombre}</h1>
          <p className="text-lg">{paciente.dni}</p>
          <p className="text-lg">{paciente.nombre}</p>
          <p className="text-lg">{paciente.edad}</p>
          <p className="text-lg">{paciente.estado_civil}</p>
          <p className="text-lg">{paciente.ocupacion}</p>
          <p className="text-lg">{paciente.peso}</p>
          <p className="text-lg">{paciente.fecha_nacimiento}</p>
          <p className="text-lg">{paciente.talla}</p>
          <p className="text-lg">{paciente.direccion}</p>
          <p className="text-lg">{paciente.referencia}</p>
          <p className="text-lg">{paciente.celular}</p>
          <p className="text-lg">{paciente.motivo_consulta}</p>
          <p className="text-lg">{paciente.lugar_dolor}</p>
          <p className="text-lg">{paciente.caracteristica_dolor}</p>
          <p className="text-lg">{paciente.factores_dolor}</p>
          <p className="text-lg">{paciente.variacion_nocturna}</p>
          <p className="text-lg">{paciente.hta}</p>
          <p className="text-lg">{paciente.diabetes}</p>
          <p className="text-lg">{paciente.cancer}</p>
          <p className="text-lg">{paciente.cardiopatias}</p>
          <p className="text-lg">{paciente.patologias}</p>
          <p className="text-lg">{paciente.reumatologia}</p>
          <p className="text-lg">{paciente.cirugias}</p>
          <p className="text-lg">{paciente.alergias}</p>
          <p className="text-lg">{paciente.accidentes}</p>
          <p className="text-lg">{paciente.fracturas}</p>
          <p className="text-lg">{paciente.temperatura}</p>
          <p className="text-lg">{paciente.presion_arterial}</p>
          <p className="text-lg">{paciente.f_c}</p>
          <p className="text-lg">{paciente.f_r}</p>
          <p className="text-lg">{paciente.spo2}</p>
          <p className="text-lg">{paciente.evaluacion_fisica}</p>
          <p className="text-lg">{paciente.plan_tratamiento}</p>
          <Buttons productId={paciente.id} />
        </div>
      </section>
    </div>
  );
}

export default PacientePage;
