import { conn } from "@/app/libs/mysql";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const result = await conn.query("SELECT * FROM pacientes");
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const {
      dni,
      nombre,
      edad,
      estado_civil,
      ocupacion,
      peso,
      fecha_nacimiento,
      talla,
      direccion,
      referencia,
      celular,
      motivo_consulta,
      lugar_dolor,
      caracteristica_dolor,
      factores_dolor,
      variacion_nocturna,
      hta,
      diabetes,
      cancer,
      cardiopatias,
      patologias,
      reumatologia,
      cirugias,
      alergias,
      accidentes,
      fracturas,
      temperatura,
      presion_arterial,
      f_c,
      f_r,
      spo2,
      evaluacion_fisica,
      plan_tratamiento,
    } = await request.json();

    const result = await conn.query("INSERT INTO pacientes SET ?", {
      dni,
      nombre,
      edad,
      estado_civil,
      ocupacion,
      peso,
      fecha_nacimiento,
      talla,
      direccion,
      referencia,
      celular,
      motivo_consulta,
      lugar_dolor,
      caracteristica_dolor,
      factores_dolor,
      variacion_nocturna,
      hta,
      diabetes,
      cancer,
      cardiopatias,
      patologias,
      reumatologia,
      cirugias,
      alergias,
      accidentes,
      fracturas,
      temperatura,
      presion_arterial,
      f_c,
      f_r,
      spo2,
      evaluacion_fisica,
      plan_tratamiento,
    });
    console.log(result);
    return NextResponse.json({
      dni,
      nombre,
      edad,
      estado_civil,
      ocupacion,
      peso,
      fecha_nacimiento,
      talla,
      direccion,
      referencia,
      celular,
      motivo_consulta,
      lugar_dolor,
      caracteristica_dolor,
      factores_dolor,
      variacion_nocturna,
      hta,
      diabetes,
      cancer,
      cardiopatias,
      patologias,
      reumatologia,
      cirugias,
      alergias,
      accidentes,
      fracturas,
      temperatura,
      presion_arterial,
      f_c,
      f_r,
      spo2,
      evaluacion_fisica,
      plan_tratamiento,
      id: result.insertId,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
