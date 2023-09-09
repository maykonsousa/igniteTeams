import React, { useState } from 'react'
import { Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Content, Icon, NewTeamContainer } from './NewTeam.styles'
import { Header } from '@components/Header'
import { Button } from '@components/Button'
import { PageTitle } from '@components/PageTitle'
import { Input } from '@components/Input'
import { createNewTeam } from '@storage/team'
import { AppError } from '@utils/AppError'

export const NewTeam = () => {
  const [teamName, setTeamName] = useState('')
  const {navigate} = useNavigation()
  
  const handleRedirectToNewTeamRoute = async() => {
    try {
      if(teamName.trim() === ''){
        return Alert.alert('Novo Time', 'O nome do time é obrigatório')
      }
      const createdTeam = await createNewTeam(teamName)
      setTeamName('');
      navigate('colabs', {team_id: `${createdTeam.id}`})
    } catch (error) {
      if(error instanceof AppError){
       Alert.alert('Novo Time', error.message)
      }else{
        Alert.alert('Novo Time', 'Ocorreu um erro ao criar o time')
        console.log(error)
      }

    }
  }

  return (
    <NewTeamContainer>
        <Header showBackButton />
        <Content>
          <Icon />
          <PageTitle title="Nova Turma" subtitle="crie a turma para adicionar pessoas" />
          <Input placeholder="Nome da turma"
          value={teamName}
          onChangeText={setTeamName}
          />
        <Button label="Criar turma"  onPress={handleRedirectToNewTeamRoute}/>
        </Content>

    </NewTeamContainer>
  )
}
