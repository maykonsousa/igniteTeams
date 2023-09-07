import React from 'react'
import { HomeContainer } from './Home.styles'
import { Header } from '@components/Header'
import { PageTitle } from '@components/PageTitle'

export const Home = () => {
  return (
    <HomeContainer >
      <Header  />
    <PageTitle title="Turmas" subtitle='jogue com sua turma'/>
    </HomeContainer>
  )
}
