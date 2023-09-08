import React from 'react'
import { TabContainer, TabLabel } from './TabTeam.styles'
import { TouchableOpacityProps, View } from 'react-native'

interface TabTeamProps extends TouchableOpacityProps{
    isActive?: boolean
    label: string
}

export const TabTeam = ({isActive=false, label, ...rest}:TabTeamProps) => {
  return (
    <TabContainer isActive={isActive} {...rest}>
        <View>
        <TabLabel>{label}</TabLabel>
        </View>
    </TabContainer>
  )
}
