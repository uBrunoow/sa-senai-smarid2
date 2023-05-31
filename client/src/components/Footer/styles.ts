import styled from "styled-components";

export const FooterContainer = styled.div`
  background-color: ${props => props.theme.colors.TwoBackground};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Copyright = styled.p `
    color: ${props => props.theme.colors.text};
    font-weight: 700;
    font-size: 20px;
    line-height: 39px;
    text-align: center;
`
