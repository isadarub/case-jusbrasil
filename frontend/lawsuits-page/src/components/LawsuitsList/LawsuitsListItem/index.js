import React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { GlobalContext } from '../../../global/GlobalContext.js';
import { goToLawsuitDetails } from '../../../routes/coordinator.js';
import './styles.css';

export const LawsuitsListItem = props => {
  // Aqui vou receber os dados da API e mapear para gerar componentes
  const navigate = useNavigate();
  const { setters } = useContext(GlobalContext);

  const movementsMap = props.lawsuit.movements.map(movement => {
    return (
      <div key={movement.id}>
        <p>{`ÚLTIMA MOVIMENTAÇÃO: ${movement.date}`}</p>
        <p>{movement.description}</p>
      </div>
    );
  });

  const handleCurrentPage = e => {
    setters.setCurrentLawsuit(props.lawsuit.id);
    goToLawsuitDetails(navigate, props.lawsuit.id);
  };

  return (
    <div className="list-item">
      <h1 className="title" onClick={handleCurrentPage}>
        {`Processo ${props.lawsuit.cns} | ${props.lawsuit.original_court}`}
      </h1>
      <div>{movementsMap[movementsMap.length - 1]}</div>
    </div>
  );
};
