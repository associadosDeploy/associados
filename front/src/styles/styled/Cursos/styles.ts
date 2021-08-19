import styled from 'styled-components';

import { Content } from '../../../components/ContentMax/styles';

export const ContentContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  height: 100vh;
`;

export const MaxContent = styled(Content)`
  padding: 2rem;
`;

export const Courses = styled.div`
  display: flex;
  flex-direction: column;

  > div{
    display: grid;
    grid-template-columns: 0.3fr 0.7fr;
    align-items:center;
    grid-gap: 2rem;
    margin: 1.5rem 0;

    > div{
      display: flex;
      flex-direction: column;
      width:100%;
    }

    img {
      width: 100%;
      height: 100%;
      max-width:500px;
      max-height:248px;

      background: #eee;
      background-size: cover;
    }

    span{
      display:flex;
      align-items:center;
      justify-content:center;
      height: 248px;
      background: #999;
    }

    a {
      color: var(--white);
      background: var(--light-black);
      padding: 1rem 2rem;
      margin-top: 1rem;
      font-weight: 700;
      align-self:flex-start;
      transition: background-color 0.5s, color 0.5s;
    }

    a:hover{
      background: var(--yellow);
      color: var(--light-black);
    }

    p {
      margin-top: 1rem;
    }
  }

  @media(max-width: 530px){
    > div{
      span{
        display:flex;
        align-items:center;
        justify-content:center;
        height: 150px;
        background: #999;
      }
    }

  }
`;