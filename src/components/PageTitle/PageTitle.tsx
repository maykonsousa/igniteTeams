import React from 'react'
import { SubTitle, Title, TitleContainer } from './PageTitle.styles'

interface IPageTitleProps {
    title: string
    subtitle?: string
}

export const PageTitle = ({title, subtitle}:IPageTitleProps) => {
  return (
    <TitleContainer>
        <Title>{title}</Title>
        {subtitle ? <SubTitle>{subtitle}</SubTitle> : null}
    </TitleContainer>
  )
}
