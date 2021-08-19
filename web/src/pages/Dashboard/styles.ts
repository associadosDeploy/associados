import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const Content = styled.div`
  background:#fafafa;
  height: 100%;
`;

export const NavMenu = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ContentContainer = styled.div`
  padding: 3rem;

  .title_h1 {
    margin-bottom: 1rem;
    margin-top: 2rem;
    color: var(--dark-yellow);
    text-transform: uppercase;
  }

  h1:first-child{
    margin-top: 0;
  }
`;

export const Card = styled.div`
  a{
    color: var(--black);
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    padding: 2rem 0;

    margin: 0 1rem;
    background: #fff;
    border: 1px solid #eee;

    &:hover{
      color: var(--yellow);
      border-color: var(--yellow);
    }
  }

  svg{
    margin-bottom: 1rem;
  }

  span{
    width: 70%;
    text-align: center;
    font-weight: 700;
  }
`;

export const TitleTable = styled.div`
  display:flex;
  margin-top: 2rem;

  span{
    width: 100%;
    text-align:center;
  }
`;

export const Table = styled.div``;

export const ButtonsGroup = styled.div`
  display: flex;

  >button{
    margin: 0 0.5rem;
  }
`;

export const ModalContent = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;

  background:rgba(0,0,0,0.2);

  display:flex;
  align-items:center;
  justify-content:center;
`;

export const DivModal = styled.div`
  h2{
    text-align:center;
    color: var(--blue);
    margin-bottom: 3rem;
    font-weight: 700;
  }

  >div:first-child{
    display:flex;
    justify-content:flex-end;
    color:var(--blue);
    margin-bottom: 2rem;

    svg{
      cursor:pointer;
    }

    svg:hover{
      opacity: 0.8;
    }
  }

  width: 30%;
  padding: 2rem 3rem;
  background:#fff;
  border: 1px solid #eee;
  border-radius: 5px;
`;

export const Line = styled.div`
  > div:first-child{
    display:flex;
    margin-top: 1rem;
    background: #fff;
    padding: 1rem;
    border: 1px solid #eee;
    border-radius: 5px;

    span{
      width: 100%;
      text-align:center;
    }

    .action_div{
      display:flex;
      flex-direction: row;
      align-items:center;
      width: 100%;

      .div_aprove{
        color: #7BDC4D;
      }

      .div_recuse{
        color: #E84545;
      }

      > div{
        display:flex;
        flex-direction: row;
        align-items:center;
        justify-content:center;
        width: 100%;
        cursor: pointer;

        svg{
          margin-right: 0.5rem;
        }

        &:hover{
          opacity:0.7;
        }
      }
    }

    div:last-child{
      color: #333;
    }
  }

  .content_div{
    display:flex;
    flex-direction: row;
    padding: 1rem 2rem;
    background: #fff;
    border: 1px solid #eee;
    width:100%;
    border-top: 0;

    h3{
      color: #999;
    }

    span{
      margin: 0.5rem 0;
    }

    > div:first-child{
      border-right: 1px solid #eee;
      margin-right: 2rem;
    }

    > div{
      display: flex;
      flex-direction: column;
      width:100%;
    }
  }
`;
