import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

interface ConProps {
  type?: 'success' | 'error' | 'info';
  hasdescription: Boolean;
}

const toastTypeVariations = {
  info: css`
    background: #FFCF23;
    color: #333;
  `,
  success: css`
    background: #e6fffa;
    color: #2e656a;
  `,
  error: css`
    background: #fddede;
    color: #c53030;
  `,
};

// prettier-ignore
export const Container = styled(animated.div) <ConProps> `
  width: 360px;
  position: relative;

  padding: 16px 32px 16px 16px;

  border-radius: 10px;

  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  display: flex;

  & + div {
    margin-top: 8px;
  }

  ${props => toastTypeVariations[props.type || 'info']}

  > svg {
    margin: 4px 12px 0 0;
  }

  div {
    flex: 1;

    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  button {
    position: absolute;
    right: 16px;
    top: 15px;
    opacity: 0.6;
    border: 0;
    background: transparent;
    color: inherit;
  }

  ${props =>
    !props.hasdescription &&
    css`
      align-items: center;

      svg {
        margin-top: 0;
      }
    `}
`;
