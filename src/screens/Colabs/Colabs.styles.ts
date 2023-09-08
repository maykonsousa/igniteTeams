import styled from "styled-components/native";

export const ColabsContainer = styled.View`
    flex: 1;
    align-items: center;
    background-color: ${({theme}) =>theme.colors.gray_600};
    padding: 16px 24px;
    padding-top: 40px;
`;

export const FormContainer = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
`;
