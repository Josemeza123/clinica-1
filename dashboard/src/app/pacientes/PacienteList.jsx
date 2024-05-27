import Image from "next/image";
import Link from "next/link";
import vista from "../../../public/view.svg";

function PacienteList({ paciente }) {
  return (
    <tr>
      <td className="bg-gray-300 border-black border-2 align-text-left">
        {paciente.dni}
      </td>
      <td className="bg-gray-300 border-black border-2 align-text-left">
        {paciente.nombre}
      </td>
      <td className="bg-gray-300 border-black border-2 align-text-left">
        {paciente.edad}
      </td>
      <td className="bg-gray-300 border-black border-2 align-text-left">
        {paciente.celular}
      </td>
      <td className="bg-gray-300 border-black border-2 align-text-left">
        {paciente.motivo_consulta}
      </td>
      <td className="bg-gray-300 border-black border-2 align-text-left">
        <Link href={`/pacientes/${paciente.id}`}>
          <Image src={vista} width={20} height={20} />
        </Link>
      </td>
    </tr>
  );
}

export default PacienteList;
