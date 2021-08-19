import React, {
  TextareaHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';

import { FiAlertCircle } from 'react-icons/fi';

import { useField } from '@unform/core';
import { Container, Error, Content } from './styles';

interface InputPros extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label?: string;
  hidden?: boolean;
  disabled?: boolean;
}

const Textarea: React.FC<InputPros> = ({ name, label, disabled = false, value, hidden = false, ...rest }) => {
  const { fieldName, defaultValue, error, registerField } = useField(name);
  const inputRef = useRef<HTMLTextAreaElement>(null);

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
      <Container hidden={hidden} disabled={disabled} isErrored={!!error} isFocused={isFocused} >

        <textarea
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
      </Container>
    </Content>
  );
};

export default Textarea;
