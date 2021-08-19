import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  align-items:center;
  margin-bottom: 1rem;
  color: #888;
  transition: color 0.5s;
  cursor: pointer;

  svg{
    margin-right: 0.5rem;
  }

  &:hover{
    color: var(--yellow);
  }
`;