import styled from "styled-components";

export const Header = styled.header`
    display: grid;
    grid-template-columns: .3fr 1fr 2fr 1fr .5fr 5fr .5fr 1fr 2fr 1fr .3fr;
    align-items: center;
    background-color: #121212;
    height: 120px;
    border-bottom: 5px solid $cor2;
    place-items: center;
    color: #FFF
`;

export const NavbarLink = styled.a `
    position: relative;
    font-size: 1.3em;
    font-weight: 500;
    color: #fff;
    text-decoration: none;
    margin: 20px;
`;

export const SignIpButtonLink = styled.a `
    text-decoration: none;
    color: #fff;
`;

export const SignUpButtonLink = styled.a `
   text-decoration: none;
   color: #fff;
    color: ${props => props.theme.colors.text}; `;