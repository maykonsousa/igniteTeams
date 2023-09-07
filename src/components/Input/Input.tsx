import React from 'react'
import {TextInputProps  } from 'react-native'
import { InputContainer } from './Input.styles'

interface IInputProps  extends TextInputProps {}

export const Input = ({...rest}:IInputProps) => {
  return (
    <InputContainer {...rest} />
  )
}
