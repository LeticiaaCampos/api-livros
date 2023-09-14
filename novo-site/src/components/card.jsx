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
    <div className='flex flex-col gap-4'>
      <h1>{nome}</h1>
      <p>{autor}</p>
      {mostrarMais ? (
        <p className='text-sm'>{sinopse}</p>
      ) : (
        <p className='text-sm line-clamp-3'>{sinopse}</p>
      )}
      <button onClick={toggleMostrarMais} className='text-red-500 hover:underline'>
        {mostrarMais ? 'Ver Menos' : 'Ver Mais'}
      </button>
      <div className='flex flex-col gap-4'>
      <span className='rounded-md bg-primary'>{genero}</span>
      <span className='rounded-md bg-secondary'>{tipo}</span>
    </div>
    </div>
  </div>

    // <div className='text-white bg-white/30 p-4 rounded-lg grid grid-cols-2 gap-4'>
    //   <div>
    //     <img src={img} className='w-full aspect-[3/4] rounded-lg' />
    //   </div>
    //   <div className='flex flex-col gap-4'>
    //     <h1>{nome}</h1>
    //     <p>{autor}</p>
    //     <p className='text-sm'>{sinopse}</p>
    //   </div>
    //   <div className='flex flex-col gap-4'>
    //     <span className='rounded-md	'>{genero}</span>
    //     <span className='rounded-md	'>{tipo}</span>
    //   </div>
    // </div>
  );
}
