import styled from "styled-components";

export const TellMeWhy = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr ;
  height: 100%;
  background-color: ${props => props.theme.colors.OneBackground};
  color: ${props => props.theme.colors.text};
`;