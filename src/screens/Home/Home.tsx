import React from 'react'
import { HomeContainer } from './Home.styles'
import { Header } from '@components/Header'
import { PageTitle } from '@components/PageTitle'
import { TeamCard } from '@components/TeamCard'
import { FlatList } from 'react-native'
import { Button } from '@components/Button'

interface Iteams {
  label: string
  id: string
}

export const Home = () => {
  const  [teams, setTeams] = React.useState<Iteams[]>([])
  const MOCK_TEAMS= [ 
    {id: '1', label: 'Turma 1'},
    {id: '2', label: 'Turma 2'},
    {id: '3', label: 'Turma 3'},
    {id: '4', label: 'Turma 4'},
    {id: '5', label: 'Turma 5'},
    {id: '6', label: 'Turma 6'},
    {id: '7', label: 'Turma 7'},
    {id: '8', label: 'Turma 8'},
    {id: '9', label: 'Turma 9'},
    {id: '10', label: 'Turma 10'},
    {id: '11', label: 'Turma 11'},
    {id: '12', label: 'Turma 12'},
    {id: '13', label: 'Turma 13'},
    {id: '14', label: 'Turma 14'},
    {id: '15', label: 'Turma 15'},
    {id: '16', label: 'Turma 16'},
    {id: '17', label: 'Turma 17'},
    {id: '18', label: 'Turma 18'},
    {id: '19', label: 'Turma 19'},
    {id: '20', label: 'Turma 20'},
    {id: '21', label: 'Turma 21'},
    {id: '22', label: 'Turma 22'},
    {id: '23', label: 'Turma 23'},
    {id: '24', label: 'Turma 24'},
    {id: '25', label: 'Turma 25'},
    {id: '26', label: 'Turma 26'},
    {id: '27', label: 'Turma 27'},
    {id: '28', label: 'Turma 28'},
    {id: '29', label: 'Turma 29'},
    {id: '30', label: 'Turma 30'},
    {id: '31', label: 'Turma 31'},
    {id: '32', label: 'Turma 32'},
    {id: '33', label: 'Turma 33'}
]

  React.useEffect(() => {
    setTeams(MOCK_TEAMS)},[]);
  

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
    <Button label="Criar turma"  />



    </HomeContainer>
  )
}
