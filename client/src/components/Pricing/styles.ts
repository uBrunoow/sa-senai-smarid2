import styled from "styled-components";

export const Price = styled.div`
    height: 100%;
    background-color: $cor7;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const Promos = styled.div`
  background: ${props => props.theme.colors.FourBackground};
  border-radius: 37px;
`

export const ParagraphPromos = styled.p`
  width: 450px;
  height: 146px;
  font-weight: 400;
  font-size: 32px;
  line-height: 39px;
  color: ${props => props.theme.colors.text};
  margin: 20px 50px;
`

export const PriceTitlePromo = styled.h3`
  width: 212px;
  height: 84px;
  font-weight: 800;
  font-size: 64px;
  line-height: 77px;
  color: ${props => props.theme.colors.text};
  margin: 0 100px;
`;
  
export const DolarSignPromo = styled.p`
  width: 55px;
  height: 46px;
  font-weight: 800;
  font-size: 40px;
  line-height: 48px;
  color: ${props => props.theme.colors.text};
  margin: 5px 50px;
`