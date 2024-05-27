import { NextResponse } from "next/server";
import { conn } from "../../libs/mysql";

export async function GET() {
  try {
    const result = await conn.query("SELECT * FROM productos");
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const { name, descripcion, price, stock } = await request.json();

    const result = await conn.query("INSERT INTO productos SET ?", {
      name,
      descripcion,
      price,
      stock,
    });
    console.log(result);
    return NextResponse.json({
      name,
      descripcion,
      price,
      stock,
      id: result.insertId,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
