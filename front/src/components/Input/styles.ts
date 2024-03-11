import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
  isIcon: boolean;
  hidden?: boolean;
  disabled: boolean;
  children: React.ReactNode
}

export const Content = styled.div`
  margin-top: 8px;

  label{
    display:flex;
    flex-direction: row;
    align-items:center;
    font-weight: 700;
    color: var(--blue-dark);
  }
`;

export const Container = styled.div<ContainerProps>`
  background: #f6f6f6;
  width: 100%;
  margin-top: 8px;
  display: flex;
  flex-direction:row;
  color: #666360;

  ${props => props.hidden && css`
    display: none;
  `}

  & + div {
    margin-top: 8px;
  }

  > div{
    display:flex;
    flex-direction:row;
  }

  .div_input{
    flex: 1;
    justify-content:space-between;
    align-items:center;
    padding: 0 0.5rem;
    border: 2px solid transparent;
    transition: border-color 0.5s;

    ${props => props.isIcon && css`  
      border-left: 0;
    `}
    
    input{
      width:100%;
      height:100%;
    }

    input:focus{
      border-color: transparent;
      outline:none;
    }
  }

  .div_icon{
    display:flex;
    align-items:center;
    justify-content:center;
    border: 2px solid var(--blue-dark);;
    background: var(--blue-dark);
    padding:  1rem;
    transition: opacity 0.5s;
    
    svg{
      color: #fff;
    }
  }

  input {
    flex: 1;
    border: 0;
    background: transparent;
    color: #343434;
    padding: 0.5rem 0;

    &::placeholder {
      color: #666360;
    }
  }

  ${props =>
    props.isErrored &&
    css`
      .div_input{
        border-color: #ff5454;
      }
    `}

  ${props =>
    props.isFocused &&
    css`
      .div_input{
        border-color: var(--blue-dark);
      }

      .div_icon{
        opacity: 0.8;
      }
    `}

  ${props =>
    props.isFilled &&
    css`
      .div_icon{
        svg{
          color:  var(--red);
        }
      }
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
