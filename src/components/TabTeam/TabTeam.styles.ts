import styled, {css} from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

interface TabTeamStylesProps {
    isActive: boolean;
}

export const TabContainer = styled(TouchableOpacity)<TabTeamStylesProps>`
height: 38px;
min-width: 70px;
width: min-content!important;
border-radius: 4px;
align-items: center;
justify-content: center;
border-width: 1px;
border-color: ${({theme, isActive})=> isActive ? theme.colors.green_700 : 'transparent'};
margin-bottom: 8px;
`;

export const TabLabel = styled.Text`
text-transform: uppercase;
${({theme})=>  css`
    font-size: ${theme.font_size.sm}px;
    font-family: ${theme.fonts.bold};
    color: ${theme.colors.white};
`}`;