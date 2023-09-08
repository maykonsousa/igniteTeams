import { styled } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
export const HomeContainer = styled(SafeAreaView)`
    flex: 1;
    align-items: center;
    background-color: ${({theme}) =>theme.colors.gray_600};
    padding: 0 24px 16px;
    

   
    `;

   
