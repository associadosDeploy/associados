import styled from 'styled-components';

import { Content } from '../../../components/ContentMax/styles';

export const MaxContent = styled(Content)``;

export const AboutUs = styled.div`
  display: flex;
  background: #fff;
  padding: 5rem 1rem;
  width: 100%;

  > div {
    display:flex;
    flex-direction: row;
    /* align-items:center; */

    h1{
      color: var(--dark-yellow);
      margin-bottom: 1rem;
      font-size: 3rem;
    }

    p{
      text-align: justify;
    }
    
    video{
      width:100%;
      background: #eee;
    }

    > div{
      height:100%;
      width:100%;
      
    }

    > div:first-child{
      margin-right: 2rem;
    }

    > div:last-child{
      display:flex;
      align-items:center;
      justify-content:center;

      font-size: 1.5rem;
      font-weight: bold;
      background: #eee;
    }
  }
  
  
  @media(max-width: 748px){
    padding: 2rem 1rem;
    
    > div {
      display:flex;
      flex-direction: column;
      
      text-align:center;
      
      > div:first-child{
        margin-bottom: 2rem;
      }
      
      > div:last-child{
        padding: 5rem 0;
      }
      /* video{
        margin-top: 2rem;
      } */
    }
  }
  `;

export const Partners = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  text-align:center;
  font-weight:bold;
  width:100%;
  background: #eee;
  padding: 2rem 0;

  h1{
    color: var(--dark-yellow);
    text-align:center;
    margin-bottom: 1rem;
    font-size: 2rem;
  }

  .partners_tablet{
    display: none;
  }

  .partners_mobile{
    display: none;
  }

  @media(max-width: 934px){
    .partners_web{
      display: none;
    }

    .partners_tablet{
      display:flex;

      > div{
        display:grid;
        grid-template-columns:repeat(3, 1fr);
        grid-gap: 1rem;
      }

    }

  }

  @media(max-width: 652px){
    .partners_web{
      display: none;
    }
    .partners_tablet{
      display: none;
    }

    .partners_mobile{
      display:flex;

      > div{
        display:grid;
        grid-template-columns:repeat(1, 1fr);
        grid-gap: 1rem;
      }
    }

  }
`;

export const PartnersCarousel = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  margin-top: 2rem;

  > div{
    display:grid;
    grid-template-columns:repeat(4, 1fr);
    grid-gap: 1rem;
  }

  div:first-child{
    display:flex;
    align-items:center;
    justify-content:center;
    margin: 0;
  }
  
  div:last-child{
    display:flex;
    align-items:center;
    justify-content:center;
    margin: 0;
  }

  svg{
    cursor: pointer;
    transition: opacity 0.5s;
  }

  svg:hover{
    opacity: 0.7;
  }
`;

export const Partner = styled.div`
  padding: 5rem;
  background: #C4C4C4;
`;

export const Associated = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  background: #fff;
  padding: 5rem 1rem;
  width: 100%;

  @media(max-width: 530px){
    padding: 2rem;
  }
`;

export const FormAssociated = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  background: #fff;
  padding: 3rem;
  border: 1px solid #eee;
  border-radius: 5px;

  img{
    margin: 3rem 0;
  }

  p{
    width: 80%;
    color: var(--light-black);
    font-weight: 700;
    text-align:center;
    margin: 1rem 0;
    font-size: 1.15rem;
  }

  a{
    background: var(--dark-yellow);
    color: var(--white);
    font-weight: 700;
    padding: 1rem 5rem;
    font-size: 1.25rem;
    margin-top: 1.5rem;
  }

  a:hover{
    opacity: 0.7;
  }
`;