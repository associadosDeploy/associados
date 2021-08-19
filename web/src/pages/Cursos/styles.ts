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

  h1:first-child{
    margin-top: 0;
  }
`;


export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
  padding-bottom: 2rem;
  margin-bottom: 2rem;

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

export const Cards = styled.div`
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  cursor: pointer;

  background: #fff;
  margin: 0.5rem;
  border: 1px solid #eee;
  width: 180px;
  height: 180px;
  padding: 1rem;

  img {
    height: 100%;
    width: 100%;
  }

  &:hover{
    opacity: 0.7;
  }
`;
