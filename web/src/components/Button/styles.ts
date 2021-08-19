import styled from 'styled-components';

import { shade } from 'polished';


interface PropsButton {
  color?: string;
}

export const Container = styled.button<PropsButton>`
  display: flex;
  align-items:center;
  justify-content:center;

  background: ${props => props.color || '#30475e'};
  border: 0;
  padding: 16px;
  color: #fff;
  width: 100%;
  font-weight: 700;
  transition: background-color 0.2s;
  font-size: 16px;
  margin-top: 2rem;

  &:hover {
    background: ${props => shade(0.2, props.color || '#30475e')};
  }
`;
