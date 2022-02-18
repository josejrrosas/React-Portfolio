import styled from "styled-components";

export const StyledHeader = styled.header `
    background-color: ${({theme}) => theme.titleColor};
    color: ${({theme}) => theme.tagLineColor};
    height:50vh;
`;

export const Nav = styled.nav`
    background-color: ${({theme}) => theme.pageBackground};
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin-bottom: 40px;

    @media(max-width: ${({theme}) => theme.mobile}) {
        flex-direction: column;
    }
`