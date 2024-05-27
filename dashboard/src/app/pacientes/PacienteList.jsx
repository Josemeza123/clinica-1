import Link from 'next/link'

function PacienteList({ paciente}) {
  return (
    <tr>
      <td>{paciente.dni}</td>
      <td>{paciente.nombre}</td>
      <td>{paciente.edad}</td>
      <td>{paciente.celular}</td>
      <td>{paciente.motivo_consulta}</td>
      <td>
        <Link href={`/pacientes/${paciente.id}`}>ver</Link>
      </td>
    </tr>
  )
}

export default PacienteList
