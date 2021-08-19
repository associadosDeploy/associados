import React, {
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';

import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';

import { useField } from '@unform/core';
import { Container, Error, Content } from './styles';

interface InputPros extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  hidden?: boolean;
  icon?: React.ComponentType<IconBaseProps>;
  disabled?: boolean;
}

const Input: React.FC<InputPros> = ({ name, label, disabled = false, icon: Icon, value, hidden = false, ...rest }) => {
  const { fieldName, defaultValue, error, registerField } = useField(name);
  const inputRef = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocues = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  useEffect(() => {
    if (value) {
      setIsFilled(true)
    }
  }, [value]);

  useEffect(() => {
    registerField({ name: fieldName, ref: inputRef.current, path: 'value' });
  }, [fieldName, registerField]);

  return (
    <Content>
      <label htmlFor={fieldName}>
        {label}
      </label>
      <Container hidden={hidden} disabled={disabled} isIcon={!!Icon} isErrored={!!error} isFocused={isFocused} isFilled={isFilled}>
        {Icon && (
          <div className="div_icon">
            <Icon />
          </div>
        )}

        <div className="div_input">
          <input
            onFocus={handleInputFocues}
            onBlur={handleInputBlur}
            defaultValue={defaultValue}
            ref={inputRef}
            {...rest}
          />

          {error && (
            <Error title={error}>
              <FiAlertCircle color="#ff5454" size={20} />
            </Error>
          )}
        </div>
      </Container>
    </Content>
  );
};

export default Input;
