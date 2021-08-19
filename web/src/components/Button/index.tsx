import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, color, ...rest }) => (
  <Container type="button" color={color} {...rest}>
    {children}
  </Container>
);

export default Button;
