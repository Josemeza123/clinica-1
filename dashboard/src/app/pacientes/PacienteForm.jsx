"use client";

import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { useRouter, useParams } from "next/navigation";

function PacienteForm() {
  const [paciente, setPaciente] = useState({
    dni: "",
    nombre: "",
    edad: "",
    estado_civil: "",
    ocupacion: "",
    peso: 0,
    fecha_nacimiento: "",
    talla: 0,
    direccion: "",
    referencia: "",
    celular: "",
    motivo_consulta: "",
    lugar_dolor: "",
    caracteristica_dolor: "",
    factores_dolor: "",
    variacion_nocturna: "",
    hta: 0,
    diabetes: 0,
    cancer: 0,
    cardiopatias: "",
    patologias: "",
    reumatologia: "",
    cirugias: "",
    alergias: "",
    accidentes: "",
    fracturas: "",
    temperatura: "",
    presion_arterial: "",
    f_c: "",
    f_r: "",
    spo2: "",
    evaluacion_fisica: "",
    plan_tratamiento: "",
  });

  const router = useRouter();
  const form = useRef(null);
  const params = useParams();

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    setPaciente({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (params.id) {
      axios.get(`/api/pacientes/${params.id}`).then((res) => {
        setPaciente({
          dni: res.data.dni,
          nombre: res.data.nombre,
          edad: res.data.edad,
          estado_civil: res.data.estado_civil,
          ocupacion: res.data.ocupacion,
          peso: res.data.peso,
          fecha_nacimiento: res.data.fecha_nacimiento,
          talla: res.data.talla,
          direccion: res.data.direccion,
          referencia: res.data.referencia,
          celular: res.data.celular,
          motivo_consulta: res.data.motivo_consulta,
          lugar_dolor: res.data.lugar_dolor,
          caracteristica_dolor: res.data.caracteristica_dolor,
          factores_dolor: res.data.factores_dolor,
          variacion_nocturna: res.data.variacion_nocturna,
          hta: res.data.hta,
          diabetes: res.data.diabetes,
          cancer: res.data.cancer,
          cardiopatias: res.data.cardiopatias,
          patologias: res.data.patologias,
          reumatologia: res.data.reumatologia,
          cirugias: res.data.cirugias,
          alergias: res.data.alergias,
          accidentes: res.data.accidentes,
          fracturas: res.data.fracturas,
          temperatura: res.data.temperatura,
          presion_arterial: res.data.presion_arterial,
          f_c: res.data.f_c,
          f_r: res.data.f_r,
          spo2: res.data.spo2,
          evaluacion_fisica: res.data.evaluacion_fisica,
          plan_tratamiento: res.data.plan_tratamiento,
        });
      });
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!params.id) {
      const res = await axios.post("/api/pacientes", paciente);
    } else {
      const res = await axios.put("/api/pacientes/" + params.id, paciente);
    }
    form.current.reset();
    router.refresh();
    router.push("/pacientes");
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
          htmlFor="dni  "
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          DNI
        </label>
        <input
          type="text"
          id="dni"
          name="dni"
          autoFocus
          placeholder="Nombre del producto"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={handleChange}
          value={paciente.dni}
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
          placeholder="Pedro Perez"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={handleChange}
          value={paciente.nombre}
        />

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          {params.id ? "Update" : "Create"}
        </button>
      </form>
    </div>
  );
}

export default PacienteForm;
