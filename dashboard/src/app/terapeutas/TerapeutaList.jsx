import Link from "next/link";

function TerapeutaList({ terapeuta }) {
  return (
    <tr>
      <td className="bg-gray-300 border-black border-2 align-text-left">
        {terapeuta.dni}
      </td>
      <td className="bg-gray-300 border-black border-2 align-text-left">
        {terapeuta.nombre}
      </td>
      <td className="bg-gray-300 border-black border-2 align-text-left">
        {terapeuta.especialidad}
      </td>
      <td className="bg-gray-300 border-black border-2 align-text-left">
        {terapeuta.telefono}
      </td>
      <td className="bg-gray-300 border-black border-2 align-text-left">
        <Link href={`/terapeutas/${terapeuta.id}`}>ver</Link>
      </td>
    </tr>
  );
}

export default TerapeutaList;
