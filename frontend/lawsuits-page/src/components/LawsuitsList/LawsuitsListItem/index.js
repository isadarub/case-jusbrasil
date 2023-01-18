import React from 'react';
import { useNavigate } from 'react-router';
import { goToLawsuitDetails } from '../../../routes/coordinator';

export const LawsuitsListItem = () => {
  // Aqui vou receber os dados da API e mapear para gerar componentes
  const navigate = useNavigate();
  return (
    <>
      <h1 onClick={() => goToLawsuitDetails(navigate)}>Lawsuit title</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil facilis
        perferendis ratione voluptatem. Repudiandae sunt totam nostrum veniam,
        quidem laboriosam soluta nam rem, praesentium id laudantium, at eum
        deserunt iusto.
      </p>
    </>
  );
};
