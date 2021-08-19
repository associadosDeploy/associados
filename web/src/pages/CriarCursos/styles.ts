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
  padding: 5rem;
  background: #fff;
  border: 1px solid #eee;
  max-width: 1050px;
  width: 100%;

  h1 {
    text-align: center;
    margin-bottom:2rem;
    color: var(--yellow);
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
