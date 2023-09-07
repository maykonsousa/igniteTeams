import { CaretLeft } from "phosphor-react-native";
import { styled } from "styled-components/native";

export const HeaderContainer = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
`;

export const Logo = styled.Image`
    width: 46px;
    height: 55px;
`;

export const BackButton = styled.TouchableOpacity`
    flex: 1;
`;

export const BackIcon = styled(CaretLeft).attrs(({theme})=>({
    size: 32,
    color: theme.colors.white,

}))``;
   


