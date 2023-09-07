import React from 'react';
import { ButtonContainer, ButtonType, ButtonLabel } from './Button.Styles';
import { TouchableOpacityProps } from 'react-native';

interface IButtonProps extends TouchableOpacityProps {
  label: string
  type?: ButtonType
}

export const Button = ({label, type="primary", ...rest}:IButtonProps) => {
  return (
    <ButtonContainer
        type={type}
        {...rest}
    >
        <ButtonLabel>{label}</ButtonLabel>
    </ButtonContainer>
  )
}
