import styled, {css} from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const ColabsContainer = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({theme}) =>theme.colors.gray_600};
    padding: 0  24px 16px;
`;

export const FormContainer = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    background-color: ${({theme}) =>theme.colors.gray_700};
    border-radius: 6px;
    margin-bottom: 16px;
`;

export const TabContainer = styled.View`
width: 100%;
flex-direction: row;
align-items: center;
`;

export const  CounterPlayers = styled.Text`
${({theme}) => css`
    font-family: ${theme.fonts.bold};
    font-size: ${theme.font_size.sm}px;
    color: ${theme.colors.gray_300};
    margin-right: 4px;
`}
`;
