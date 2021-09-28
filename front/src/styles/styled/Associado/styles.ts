import styled from 'styled-components';

import { Content } from '../../../components/ContentMax/styles';

export const MaxContent = styled(Content)`
  padding: 2rem;
`;


export const SearchBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3 {
    text-align: center;
    margin: 1rem 0;
  }

  span {
    display: flex;
    align-items:center;
    margin: 0 1rem;

    svg {
      margin-right: 0.5rem;
    }
  }
  
  > div {
    color: #999;

    > div {
      display: flex;
      flex-direction: row;
      margin: 1rem 0;
    }
  }

  @media(max-width: 530px){
    > div {
      > div {
        display: flex;
        flex-direction: row;
        justify-content:center;
        flex-wrap: wrap;
        margin: 1rem 0;
      }

      span{
        margin-top: 1rem;
      }
    }
  }
`;

export const Associated = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  transition: transform 0.5s;

  > div {
    display: grid;
    grid-template-columns: 0.3fr 0.7fr;
    margin: 1rem 0;
    padding: 2rem;
    border: 1px solid #eee;

    > div {
      display: flex;
      flex-direction: column;
      justify-content:center;
      width:100%;
      color: #555;

      img{
        min-width: 200px;
        max-width: 200px;
        min-height: 315px;
        max-height: 315px;
        transition: opacity 0.5s;
      }

      h1 {
        color: var(--dark-yellow);
        margin-bottom: 0.5rem;
      }

      span {  
        display: flex;
        flex-direction: row;
        align-items:center;
        margin: 0.5rem 0;
        width:100%;

        svg {
          margin-right: 0.5rem;
        }
      }
      
    }

    p {  
      svg {
        margin-right: 0.5rem;
      }
    }

    > div:last-child {
      padding: 1rem 2rem;
      transition: border-color 0.5s;
      border-left: 0;
    }

    img {
      width: 100%;
      height: 100%;
      max-width:500px;
      max-height:350px;

      background: #eee;
      background-size: cover;
    }

    a {
      color: var(--white);
      background: var(--light-black);
      padding: 1rem 2rem;
      margin-top: 1rem;
      font-weight: 700;
      align-self: flex-start;
      transition: background-color 0.5s, color 0.5s;
    }

    p {
      margin-top: 1rem;
    }
  }

  @media(max-width: 664px){
    margin: 1rem 0;

    >div{
      display:flex;
      flex-direction:column;

      img {
        width: 100% !important;
      }
    }
  }
`;