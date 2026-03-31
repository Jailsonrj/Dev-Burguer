import styled from "styled-components";

export const Root = styled.table`
    border-collapse: collapse;
    width: 100%;
    background-color: #fff;
    border-radius: 20px;
`;

export const Header = styled.thead`

`;

export const Tr = styled.tr`

`;

export const Th = styled.th`
    border-bottom: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
    color: #fff;
    background-color: #484848;

    &:first-child {
        border-top-left-radius: 20px;
    }

    &:last-child {
        border-top-right-radius: 20px;
    }
`;

export const Td = styled.td`
    border-bottom: 1px solid #dddddd;
    text-align: left;
    padding: 16px;
    color: #484848;   
    font-weight: 600;
    line-height: 115%;
`;

export const Tbody = styled.tbody`
    border-bottom: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
`;