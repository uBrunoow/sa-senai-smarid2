import styled from "styled-components";

export const InitialContent = styled.div`
    background-color: ${props => props.theme.colors.OneBackground};
    height: 900px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
`;

export const TitleContent = styled.h1`
  font-weight: 700;
  font-size: 96px;
  line-height: 116px;
  color: ${props => props.theme.colors.text};
  margin: 0 50px;
`

export const ParagraphContent = styled.p`
  font-weight: 400;
  font-size: 32px;
  line-height: 39px;
  color: ${props => props.theme.colors.text};
  margin: 0 50px;
`