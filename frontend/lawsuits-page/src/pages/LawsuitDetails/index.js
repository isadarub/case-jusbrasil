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
      <tr className="movements" key={movement.id}>
        <td>{movement.date}</td>
        <td>{movement.description}</td>
      </tr>
    );
  });

  return (
    <>
      <button onClick={() => goToMain(navigate)}>
        Voltar à página de busca de processos
      </button>
      <h1>{states.lawsuitsList[0].cns}</h1>
      <table>
        <tr>
          <th>Movimentações</th>
        </tr>
        {movementsMap}
      </table>
      <div>
        <div>
          <p>Detalhes do processo</p>
        </div>
        <hr />
        <div>
          <p>Partes envolvidas</p>
        </div>
      </div>
    </>
  );
};
