import React from 'react'
import {  BackButton, BackIcon, HeaderContainer, Logo } from './Header.styles'
import LogoImage from '@assets/logo.png'

interface IHeaderProps {
  showBackButton?: boolean
}

export const Header = ({showBackButton=false}:IHeaderProps) => {
  return (
    <HeaderContainer>
       
          {showBackButton ?(
            <BackButton>
            <BackIcon />
          </BackButton>
          ):null}
        
        <Logo source={LogoImage} />
    </HeaderContainer>
  )
}
