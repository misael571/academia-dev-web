import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Inicio() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=9&nat=es,mx")
      .then(valores => setCharacters(valores.data.results))
  }, []); 

  return (
    <>
      <div>
          <h1 className="text-3xl font-extrabold text-slate-800 text-center mb-2">Nuestros instructores</h1>
          <p className="text-center text-xl text-emerald-700 mb-4">Nuestro equipo cuenta con varios profesionales que estan muy preparados para guiarte</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 mb-12">
        {characters.map((d) => (
          <div
            key={d.login.uuid}
            className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm flex flex-col items-center text-center"
          >
            <img
              src={d.picture.large}
              alt={d.name.first}
              className="w-24 h-24 rounded-full object-cover mb-3 shadow"
            />
            <p className="text-xs text-gray-400 capitalize">{d.gender}</p>
            <p className="font-bold text-lg text-gray-800">
              {d.name.first} {d.name.last}
            </p>
            <p className="text-sm text-gray-600">
              {d.location.city}, {d.location.country}
            </p>
            <p className="text-xs text-emerald-700 bg-emerald-50 px-2 py-1 rounded mt-2 break-all">
              {d.email}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}