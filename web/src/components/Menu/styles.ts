import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  background:#fff;
  border-bottom: 1px solid #eee;
  padding: 1rem 2rem;

  > div{
    display: flex;
    flex-direction: row;
    align-items:center;
    justify-content:space-between;
    width: 100%;

    a{
      display: flex;
      flex-direction: row;
      align-items:center;
    }

    > div{
      display: flex;
      flex-direction: row;
      align-items:center;

      span {
        margin-left: 0.5rem;
        font-size: 1.5rem;
      }

      strong{
        font-weight: 700;
        color: var(--black);
        border-right: 2px solid #eee;
        padding-right: 2rem;
        margin-right: 1rem;
      }

      button {
        display:flex;
        align-items:center;
        background: transparent;
        color: #666;
        border: 0;
        transition: transform 0.3s;
        font-weight: 700;
        margin-left: 1rem;

        svg{
          margin-left: 8px;
        }
      }

      button:hover{
        transform: translateX(4px);
      }
    }
  }
`;
