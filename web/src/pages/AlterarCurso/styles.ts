import styled from 'styled-components';

export const Container = styled.div`

  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const Content = styled.div`
  background:#fafafa;

  display:flex;
  align-items:center;
  justify-content:center;
`;

export const NavMenu = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ContentContainer = styled.div`
  display:flex;

  flex-direction: column;
  padding: 3rem;
  background: #fff;
  border: 1px solid #eee;
  max-width: 1050px;
  width: 100%;
  margin: 3rem 0;
  position: relative;
  h1 {
    text-align: center;
    margin-bottom:2rem;
    color: var(--yellow);
  }

  h3 {
    margin: 2rem 0;
    font-weight: 700;
    color: #999;
  }

  .div_agroup {
      display: flex;
      flex-direction: row;
      width: 100%;

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
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a{
    background: var(--light-black);
    color: #fff;
    padding: 1rem 2rem;
    font-weight: 700;
  }

  a:hover{
    background: var(--yellow);
  }
`;
