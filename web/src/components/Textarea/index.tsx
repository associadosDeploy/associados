/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-param-reassign */
import React, { useRef, useEffect, TextareaHTMLAttributes } from 'react';

import { useField } from '@unform/core'

import { Content } from './styles';

interface Props {
  name: string
  // eslint-disable-next-line react/require-default-props
  label?: string
}

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & Props

function Textarea({ name, label, ...rest }: TextareaProps) {
  const textareaRef = useRef(null)
  const { fieldName, defaultValue = '', registerField, error } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: textareaRef,
      getValue: ref => {
        return ref.current.value
      },
      setValue: (ref, value) => {
        ref.current.value = value
      },
      clearValue: ref => {
        ref.current.value = ''
      },
    })
  }, [fieldName, registerField])

  return (
    <Content>
      {label && <label htmlFor={fieldName}>{label}</label>}

      <textarea
        ref={textareaRef}
        id={fieldName}
        defaultValue={defaultValue}
        {...rest}
      />

      {error && <span>{error}</span>}
    </Content>
  )
}

export default Textarea;
