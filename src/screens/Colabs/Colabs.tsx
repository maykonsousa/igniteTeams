import React from 'react'
import { ColabsContainer, FormContainer } from './Colabs.styles'
import { Header } from '@components/Header'
import { PageTitle } from '@components/PageTitle'
import { Input } from '@components/Input'
import { HandleIcon } from '@components/HandleIcon'

export const Colabs = () => {
  return (
    <ColabsContainer>
    <Header showBackButton />
    <PageTitle 
    title="Nome da Turma"
    subtitle="Adicione a galera e separe os times"
     />

     <FormContainer>
      <Input placeholder="Nome" />
      <HandleIcon type="add" />
     </FormContainer>

     
    </ColabsContainer>
  )
}
