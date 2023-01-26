import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../../global/GlobalContext.js';
import { LawsuitsListItem } from './LawsuitsListItem/index.js';
import './styles.css';

export const LawsuitsList = () => {
  const { states, getters } = useContext(GlobalContext);
  const { lawsuitsList, court } = states;
  const { getList } = getters;

  useEffect(() => {
    getList();
    // eslint-disable-next-line
  }, []);

  const cards =
    lawsuitsList.length > 0 ? (
      lawsuitsList.map(lawsuit => {
        return <LawsuitsListItem lawsuit={lawsuit} key={lawsuit.id} />;
      })
    ) : (
      <>
        <h2>Carregando...</h2>
      </>
    );

  const filteredCards = lawsuitsList
    .filter(lawsuit => {
      return lawsuit.original_court === court;
    })
    .map(lawsuit => {
      return <LawsuitsListItem lawsuit={lawsuit} key={lawsuit.id} />;
    });

  return <div className="list">{court === '' ? cards : filteredCards}</div>;
};
