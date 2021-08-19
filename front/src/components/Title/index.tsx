import React from 'react';

import { Container } from './styles';

interface Props {
  title: string;
}

const MenuBar: React.FC<Props> = ({ title }) => {

  return (
    <Container>
      <span></span>
      <h1>{title}</h1>
      <span></span>
    </Container>
  );
};

export default MenuBar;