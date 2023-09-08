import React from 'react'
import { useNavigation } from '@react-navigation/native'
import {  BackButton, BackIcon, HeaderContainer, Logo } from './Header.styles'
import LogoImage from '@assets/logo.png'

interface IHeaderProps {
  showBackButton?: boolean
}

export const Header = ({showBackButton=false}:IHeaderProps) => {
  const {navigate} = useNavigation()

  const handleBackRoute = () => {
    navigate('home')
  }
  return (
    <HeaderContainer>
       
          {showBackButton ?(
            <BackButton onPress={handleBackRoute}>
            <BackIcon />
          </BackButton>
          ):null}
        
        <Logo source={LogoImage} />
    </HeaderContainer>
  )
}
