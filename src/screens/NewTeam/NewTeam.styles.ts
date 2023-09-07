import { UsersThree } from "phosphor-react-native";
import styled from "styled-components/native";

export const NewTeamContainer = styled.View`
   flex: 1;
    align-items: center;
    background-color: ${({theme}) =>theme.colors.gray_600};
    padding: 16px 24px;
    padding-top: 40px;
`;

export const Content = styled.View`
    flex: 1;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

export const Icon = styled(UsersThree).attrs(({theme})=>({
    size: 120,
    color: theme.colors.green_700,

}))`
    align-self: center;
`;


