import {TextInput} from 'react-native';
import styled from 'styled-components/native';


export const InputContainer = styled(TextInput).attrs(({theme})=>({
    placeholderTextColor: theme.colors.gray_300,
    selectionColor: theme.colors.white,
    underlineColorAndroid: 'transparent',
}))`
    width: 100%;
    max-height: 56px;
    min-height: 56px;
    background-color: ${({theme}) => theme.colors.gray_700};
    border-radius: 6px;
    font-size: ${({theme}) => theme.font_size.md};
    padding: 0 16px;
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme}) => theme.colors.white};
    margin-bottom: 10px;
`;