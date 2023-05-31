import styled from "styled-components";

export const Features = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 1200px;
    background: ${props => props.theme.colors.TwoBackground};
    color: #fff;
    place-items: center;
    grid-column: 2;
`;