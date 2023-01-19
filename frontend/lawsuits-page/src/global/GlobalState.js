import axios from 'axios';
import React, { useState } from 'react';
import { GlobalContext } from './GlobalContext';

export const GlobalState = props => {
  const URL = 'http://localhost:3003';
  const [lawsuitsList, setLawsuitsList] = useState([]);
  const [court, setCourt] = useState('');
  const [inputText, setInputText] = useState('');
  const [currentLawsuit, setCurrentLawsuit] = useState('');

  const getList = async () => {
    try {
      const res = await axios.get(`${URL}/lawsuits`);
      setLawsuitsList(res.data.lawsuits);
    } catch (err) {
      alert('Erro ao buscar lista de processos');
      console.error(err);
    }
  };

  const searchLawsuit = search => {
    axios
      .get(`${URL}/lawsuits?search=${search}`)
      .then(res => {
        setLawsuitsList(res.data.lawsuits);
      })
      .catch(err => {
        alert('Erro ao buscar processos');
        console.log(err);
      });
  };

  const getLawsuitById = async id => {
    try {
      const res = await axios.get(`${URL}/lawsuits/${id}`);
      setLawsuitsList(res.data.lawsuits);
    } catch (err) {
      alert('Erro ao buscar lista de processos');
      console.error(err);
    }
  };

  const states = { lawsuitsList, court, inputText, currentLawsuit };
  const setters = {
    setLawsuitsList,
    setCourt,
    setInputText,
    setCurrentLawsuit,
  };
  const getters = { getList, searchLawsuit, getLawsuitById };

  return (
    <GlobalContext.Provider value={{ states, setters, getters }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
