import React from 'react'
import {TextInput, TextInputProps  } from 'react-native'
import { InputContainer } from './Input.styles'

interface IInputProps  extends TextInputProps {
  inputRef?: React.RefObject<TextInput>
}

export const Input = ({inputRef,...rest}:IInputProps) => {
  return (
    <InputContainer
    ref={inputRef}
     {...rest} />
  )
}
