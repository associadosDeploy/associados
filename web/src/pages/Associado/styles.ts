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



  h3{
    text-align:center;
    margin-top: 2rem;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    margin-top: 2rem;
    color: var(--black);

    svg{
      margin-right: 1rem;
    }
  }

  a{
    background: var(--light-black);
    color: #fff;
    padding: 1rem 2rem;
    font-weight: 700;
  }

  a:hover{
    background: var(--yellow);
  }

  form{
    display:flex;
    flex-direction: row;

    >div{
      margin: 0 0.5rem;
    }
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


export const Line = styled.div`
  > div:first-child{
    display:flex;
    margin-top: 1rem;
    background: #fff;
    padding: 1rem;
    border: 1px solid #eee;

    span{
      width: 100%;
      text-align:center;
    }

    .action_div{
      display:flex;
      flex-direction: row;
      align-items:center;
      width: 100%;

      .actions{
        svg{
          margin-right: 0.5rem;
        }
      }

      > div{
        display:flex;
        flex-direction: row;
        align-items:center;
        justify-content:center;
        width: 100%;
        cursor: pointer;
        color: #444;
        margin: 0 0.5rem;

        a{
          display:flex;
          flex-direction: row;
          align-items:center;

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
