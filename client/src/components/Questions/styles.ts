import styled from "styled-components";

export const Question = styled.div`
  height: 100%;
  background-color: ${props => props.theme.colors.OneBackground};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  padding: 100px;
`;

export const ParagraphQuestion = styled.p`
  font-weight: 400;
  font-size: 32px;
  line-height: 39px;
  color: ${props => props.theme.colors.text};
  margin: 0 50px;
`