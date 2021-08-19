import styled, { css } from 'styled-components';

interface ContainerProps {
  isActive: boolean;
}

export const FormDiv = styled.div<ContainerProps>`
  display: none;

  ${props =>
    props.isActive &&
    css`
      display:flex;
      flex-direction: column;
    `
  }

  img{
    width:100%;
  }

  #success{
    text-align:center;
    color: var(--red);
    font-size: 1.3rem;
  }

  p{
    color: var(--blue-dark);
    text-align: center;
    font-size: 1.15rem;
    margin: 1.3rem 0;
    font-weight: 500;
  }

  h3,h2{
    text-align:center;
  }

  #div_success{
    display:flex;
    align-items:center;
    justify-content:center;
  }


  @media (max-width: 860px) {
    
  }
`;