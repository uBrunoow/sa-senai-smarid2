import styled from "styled-components";

export const Company = styled.div`
    background-color: ${props => props.theme.colors.OneBackground};
    height: 747px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const BlackBox = styled.div`
    background-color: ${props => props.theme.colors.background};
    height: 100px;
`

export const CompanyContent = styled.div`
    width: 1785px;
    height: 689px;
    background: ${props => props.theme.colors.ThreeBackground};
    box-shadow: 3px -8px 35px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: -150px;
`