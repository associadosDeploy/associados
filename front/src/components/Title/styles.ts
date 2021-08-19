import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  margin-bottom: 2rem;
  
  span{
    flex:1;
    height: 2px;
    background: var(--yellow);
  }

  h1{
    margin: 0 2rem;
    font-weight: 500;
  }
`;