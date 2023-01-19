import React from 'react';
import { useContext } from 'react';
import { COURTS as courtsData } from '../../constants/Courts';
import { GlobalContext } from '../../global/GlobalContext';
import './styles.css';

export const Header = () => {
  const { setters, states, getters } = useContext(GlobalContext);
  const { setCourt, setInputText } = setters;
  const { inputText } = states;
  const courts = courtsData.map(court => {
    return <option key={court}>{court}</option>;
  });

  const chooseCourt = e => {
    setCourt(e.target.value);
  };

  const updateText = e => {
    setInputText(e.target.value);
  };

  return (
    <div id="header">
      <h1>Consulta processual</h1>
      <h2>Buscar</h2>
      <p>
        Selecione um tribunal para listar os processos ou buscar pelo número
        unificado
      </p>
      {/* Nesse select vem um map da lista constant de tribunais */}
      <div id="div-filters">
        <select id="courts" defaultValue={''} onChange={chooseCourt}>
          <option id="disabled-option" value={''} disabled>
            Selecione tribunal...
          </option>
          {courts}
        </select>
        <input
          placeholder="Número do processo"
          value={inputText}
          onChange={updateText}
        />
        <button onClick={() => getters.searchLawsuit(inputText)}>BUSCAR</button>
      </div>
    </div>
  );
};
