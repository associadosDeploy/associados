import styled, { keyframes } from 'styled-components';

interface LoadingComponent {
  color?: string;
}

const RotateAnimation = keyframes`
  from {  transform: rotate(0deg)}
  to { transform: rotate(360deg)}
`;

export const Loading = styled.div<LoadingComponent>`
  display:flex;
  flex-direction: row;
  align-items:center;
  justify-content:center;
  height: 100%;
  color: ${props => props.color || '#333'};

  h1{
    margin: 0;
  }

  svg{
    animation: ${RotateAnimation} 2s linear infinite;
    margin-left: 16px;
  }
`;
