import React, { useEffect } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { GlobalContext } from '../../global/GlobalContext';
import { goToMain } from '../../routes/coordinator';
import './styles.css';

export const LawsuitDetails = () => {
  const { states, getters } = useContext(GlobalContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (states.currentLawsuit) {
      getters.getLawsuitById(states.currentLawsuit);
    } else {
      goToMain();
    }
  }, []);

  const movementsMap = states.lawsuitsList[0].movements.map(movement => {
    return (
      <div className="movements" key={movement.id}>
        <p>{movement.date}</p>
        <p>{movement.description}</p>
      </div>
    );
  });

  const concernedParties = states.lawsuitsList[0].concerned_parties
    .split(',')
    .map(person => {
      return <p>{person}</p>;
    });

  console.log(concernedParties);

  return (
    <>
      <button onClick={() => goToMain(navigate)}>
        Voltar à página de busca de processos
      </button>
      <div>
        <h1>{states.lawsuitsList[0].cns}</h1>
        <div>
          <h2>Movimentações</h2>
          {movementsMap}
        </div>
      </div>
      <div>
        <div>
          <p>Detalhes do processo</p>
        </div>
        <hr />
        <div>
          <p>Partes envolvidas</p>
          <p>{concernedParties}</p>
        </div>
      </div>
    </>
  );
};
