import React from 'react'
import { Content, Icon, NewTeamContainer } from './NewTeam.styles'
import { Header } from '@components/Header'
import { Button } from '@components/Button'
import { PageTitle } from '@components/PageTitle'
import { Input } from '@components/Input'

export const NewTeam = () => {
  return (
    <NewTeamContainer>
        <Header showBackButton />
        <Content>
          <Icon />
          <PageTitle title="Nova Turma" subtitle="crie a turma para adicionar pessoas" />
          <Input placeholder="Nome da turma" />
        <Button label="Criar turma" />
        </Content>

    </NewTeamContainer>
  )
}
