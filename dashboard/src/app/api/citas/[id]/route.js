import { conn } from "@/app/libs/mysql";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const result = await conn.query("SELECT * FROM citas WHERE id = ?", [
      params.id,
    ]);
    if (result.length === 0)
      return NextResponse.json(
        {
          message: "Cita not found",
        },
        { status: 404 }
      );
    return NextResponse.json(result[0]);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

// actualizando un producto por su id
export async function PUT(request, { params }) {
  try {
    const data = await request.json();
    const result = await conn.query("UPDATE citas SET ? WHERE id = ?", [
      data,
      params.id,
    ]);
    if (result.affectedRows === 0) {
      return NextResponse.json(
        {
          message: "Cita not found",
        },
        { status: 404 }
      );
    }
    const updatedCita = await conn.query("SELECT * FROM citas WHERE id = ?", [
      params.id,
    ]);

    return NextResponse.json(updatedCita[0]);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

// eliminando un producto por su id
export async function DELETE(request, { params }) {
  try {
    const result = await conn.query("DELETE FROM citas WHERE id = ?", [
      params.id,
    ]);
    if (result.affectedRows === 0) {
      return NextResponse.json(
        {
          message: "Cita not found",
        },
        { status: 404 }
      );
    }

    return new Response(null, {
      status: 204,
    });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
