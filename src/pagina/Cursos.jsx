import React from "react";
import java from '../img/java.jpg';
import front from '../img/front.jpg'
import linux from '../img/linux.jpg'
import bases from '../img/bases.jpg'
import CursoTarjeta from "../componentes/CursoTarjeta";


const cursos = [
  {
    id: 1,
    titulo: "Desarrollo Backend con Java y Spring",
    categoria: "Programación",
    duracion: "6 meses",
    precio: "$120.000 ARS",
    descripcion: "Aprende arquitectura limpia, APIs RESTful, persistencia con bases de datos SQL y despliegue profesional.",
    imagen: java,
  },
  {
    id: 2,
    titulo: "Frontend Moderno con React y Tailwind",
    categoria: "Diseño Web",
    duracion: "4 meses",
    precio: "$95.000 ARS",
    descripcion: "Domina componentes funcionales, consumo de APIs asíncronas, enrutamiento dinámico y diseño responsivo.",
    imagen: front,
  },
  {
    id: 3,
    titulo: "Administración de Sistemas Linux & DevOps",
    categoria: "Infraestructura",
    duracion: "5 meses",
    precio: "$110.000 ARS",
    descripcion: "Gestión de servidores, automatización de tareas en terminal, Docker containers y redes seguras.",
    imagen: linux,
  },
  {
    id: 4,
    titulo: "Bases de Datos Relacionales y SQL",
    categoria: "Datos",
    duracion: "3 meses",
    precio: "$80.000 ARS",
    descripcion: "Diseño de modelos entidad-relación, consultas complejas, índices, optimización y procedimientos almacenados.",
    imagen: bases,
  }
];

export default function Cursos() {
  return (
    <>
      <div className="max-w-6xl mx-auto p-6 mb-12">
        <h1 className="text-3xl font-extrabold text-slate-800 text-center mb-4">
          Sumérgete en Tecnología
        </h1>
        <p className="text-center text-xl text-emerald-700 mb-4">Nuestros cursos de tecnologia 100% en español</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cursos.map((c) => (
            <CursoTarjeta
              key= {c.id}
              titulo={c.titulo}
              categoria={c.categoria}
              duracion={c.duracion}
              precio={c.precio}
              descripcion={c.descripcion}
              imagen={c.imagen}
            />
          ))}
        </div>
      </div>
    </>
    
  );
}