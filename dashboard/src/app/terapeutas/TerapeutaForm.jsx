"use client";
import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { useRouter, useParams } from "next/navigation";

function TerapeutaForm() {
  const [terapeuta, setTerapeuta] = useState({
    dni: "",
    nombre: "",
    especialidad: "",
    telefono: "",
  });
  const router = useRouter();
  const form = useRef(null);
  const params = useParams();

  const handleChange = (e) => {
    setTerapeuta({ ...terapeuta, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (params.id) {
      axios.get(`/api/terapeutas/${params.id}`).then((res) => {
        setTerapeuta({
          dni: res.data.dni,
          nombre: res.data.nombre,
          especialidad: res.data.especialidad,
          telefono: res.data.telefono,
        });
      });
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!params.id) {
      const res = await axios.post("/api/terapeutas", terapeuta);
    } else {
      const res = await axios.put("/api/terapeutas/" + params.id, terapeuta);
    }
    form.current.reset();
    router.refresh();
    router.push("/terapeutas");
  };

  return (
    <div>
      <form
        action=""
        className="bg-white shadow-md rounded-md px-8 py-6 pb-8 mb-4"
        onSubmit={handleSubmit}
        ref={form}
      >
        <label
          htmlFor="dni"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          DNI
        </label>
        <input
          type="text"
          id="dni"
          name="dni"
          autoFocus
          placeholder="DNI del terapeuta"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={handleChange}
          value={terapeuta.dni}
        />

        <label
          htmlFor="nombre"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Nombre
        </label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          placeholder="Nombre del terapeuta"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={handleChange}
          value={terapeuta.nombre}
        />
        <label
          htmlFor="especialidad"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Especialidad
        </label>
        <input
          type="text"
          id="especialidad"
          name="especialidad"
          placeholder="Terapia fisica"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={handleChange}
          value={terapeuta.especialidad}
        />

        <label
          htmlFor="telefono"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Telefono
        </label>
        <input
          type="text"
          id="telefono"
          name="telefono"
          placeholder="999999999"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={handleChange}
          value={terapeuta.telefono}
        />

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          {params.id ? "Update" : "Create"}
        </button>
      </form>
    </div>
  );
}

export default TerapeutaForm;
