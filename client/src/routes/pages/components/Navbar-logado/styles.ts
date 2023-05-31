import styled from "styled-components";

export const Navbar = styled.header`
  display: grid;
  grid-template-columns: .3fr 1fr 2fr 1fr .5fr 5fr .5fr 1fr 2fr 1fr .3fr;
  align-items: center;
  background: ${props => props.theme.colors.OneBackground};
  height: 120px;
  border-bottom: 5px solid $cor2;
  place-items: center;
  position: relative;
`

export const InputText = styled.input`
  color: ${props => props.theme.colors.text};
  background-color: ${props => props.theme.colors.OneBackground};
`