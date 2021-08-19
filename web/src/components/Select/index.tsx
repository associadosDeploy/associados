/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useRef, useEffect, ReactNode, SelectHTMLAttributes } from 'react'

import { useField } from '@unform/core'

import { FaChevronDown } from 'react-icons/fa';
import { Content } from './styles';


interface SelectProps {
  name: string;
  // eslint-disable-next-line react/require-default-props
  label?: string;
  children: ReactNode;
}

type Props = SelectHTMLAttributes<HTMLSelectElement> & SelectProps

export default function Select({ name, label = '', children, ...rest }: Props) {
  const selectRef = useRef<HTMLSelectElement>(null)

  const { fieldName, defaultValue, registerField, error } = useField(name)

  useEffect(() => {
    registerField({
      ref: selectRef,
      name: fieldName,
      getValue: ref => {
        return ref.current?.value
      },
      setValue: (ref, newValue) => {
        ref.current.value = newValue
      },
      clearValue: ref => {
        ref.current.value = ''
      },
    })
  }, [fieldName, registerField])

  return (
    <Content>
      <label htmlFor={fieldName} className="select_component">
        <select
          id={fieldName}
          ref={selectRef}
          defaultValue={defaultValue}
          {...rest}
        >
          {children}
        </select>
        <FaChevronDown size={15} />
      </label>

      {error && <span className="error">{error}</span>}
    </Content>
  )
}
