import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../../global/GlobalContext';
import { LawsuitsListItem } from './LawsuitsListItem';

import './styles.css';

export const LawsuitsList = () => {
  const { states, getters } = useContext(GlobalContext);
  const { lawsuitsList } = states;
  const { getList } = getters;

  useEffect(() => {
    getList();
  }, []);

  const cards =
    lawsuitsList.length > 0 ? (
      lawsuitsList.map(lawsuit => {
        return <LawsuitsListItem lawsuit={lawsuit} key={lawsuit.id} />;
      })
    ) : (
      <>
        <h1>Loading...</h1>
      </>
    );

  return <div className="list">{cards}</div>;
};
