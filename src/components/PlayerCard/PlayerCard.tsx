import { IPlayer } from '@screens/Colabs/Colabs'
import React from 'react'
import { Avatar, PlayerCardContainer, PlayerName } from './PlayerCard.styles'
import { Hand } from 'phosphor-react-native'
import { HandleIcon } from '@components/HandleIcon'


interface IPlayerCardProps {
    player: IPlayer
    onRemovePlayer: (id: string) => void
}

export const PlayerCard = ({onRemovePlayer, player }:IPlayerCardProps) => {
  return (
    <PlayerCardContainer>
        <Avatar />
        <PlayerName>{player.name}</PlayerName>
        <HandleIcon type='delete' onPress={() => onRemovePlayer(player.id)} />
    </PlayerCardContainer>
  )
}
