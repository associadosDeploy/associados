import React from 'react';

import { Container } from './styles';

import { FaArrowLeft } from 'react-icons/fa';

const BackButton: React.FC = () => {

  return (
    <Container>
      <FaArrowLeft size={20} />
      Voltar
    </Container>
  );
};

export default BackButton;