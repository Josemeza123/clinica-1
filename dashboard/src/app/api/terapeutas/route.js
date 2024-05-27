import { conn } from "@/app/libs/mysql";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const results = await conn.query("SELECT * FROM terapeutas");
    return NextResponse.json(results);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const { dni, nombre, especialidad ,telefono} = await request.json();
    const result = await conn.query("INSERT INTO terapeutas SET ?", {
      dni,
      nombre,
      especialidad,
      telefono,
    });
    return NextResponse.json({
      dni,
      nombre,
      especialidad,
      telefono,
      id: result.insertId,
    });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
