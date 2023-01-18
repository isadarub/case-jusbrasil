import axios from 'axios';
import React, { useState } from 'react';
import { GlobalContext } from './GlobalContext';

export const GlobalState = props => {
  const URL = '';
  const [lawsuitsList, setlawsuitsList] = useState([]);
  const [page, setPage] = useState(1);

  const limit = 20;

  const getList = () => {
    axios
      .get(`${URL}/lawsuits`)
      .then(res => {
        setlawsuitsList(res.data);
      })
      .catch(error => {
        console.error('Failed to catch lawsuits list');
      });
  };

  const states = { lawsuitsList, page };
  const setters = { setlawsuitsList, setPage };
  const getters = { getData };

  return (
    <GlobalContext.Provider value={{ states, setters, getters }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
Footer;
