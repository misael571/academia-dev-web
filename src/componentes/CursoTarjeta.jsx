import React from 'react'

function CursoTarjeta({titulo,categoria,duracion,precio,descripcion,imagen}) {
  return (
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm flex flex-col justify-between hover:border-emerald-500">
          <img src={imagen} alt={titulo} className="w-full h-44 object-cover" />
          <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                  <span className="text-xl font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                      {categoria}
                  </span>
                  <h3 className="font-bold text-slate-800 mt-2 text-lg">{titulo}</h3>
                  <p className="text-lg text-slate-500 mt-1">{descripcion}</p>
              </div>
              <div className="mt-4 pt-2 border-t border-slate-100 flex justify-between text-sm font-bold text-slate-700">
                  <span>⏱️ {duracion}</span>
                  <span className="text-emerald-600">{precio}</span>
              </div>
          </div>
      </div>
  )
}

export default CursoTarjeta