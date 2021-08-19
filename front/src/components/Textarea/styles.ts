import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
  hidden?: boolean;
  disabled: boolean;
}

export const Content = styled.div`
  margin-top: 8px;

  label{
    font-weight: 700;
    color: var(--blue-dark);
  }
`;

export const Container = styled.div<ContainerProps>`
  outline: 0;

  display:flex;
  flex-direction: row;
  margin-top: 0.5rem;
  background: rgb(244, 244, 244);
  padding: 1rem;
  
  textarea{
    flex: 1 1;
    border: 0;
    outline: 0;
    background: transparent;
    height: 8rem;
    resize: none;
  }

  ${props => props.hidden && css`
    display: none;
  `}

  ${props =>
    props.isErrored &&
    css`
        border-color: #ff5454;
    `}

  ${props =>
    props.isFocused &&
    css`
      border-color: var(--blue-dark);
      opacity: 0.8;
    `}


  ${props =>
    props.disabled &&
    css`
      background: #ddd;
      border-color: #ddd;

      input{
        color: #666;
        cursor: default;
      }
    `}
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin: 0 0.5rem;

  svg {
    margin: 0;
  }

  span {
    background: #ff5454;

    color: #fff;

    &::before {
      border-color: #ff5454 transparent;
    }
  }
`;
