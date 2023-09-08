import { User } from "phosphor-react-native";
import styled, {css} from "styled-components/native";

export const PlayerCardContainer = styled.View`
width: 100%;
height: 56px;
align-items: center;
flex-direction: row;
background-color: ${({theme}) => theme.colors.gray_500};
border-radius: 6px;
margin-bottom: 8px;
`;

export const PlayerName = styled.Text`
${({theme}) => css`
    font-size: ${theme.font_size.md}px;
    color: ${theme.colors.gray_100};
    font-family: ${theme.fonts.regular};
    flex: 1;
`}
`;

export const Avatar = styled(User).attrs(({theme}) => ({
    color: theme.colors.gray_100,
    size: 32
}))`
margin: 0 16px;
`;


