import styled from 'styled-components';

import { Content } from '../../../components/ContentMax/styles';

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
    grid-gap: 3rem;
    margin: 1.5rem 0;

    > div{
      display: flex;
      flex-direction: column;
      width:100%;

      > div{
        margin-top: 1rem;

        a {
          font-weight: 700;
          align-self:flex-start;
          color: var(--dark-yellow);
          transition: opacity 0.5s;
        }

        a:hover{
          opacity: 0.7;
        }
      }
    }

    img {
      width: 100%;
      height: 100%;
      max-width:500px;
      max-height:248px;

      background: #eee;
      background-size: cover;
    }

    p {
      margin-top: 1rem;
    }
  }
`;