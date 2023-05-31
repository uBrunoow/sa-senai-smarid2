import styled from "styled-components";

export const Highligths = styled.div`
  height: 100%;
  background-color: ${props => props.theme.colors.TwoBackground};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column ;
`;

export const HighligthsContent = styled.div`
  margin: 100px 0;
  width: 1500px;
  height: 717.97px;
  background: ${props => props.theme.colors.OneBackground};
  border-radius: 38px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export const ParagraphHighlights = styled.p `
  font-weight: 400;
  font-size: 32px;
  line-height: 39px;
  color: ${props => props.theme.colors.text};
  margin: 0 50px;
`