import { UsersThree } from "phosphor-react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import styled from "styled-components/native";

export const NewTeamContainer = styled(SafeAreaView)`
    flex: 1;
    align-items: center;
    background-color: ${({theme}) =>theme.colors.gray_600};
    padding: 0 24px 16px;
`;

export const Content = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
`;

export const Icon = styled(UsersThree).attrs(({theme})=>({
    size: 120,
    color: theme.colors.green_700,

}))`
    align-self: center;
`;


