import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Formulario() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_mw9x6s5', 'template_9yjxx97', form.current, {
        publicKey: 'fn7Fiuvlbp9W5OCLv',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert("Correo Enviado");
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <>
      <div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-white border border-slate-200 shadow-md rounded-2xl p-6 max-w-md w-full mx-auto flex flex-col gap-4 text-slate-800"
        >
          <label className="text-xs font-bold text-slate-600 uppercase tracking-wider -mb-2">
            Nombre
          </label>
          <input
            type="text"
            name="name"
            placeholder='Nombre'
            className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
          />

          <label className="text-xs font-bold text-slate-600 uppercase tracking-wider -mb-2">
            Correo electronico
          </label>
          <input
            type="email"
            name="email"
            placeholder='Correo electronico'
            className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
          />

          <label className="text-xs font-bold text-slate-600 uppercase tracking-wider -mb-2">
            mensaje
          </label>
          <textarea
            name="message"
            placeholder='Escriba su consulta'
            rows="4"
            className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all resize-none"
          />

          <input
            type="submit"
            value="Enviar"
            className="mt-2 py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm rounded-lg shadow cursor-pointer transition-colors"
          />
        </form>
      </div>
    </>
  );
};

export default Formulario;