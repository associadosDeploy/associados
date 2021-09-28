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

  > div:first-child {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    width: 100%;
    background: #EEEEEE;
    
    svg {
      margin: 1rem;
    }

    input {
      border: 0;
      background: transparent;
      width: 100%;
      padding: 1rem;
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


  @media(max-width: 592px){
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
  align-items:center;
  justify-content:center;
  margin-top: 1rem;
  transition: transform 0.5s;

  > div {
    display: flex;
    width: 100%;
    margin: 1rem 0;
    cursor: pointer;
    box-shadow: -4px 5px 5px rgba(0, 0, 0, 0.10);

    > div {
      display: flex;
      flex-direction: column;
      justify-content:center;
      color: #555;

      img {
        min-width: 200px;
        max-width: 200px;
        min-height: 315px;
        max-height: 315px;
        background-size: cover;
        transition: opacity 0.5s;
        margin: 0;
      }

      div.image-not-found {
        min-width: 200px;
        max-width: 200px;
        min-height: 315px;
        max-height: 315px;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #eee;
      }

      h1 {
        color: var(--dark-yellow);
      }
      
      > div {
        display: flex;
        flex-direction: row;
        margin: 1rem 0;
        width:100%;

        span {  
          display: flex;
          flex-direction: row;
          align-items:center;
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
    }

    &:hover{

      img{
        opacity: 0.75;
      }
      
      > div:last-child {
        border-color: var(--yellow);
      }
    }

    > div:last-child {
      flex:1;
      padding: 1rem 2rem;
      border: 1px solid #eee;
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

    a:hover {
      background: var(--yellow);
      color: var(--light-black);
    }

    p {
      margin-top: 1rem;
    }
  }

  @media(max-width: 592px){

    >div{
      display: flex;
      flex-direction:row;

     >div{
       flex:1;

       > div {
        display:flex;
        flex-direction: column;
        margin: 0;

        span{
          margin: 0.5rem 0;
        }
       }

       img{
          max-width: 592px;
          width:100%;
          background-position: center;
          background-size: cover;
       }
     }

    
    }
  }
`;