import Image from "next/image";
import Link from "next/link";
import vista from "../../../public/view.svg";
import Td from "@/components/ui/Td";

function PacienteList({ paciente }) {
  return (
    <tr>
      <Td>{paciente.dni}</Td>
      <Td>{paciente.nombre}</Td>
      <Td>{paciente.edad}</Td>
      <Td>{paciente.celular}</Td>
      <Td>{paciente.referencia}</Td>
      <Td>{paciente.motivo_consulta}</Td>
      <Td>
        <Link href={`/pacientes/${paciente.id}`}>
          <Image src={vista} width={20} height={20} />
        </Link>
      </Td>
    </tr>
  );
}

export default PacienteList;
