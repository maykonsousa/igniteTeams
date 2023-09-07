import { styled } from "styled-components/native";

export const TitleContainer = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
    margin: 32px 0;
`;


export const Title = styled.Text`
    font-size: ${({theme})=>theme.font_size.md}px;
    font-family: ${({theme})=>theme.fonts.bold};
    color: ${({theme})=>theme.colors.white};
`;

export const SubTitle = styled.Text`
    font-size: ${({theme})=>theme.font_size.sm}px;
    font-family: ${({theme})=>theme.fonts.regular};
    color: ${({theme})=>theme.colors.gray_300};
`;