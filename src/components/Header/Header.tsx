import React from 'react'
import {  HeaderContainer, Logo } from './Header.styles'
import LogoImage from '@assets/logo.png'

export const Header = () => {
  return (
    <HeaderContainer>
        
        <Logo source={LogoImage} />
    </HeaderContainer>
  )
}
