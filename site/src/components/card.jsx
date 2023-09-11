import React from 'react';

export default function Card({ nome, img, autor, sinopse }) {
    return (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover md:h-full md:w-48"
            src={img}
            alt={nome}
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {genero}
          </div>
          <div className="mt-2 text-xl font-semibold">{nome}</div>
          <p className="mt-2 text-gray-500">{autor}</p>
          <p className="mt-2 text-gray-500">{tipo}</p>
          <p className="mt-4">{sinopse}</p>
        </div>
      </div>
    </div>

    ) 
}
 