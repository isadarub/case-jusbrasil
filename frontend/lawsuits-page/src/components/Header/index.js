import React from 'react';
import { useContext } from 'react';
import { COURTS as courtsData } from '../../constants/Courts.js';
import { GlobalContext } from '../../global/GlobalContext.js';
import './styles.css';
import logo from '../../constants/assets/logo.png';

export const Header = () => {
  const { setters, states, getters } = useContext(GlobalContext);
  const { setCourt, setInputText } = setters;
  const { inputText, court } = states;

  const courts = courtsData.map(court => {
    return <option key={court}>{court}</option>;
  });

  const chooseCourt = e => {
    setCourt(e.target.value);
  };

  const updateText = e => {
    setInputText(e.target.value);
  };

  const onClickChange = inputText => {
    getters.searchLawsuit(inputText);
    setInputText('');
    setCourt('');
  };

  return (
    <div id="header">
      <div id="div-logo">
        <img
          id="logo"
          src={logo}
          alt="Logo do Jusbrasil, um V invertido, nas cores da bandeira brasileira."
        />
        <h1>Consulta processual</h1>
      </div>
      <h2>Buscar</h2>
      <p>
        Selecione um tribunal para listar os processos ou buscar pelo número
        unificado
      </p>
      {/* Nesse select vem um map da lista constant de tribunais */}
      <div id="div-filters">
        <select id="courts" defaultValue={court} onChange={chooseCourt}>
          <option id="disabled-option" value={''}>
            Selecione tribunal...
          </option>
          {courts}
        </select>
        <input
          placeholder="Busque por número do processo ou partes envolvidas"
          value={inputText}
          onChange={updateText}
        />
        <button onClick={() => onClickChange(inputText)}>BUSCAR</button>
      </div>
    </div>
  );
};
