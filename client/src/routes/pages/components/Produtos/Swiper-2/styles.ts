import styled from "styled-components";

export const FrProducts = styled.div`
  background: ${props => props.theme.colors.OneBackground};
  width: 300px;
  height: 435px;
  box-shadow: 0px 4px 21px rgba(0, 0, 0, 0.25);
  margin: 30px;
  text-decoration: none;
  cursor: pointer;
  color: ${props => props.theme.colors.text};
  position: relative;
`

export const NameProduct = styled.p `
  color: ${props => props.theme.colors.text}
`