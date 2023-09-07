import React from 'react'
import {TouchableOpacityProps} from 'react-native'
import { CardIcon, CardLabel, TeamCardContainer } from './TeamCard.styles'


interface ITeamCardProps extends TouchableOpacityProps {
    label: string
}

export const TeamCard = ({label, ...rest}:ITeamCardProps) => {
  return (
    <TeamCardContainer {...rest}>
        <CardIcon />
        <CardLabel>{label}</CardLabel>
    </TeamCardContainer>
  )
}
