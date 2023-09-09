import React, { useCallback } from 'react'
import { useNavigation } from '@react-navigation/native'
import { HomeContainer } from './Home.styles'
import { Header } from '@components/Header'
import { PageTitle } from '@components/PageTitle'
import { TeamCard } from '@components/TeamCard'
import { FlatList } from 'react-native'
import { Button } from '@components/Button'
import { getAllTeams } from '@storage/team'
import { useFocusEffect } from '@react-navigation/native'; // Importe o useFocusEffect
import { Team} from '@storage/DTOs'


export const Home = () => {
  const [teams, setTeams] = React.useState<Team[]>([])

  const getTeams = async () => {
    try {
      const data = await getAllTeams()
      setTeams(data)
    } catch (error) {
      console.log(error)
    }
  }
  const { navigate } = useNavigation()

 

  useFocusEffect(
    useCallback(() => {
      getTeams()
    }, [])
  );

  const handleRedirectToNewTeamRoute = () => {
    navigate('new')
  }

  const HandleRedirectSelectedTeam = (team_id: string) => () => {
    navigate('colabs', { team_id })
  }


  return (
    <HomeContainer >
      <Header />
      <PageTitle title="Turmas" subtitle='jogue com sua turma' />
      <FlatList
        style={{ width: '100%', marginBottom: 24 }}
        contentContainerStyle={
          {
            flex: teams.length === 0 ? 1 : undefined,
            justifyContent: teams.length === 0 ? 'center' : undefined,
          }
        }
        data={teams}
        keyExtractor={(item: Team) => `${item.id}`}
        renderItem={({ item }) => <TeamCard label={item.name} onPress={HandleRedirectSelectedTeam(`${item.id}`)} />}
        ListEmptyComponent={() => <PageTitle title="Nenhuma turma encontrada" subtitle='crie uma turma para jogar' />}
        showsVerticalScrollIndicator={false}
      />
      <Button label="Criar turma" onPress={handleRedirectToNewTeamRoute} />
    </HomeContainer>
  )
}
