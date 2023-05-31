import styled from "styled-components";

export const DestaqueProduto = styled.a`
    background: ${props => props.theme.colors.FourBackground};
    width: 500px;
    height: 350px;
    box-shadow: 0px 4px 21px rgba(0, 0, 0, 0.25);
    margin: 30px;
    text-decoration: none;
    color: ${props => props.theme.colors.text};
    position: relative;
`

export const DestaqueNome = styled.p`
  color: ${props => props.theme.colors.text};
`