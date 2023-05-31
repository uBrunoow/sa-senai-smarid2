import styled from "styled-components";

export const InitialContent2 = styled.div`
  background-color: ${props => props.theme.colors.background};
  height: 900px;
  width: 100%;
  display: flex;
  align-items: center;
  color: #fff;
  justify-content: center;
`;

export const TitleContent2 = styled.h1`
  font-weight: 700;
  font-size: 57px;
  line-height: 77px;
  color: ${props => props.theme.colors.text};
  margin: 0 50px;
`

export const DescriptionContent2 = styled.p`
  font-weight: 400;
  font-size: 32px;
  line-height: 39px;
  color: ${props => props.theme.colors.text};
  width: 897px;
  margin: 0 50px;
`