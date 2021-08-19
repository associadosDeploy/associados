import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
  hidden: boolean;
  disabled: boolean;
}

export const Content = styled.div`
  margin-top: 2rem;

  label{
    font-weight: 700;
  }
`;

export const Container = styled.div<ContainerProps>`
  background: #f6f6f6;
  border: 2px solid #f6f6f6;
  border-radius: 5px;

  padding: 16px;
  width: 100%;
  margin-top: 8px;
  display: ${props => props.hidden ? 'none' : 'flex'};
  align-items: center;
  color: #666360;

  & + div {
    margin-top: 8px;
  }

  input {
    flex: 1;
    border: 0;
    background: transparent;
    color: #343434;

    &::placeholder {
      color: #666360;
    }
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: #ff5454;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: #aaa;
      border-color: #eee;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #FFCF23;
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



  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

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
