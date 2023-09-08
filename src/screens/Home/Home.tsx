import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { HomeContainer } from './Home.styles'
import { Header } from '@components/Header'
import { PageTitle } from '@components/PageTitle'
import { TeamCard } from '@components/TeamCard'
import { FlatList } from 'react-native'
import { Button } from '@components/Button'
import uuid from 'react-native-uuid'

interface Iteams {
  label: string
  id: string
}

export const Home = () => {
  const  [teams, setTeams] = React.useState<Iteams[]>([])

  const {navigate} = useNavigation()
  
const handleRedirectToNewTeamRoute = () => {
    navigate('new')
  }



  return (
    <HomeContainer >
      <Header  />
    <PageTitle title="Turmas" subtitle='jogue com sua turma'/>
    <FlatList 
      style={{width: '100%', marginBottom: 24}}
      contentContainerStyle={
        {
        flex: teams.length === 0 ? 1 : undefined,
        justifyContent: teams.length === 0 ? 'center' : undefined,
        }
      }      
      data={teams}
      keyExtractor={(item: Iteams) => item.id}
      renderItem={({item}) => <TeamCard label={item.label} />}
      ListEmptyComponent={() => <PageTitle title="Nenhuma turma encontrada" subtitle='crie uma turma para jogar' />}
      showsVerticalScrollIndicator={false}
    />
    <Button label="Criar turma" onPress={handleRedirectToNewTeamRoute}  />



    </HomeContainer>
  )
}
