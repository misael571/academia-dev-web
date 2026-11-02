import React from 'react'
import Formulario from '../componentes/Formulario';
import Map from '../componentes/Map';

function Contacto() {
  return (
    <>  
        <h1 className="text-3xl font-extrabold text-slate-800 text-center mb-8">Ponte en Contacto</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start max-w-7xl mx-auto px-4 mb-12">
          <Formulario/>
          <div>
            <Map/>
          </div>
        </div>
         

    </>
  )
}

export default Contacto