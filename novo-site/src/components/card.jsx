import React, { useState } from 'react';

export default function Card({ nome, img, autor, sinopse, genero, tipo }) {
  const [mostrarMais, setMostrarMais] = useState(false);

  const toggleMostrarMais = () => {
    setMostrarMais(!mostrarMais);
  };
  
  return (
    <div className='text-white bg-white/30 p-4 rounded-lg grid grid-cols-2 gap-4'>
    <div>
      <img src={img} className='w-full aspect-[3/4] rounded-lg' alt='Imagem do livro' />
    </div>
      <div className='flex flex-col gap-2'>
        <h1 className='font-bold text-xl'>{nome}</h1>
      <p>{autor}</p>
      {mostrarMais ? (
        <p className='text-sm'>{sinopse}</p>
      ) : (
        <p className='text-sm line-clamp-3'>{sinopse}</p>
      )}
      <button onClick={toggleMostrarMais} className='text-red-500 hover:underline'>
        {mostrarMais ? 'Ver Menos' : 'Ver Mais'}
      </button>
        <div className='flex flex-col gap-2 items-start '>
          <div className='flex gap-2'>
            {genero.split(",").map((g) => {
              return (
                <span key={g} className='bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700'>{g}</span>
              )
            })}
          </div>
          <span className='bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700'>{tipo}</span>
    </div>
    </div>
  </div>
  );
}
