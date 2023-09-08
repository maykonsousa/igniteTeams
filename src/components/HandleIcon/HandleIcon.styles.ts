import { PencilSimple, Plus, X } from "phosphor-react-native";
import { TouchableOpacity } from "react-native"
import styled from "styled-components/native"




export const HandleIconContainer = styled(TouchableOpacity)`
    width: 56px;
    height: 56px;
    justify-content: center;
    align-items: center;
    margin-left: 5px;
    border-radius: 6px;

`;

export const AddIcon = styled(Plus).attrs(({theme})=>({
    size: 32,
    color: theme.colors.green_700,
}))``;

export const EditIcon = styled(PencilSimple).attrs(({theme})=>({
    size: 32,
    color: theme.colors.gray_300,
}))``;

export const DeleteIcon = styled(X).attrs(({theme})=>({
    size: 32,
    color: theme.colors.red_dark,
}))``;