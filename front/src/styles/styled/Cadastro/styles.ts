import styled from 'styled-components';

import { Content } from '../../../components/ContentMax/styles';

export const MaxContent = styled(Content)`
  padding: 2rem 1rem;
`;

export const FormContent = styled.div`
  padding: 3rem;
  border: 1px solid #eee;

  .div_congratulations{
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;

    h1 {
      margin-top: 1rem;
      color: var(--light-black);
    }

    img{
      width: 30%;
      margin-bottom: 1rem;
    }
  }

  form{
    h1{
      text-align: center;
      padding: 1rem;
      color: var(--yellow);
    }

    h3 {
      margin: 2rem 0;
      font-weight: 700;
      color: #999;
    }
    
    button{
      width: 100%;
      border: 0;
      padding: 1rem 0;
      margin-top: 3rem;
      background: var(--yellow);
      color: var(--light-black);
      font-weight: 700;
      font-size: 1.2rem;
    }

    .div_agroup {
      display: flex;
      flex-direction: row;
      width: 100%;
      margin: 1rem 0;

      > div{
        flex: 1;
        margin-right: 1rem;
        margin-left: 1rem;
      }

      > div:first-child{
        margin-left: 0;
      }

      > div:last-child{
        margin-right: 0;
      }
    }
    
  }

  @media(max-width: 530px){
    form{
      .div_agroup {
        display: flex;
        flex-direction: column !important;
  
        > div{
          margin-right: 0;
          margin-left: 0;
        }
      }
    }
  }
`;