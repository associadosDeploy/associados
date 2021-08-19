/* eslint-disable no-param-reassign */
import React, {
  ChangeEvent,
  useRef,
  useEffect,
  useCallback,
  useState,
} from 'react';

import { useField } from '@unform/core';

import { FaCamera } from 'react-icons/fa';

import { ImageComponent, InputCamera } from './styles';

interface Props {
  name: string;
}

type InputProps = JSX.IntrinsicElements['input'] & Props;

const ImageInput: React.FC<InputProps> = ({ name, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, registerField, defaultValue } = useField(name);
  const [preview, setPreview] = useState(defaultValue);

  const handlePreview = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) {
      setPreview(null);
    }

    if (file) {

      const previewURL = URL.createObjectURL(file);

      setPreview(previewURL);
    }
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'files[0]',
      clearValue(ref: HTMLInputElement) {
        ref.value = '';
        setPreview(null);
      },
      setValue(_: HTMLInputElement, value: string) {
        setPreview(value);
      },
    });
  }, [fieldName, registerField]);

  return (
    <ImageComponent>
      <label htmlFor="avatar">
        {preview ? (
          <div>
            <img src={preview} alt="logo" />
          </div>
        ) : (
          <InputCamera>
            <FaCamera size={26} color="#999" />
          </InputCamera>
        )}

        <input
          type="file"
          id="avatar"
          accept="image/*"
          ref={inputRef}
          onChange={handlePreview}
          {...rest}
        />
      </label>
    </ImageComponent>
  );
};

export default ImageInput;
