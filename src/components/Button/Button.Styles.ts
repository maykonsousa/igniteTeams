import styled from "styled-components/native"
import {TouchableOpacity} from 'react-native'


export type ButtonType = 'primary' | 'secondary' 

interface ButtonStyleProps {
    type: ButtonType
}

export const ButtonContainer = styled(TouchableOpacity)<ButtonStyleProps>`
    width: 100%;
    max-height: 56px;
    min-height: 56px;
    background-color: ${({theme, type}) => type === 'primary' ? theme.colors.green_700 : theme.colors.red_dark};
    justify-content: center;
    align-items: center;
    border-radius: 5px;
`;


export const ButtonLabel = styled.Text`
    font-size: ${({theme}) => theme.font_size.md}px;
    font-family: ${({theme}) => theme.fonts.bold};
    color: ${({theme}) => theme.colors.white};
`;