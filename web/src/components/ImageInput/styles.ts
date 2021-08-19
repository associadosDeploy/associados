import styled from 'styled-components';

export const ImageComponent = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  margin: 0 auto;

  label {
    display:flex;
    align-items:center;
    justify-content:center;

    cursor: pointer;
    padding: 16px;
    width: 150px;
    height: 150px;

    &:hover {
      opacity: 0.7;
    }

    > div{
      display:flex;
    }

    img {
      width: 100%;
      height:100%;
    }

    input {
      display: none;
    }
  }
`;

export const InputCamera = styled.div`
  background: #eee;
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.7;
  }
`;
