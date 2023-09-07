import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { UsersThree } from "phosphor-react-native";


export const TeamCardContainer = styled(TouchableOpacity)`
    width: 100%;
    height: 90px;
    background-color: ${({theme})=>theme.colors.gray_500};
    flex-direction: row;
    align-items: center;
    padding: 24px;
    margin-bottom: 10px;
    border-radius: 6px;
`;


export const CardLabel = styled.Text`
    font-size: ${({theme})=>theme.font_size.md}px;
    color: ${({theme})=>theme.colors.gray_200};
    font-family: ${({theme})=>theme.fonts.regular};
`;

export const CardIcon = styled(UsersThree).attrs(({theme})=>({
    size: 32,
    color: theme.colors.green_700,
    weight: "fill",
}))`
    margin-right: 20px;
`;




