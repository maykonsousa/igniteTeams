import { styled } from "styled-components/native";

export const HomeContainer = styled.View`
    flex: 1;
    align-items: center;
    background-color: ${({theme}) =>theme.colors.gray_600};
    padding-top: 40px;

   
    `;

    export const Title = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: #fff;
    `;
