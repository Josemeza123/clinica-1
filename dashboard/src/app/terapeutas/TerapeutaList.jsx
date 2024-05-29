import Td from "@/components/ui/Td";
import Link from "next/link";

function TerapeutaList({ terapeuta }) {
  return (
    <tr>
      <Td>{terapeuta.dni}</Td>
      <Td>{terapeuta.nombre}</Td>
      <Td>{terapeuta.especialidad}</Td>
      <Td>{terapeuta.telefono}</Td>
      <Td>
        <Link href={`/terapeutas/${terapeuta.id}`}>ver</Link>
      </Td>
    </tr>
  );
}

export default TerapeutaList;
