import React from 'react'
import { LoadingContainer, LoaingIndicator } from './Loading.styles'
import {ActivityIndicator} from 'react-native'

interface LoadingProps {
  size?: number | 'small' | 'large'
}

export const Loading = ({size}:LoadingProps) => {
  return (
    <LoadingContainer>
      <LoaingIndicator size={size ?? 'large'} />
    </LoadingContainer>
  )
}
