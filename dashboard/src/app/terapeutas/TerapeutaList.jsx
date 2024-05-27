import Link from "next/link"


function TerapeutaList({ terapeuta }) {
  return (
    <tr>
      <td>{terapeuta.dni}</td>
      <td>{terapeuta.nombre}</td>
      <td>{terapeuta.especialidad}</td>
      <td>{terapeuta.telefono}</td>
      <td>
        <Link href={`/terapeutas/${terapeuta.id}`}>ver</Link>
      </td>
    </tr>
  )
}

export default TerapeutaList
