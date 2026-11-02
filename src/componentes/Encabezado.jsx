import React from 'react';
import { NavLink } from "react-router";

function Encabezado() {
  return (
      <>
        <div className="flex justify-between bg-slate-900 p-4 border-b border-slate-800">
            <div className="text-slate-300 hover:text-emerald-400 font-medium text-3xl transition-colors">Academia Dev</div>
            <nav className=" flex gap-4">
                <NavLink
                    to="/Inicio"
                    end
                    className="text-slate-300 hover:text-emerald-400 font-medium text-lg transition-colors"
                >
                    Inicio
                </NavLink>
                <NavLink
                    to="/Cursos"
                    end
                    className="text-slate-300 hover:text-emerald-400 font-medium text-lg transition-colors"
                >
                    Cursos
                </NavLink>
                <NavLink
                    to="/Contacto"
                    end
                    className="text-slate-300 hover:text-emerald-400 font-medium text-lg transition-colors"
                >
                    Contacto
                </NavLink>
            </nav>
      </div>
      </>
  );
}

export default Encabezado