import React from 'react';

export const Header = () => {
  return (
    <>
      <h1>Busca</h1>
      <p>
        Selecione um tribunal para listar os processos ou buscar pelo número
        unificado
      </p>
      {/* Nesse select vem um map da lista constant de tribunais */}
      <select>
        <option>TJSP</option>
        <option>TJPR</option>
      </select>
      <input />
      <button>BUSCAR</button>
    </>
  );
};
