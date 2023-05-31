import styled from "styled-components";

export const FooterContainer2 = styled.div`
  background: ${props => props.theme.colors.TwoBackground};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Copyright2 = styled.p `
    color: ${props => props.theme.colors.text};
    font-weight: 700;
    font-size: 20px;
    line-height: 39px;
    text-align: center;
`
