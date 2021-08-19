import React, { HTMLAttributes } from 'react';

import { FaSpinner } from 'react-icons/fa';

import { Loading } from './styles';

interface DivProps extends HTMLAttributes<HTMLDivElement> {
  color?: string;
}
const LoadingComponent: React.FC<DivProps> = ({ color }) => {
  return (
    <Loading color={color}>
      <h1>Carregando</h1>
      <FaSpinner size={25} />
    </Loading>
  );

};

export default LoadingComponent;
