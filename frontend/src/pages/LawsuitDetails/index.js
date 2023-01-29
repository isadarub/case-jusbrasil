import React, { useEffect } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { GlobalContext } from '../../global/GlobalContext.js';
import { goToMain } from '../../routes/coordinator.js';
import './styles.css';

export const LawsuitDetails = () => {
  const { states, getters } = useContext(GlobalContext);
  const { getLawsuitById } = getters;
  const { currentLawsuit, lawsuitsList } = states;
  const navigate = useNavigate();

  useEffect(() => {
    getLawsuitById(currentLawsuit);
    // eslint-disable-next-line
  }, []);

  const movementsMap = lawsuitsList[0]?.movements.map(movement => {
    return (
      <div className="movements" key={movement.id}>
        <p>{movement.date}</p>
        <p>{movement.description}</p>
      </div>
    );
  });

  const concernedParties = lawsuitsList[0]?.concerned_parties
    .split(',')
    .map(person => {
      return <p key={person}>{person} - [inserir diferentes roles]</p>;
    });

  return (
    <div>
      <button onClick={() => goToMain(navigate)}>
        Voltar à página de busca de processos
      </button>
      <div className="page-details">
        <div>
          <h1>{`${lawsuitsList[0]?.cns} | ${lawsuitsList[0]?.original_court}`}</h1>
          <div>
            <h2>Movimentações</h2>
            {movementsMap}
          </div>
        </div>
        <div className="details">
          <div>
            <p>Detalhes do processo</p>
            <hr />
            <p>[detalhes aqui]</p>
          </div>
          <div>
            <p>Partes envolvidas</p>
            <hr />
            {concernedParties}
          </div>
        </div>
      </div>
    </div>
  );
};
