import {FlatList} from 'react-native';
import React, {useState} from 'react';
import { ColabsContainer, CounterPlayers, FormContainer, TabContainer } from './Colabs.styles'
import { Header } from '@components/Header'
import { PageTitle } from '@components/PageTitle'
import { Input } from '@components/Input'
import { HandleIcon } from '@components/HandleIcon'
import { TabTeam } from '@components/TabTeam'
import uuid from 'react-native-uuid';
import { PlayerCard } from '@components/PlayerCard';

export interface IPlayer {
  name: string
  team: string
  subTeam: string
  id: string
}


export const Colabs = () => {
  const [subTeams, setSubTeams] = useState(['time a', 'time b'])
  const [teamSelected, setTeamSelected] = useState('time a')
  const [players, setPlayers] = useState<IPlayer[]>([])
  const [playerName, setPlayerName] = useState('')

  const filteredPlayers = players.filter((player) => player.subTeam === teamSelected)
 

  const handleAddPlayer = () => {
    if(playerName) {
      const newPlayer: IPlayer = {
        name: playerName,
        team: 'Teste',
        subTeam: teamSelected,
        id: uuid.v4() as string
      }
      setPlayers([...players, newPlayer])
      setPlayerName('')
    }
  }

  const handleRemovePlayer = (id: string) => {
    const filteredPlayers = players.filter((player) => player.id !== id)
    setPlayers(filteredPlayers)
  }
  return (
    <ColabsContainer>
    <Header showBackButton />
    <PageTitle 
    title="Nome da Turma"
    subtitle="Adicione a galera e separe os times"
     />

     <FormContainer>
      <Input 
      placeholder="Nome"
      value={playerName}
      onChangeText={(text) => setPlayerName(text)}
       />
      <HandleIcon type="add" onPress={handleAddPlayer} />
     </FormContainer>

     <TabContainer>
     <FlatList 
      horizontal
      data={subTeams}
      keyExtractor={(item) => item}
      renderItem={({item}) => (
        <TabTeam 
        label={item}
        isActive={item === teamSelected}
        onPress={() => setTeamSelected(item)}
        />
        
      )}
     
     />
     <CounterPlayers>
      {filteredPlayers.length} 
     </CounterPlayers>
     </TabContainer>
     <FlatList 
      data={filteredPlayers}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => (
        <PlayerCard player={item} onRemovePlayer={handleRemovePlayer} />
      )}
      ListEmptyComponent={() => (
        <PageTitle
        title={`Nenhum jogador no time ${teamSelected.toUpperCase()}`}
        subtitle="Adicione jogadores para começar"
        />
      )}
      contentContainerStyle={
        [
          {paddingBottom: 100},
          filteredPlayers.length === 0 && {flex: 1, justifyContent: 'center'}
        ]
      }
      showsVerticalScrollIndicator={false}
     />

     
    </ColabsContainer>
  )
}
