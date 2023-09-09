import React, {useState, useCallback, useEffect, useRef} from 'react';
import {Alert, TextInput} from 'react-native';
import {FlatList} from 'react-native';
import uuid from 'react-native-uuid';
import { Header } from '@components/Header'
import { PageTitle } from '@components/PageTitle'
import { Input } from '@components/Input'
import { HandleIcon } from '@components/HandleIcon'
import { TabTeam } from '@components/TabTeam'
import { PlayerCard } from '@components/PlayerCard';
import { Button } from '@components/Button'

import { ColabsContainer, CounterPlayers, FormContainer, TabContainer } from './Colabs.styles'
import { Player, Team } from '@storage/DTOs';
import { useNavigation, useRoute } from '@react-navigation/native';
import { GetTeamById } from '@storage/team';
import { deleteTeam } from '@storage/team/DeleteTeam.service';
import { getAllPlayers } from '@storage/players/getAllPlayers.service';
import { createPlayer } from '@storage/players/createPlayer.service';
import { AppError } from '@utils/AppError';
import { deletePlayerById } from '@storage/players/DeletePlayerById.service';







export const Colabs = () => {
  const [subTeams, setSubTeams] = useState(['time A', 'time B'])
  const [teamSelected, setTeamSelected] = useState('time A')
  const [teamInformation, setTeamInformation] = useState<Team | null >(null)
  const [players, setPlayers] = useState<Player[]>([])
  const [playerName, setPlayerName] = useState('')
  const router = useRoute()
  const {navigate} = useNavigation()

  const inputRef = useRef<TextInput>(null)

  
  
  const {team_id} = router.params as {team_id: string}
  
  const getTeamInformation = async () => {
    const data = await GetTeamById(team_id)
    setTeamInformation(data)
  };
  const FetchPlayers = useCallback(async () => {
    try {
      const data = await getAllPlayers(team_id)
      const filteredPlayers = data.filter((player) => player.subteam === teamSelected)
      console.log("jogadores",data)
      console.log("time",teamSelected)
      setPlayers(filteredPlayers)
    } catch (error) {
      Alert.alert('Jogadores', 'Ocorreu um erro ao buscar os jogadores')
    }
  }, [teamSelected])

  

  useEffect(() => {
    FetchPlayers()
  }, [teamSelected])


  const removeteam = async () => {
    try {
      await deleteTeam(team_id)
      navigate('home')
    } catch (error) {
      Alert.alert('Turma', 'Ocorreu um erro ao remover a turma')
      console.log(error);
    }
  }

  

  const handleRemoveTeam = async () => {
    Alert.alert('Turma', 'Deseja remover a turma?', [
      { text: 'Não', style: 'cancel' },
      { text: 'Sim',   onPress:  removeteam  }
      
    ])
   
  }

  React.useEffect(() => {
    getTeamInformation()
  }, [])

  
 

  const handleAddPlayer = async  () => {
    if(playerName.trim() === ''){
      return Alert.alert('Jogadores', 'O nome do jogador é obrigatório')
    }
    try {
      const newPlayer: Player = {
        id: uuid.v4() as string,
        name: playerName,
        subteam: teamSelected,
      }

      await createPlayer({data: newPlayer, team_id})
      inputRef.current?.blur()
      FetchPlayers();
     
      setPlayerName('')
    } catch (error) {
      if(error instanceof AppError){
        Alert.alert('Jogadores', error.message)
      
    }else {
      Alert.alert('Jogadores', 'Ocorreu um erro ao criar o jogador')
      console.log(error)
    }
  }
}

  const handleRemovePlayer = (id: string) => {
    Alert.alert('Jogadores', 'Deseja remover o jogador!', [
      {
        text: 'Não',
        style: 'cancel'
      },
      {
        text: 'Sim',
        onPress: async () => {
          try {
            await deletePlayerById({team_id, id})
            FetchPlayers()
          } catch (error) {
            Alert.alert('Jogadores', 'Ocorreu um erro ao remover o jogador')
          }
        }
      }
    ])
  }
  return (
    <ColabsContainer>
    <Header showBackButton />
    <PageTitle 
    title={teamInformation?.name || 'Turma'}
    subtitle="Adicione a galera e separe os times"
     />

     <FormContainer>
      <Input 
      placeholder="Nome"
      value={playerName}
      onChangeText={(text) => setPlayerName(text)}
      inputRef={inputRef}
      onSubmitEditing={handleAddPlayer}
      returnKeyType="done"

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
        onPress={()=>setTeamSelected(item)}
        />
        
      )}
     
     />
     <CounterPlayers>
      {players.length} 
     </CounterPlayers>
     </TabContainer>
     <FlatList 
      data={players}
      keyExtractor={(item) => `${item.id}`}
      renderItem={({item}) => (
        <PlayerCard player={item} onRemovePlayer={()=>handleRemovePlayer(`${item.id}`)} />
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
          players.length === 0 && {flex: 1, justifyContent: 'center'}
        ]
      }
      showsVerticalScrollIndicator={false}
     />
     <Button label='Remover Turma' type='secondary' onPress={handleRemoveTeam} />

     
    </ColabsContainer>
  )
}
