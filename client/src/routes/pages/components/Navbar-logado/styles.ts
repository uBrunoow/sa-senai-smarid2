import styled from "styled-components";

export const Navbar = styled.header`
  display: grid;
  grid-template-columns: .3fr 1fr 2fr 1fr .5fr 5fr .5fr 1fr 2fr 1fr .3fr;
  align-items: center;
  background: #121212;
  height: 120px;
  border-bottom: 5px solid $cor2;
  place-items: center;
  position: relative;
`

export const InputText = styled.input`
  color: #fff;
  background-color: #121212;
`