import styled from 'styled-components';

import { Content } from '../ContentMax/styles';

export const Container = styled.div`
  width: 100%;
  display:flex;
  flex-direction: column;
`;

export const TopFooter = styled.div`
  display:flex;
  flex-direction: row;
  padding: 2rem;
  background: var(--black);

  > div{
    display:flex;
    flex-direction: row;

    > div{
      display:flex;
      flex-direction: column;
      flex: 1;

      span{
        color: var(--yellow);
        text-align:cetenr;
        font-weight: 700;
        margin-bottom: 0.5rem;
      }

      a{
        display:flex;
        flex-direction: row;
        align-items:center;

        color: var(--white);
        text-align:start;
        margin: 0.5rem 0;
        transition: color 0.5s;
        
        svg{
          margin-right: 1rem;
        }
      }
      
      a:hover{
        color: var(--yellow);
      }

      img{
        width: 120px;
        height: 158px;
      }
    }
  }

  @media(max-width: 530px){
    padding: 1rem;

    > div {
      display:grid;
      grid-template-columns: 1fr 1fr;


      > div:first-child{
        grid-column: span 2;
        margin-bottom: 2rem;
      }
      

      >div{
        display:flex;
        align-items: center;
      }
    }
    
  }
`;

export const BottomFooter = styled.div`
  display:flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: var(--dark-yellow);
  color: var(--white);
  padding: 0.75rem;

  span{
    font-weight: 500;
  }
`;

export const MaxContent = styled(Content)`

 
`;
