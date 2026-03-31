import styled from "styled-components";
import Select from 'react-select'

export const ProductImg = styled.img`
    height: 80px;
    padding: 10px;
    border-radius: 5px;
`;

export const SelectStatus = styled(Select)`
    width: 100%;
`; 

export const Filter = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px 0;
    gap: 10px;
`;

export const FilterOption = styled.button`
  cursor: pointer;
  background: none;
  padding: 20px;
  border: none;
  color: ${props => props.$isActive ? '#9758a6' : '#696969'};
  font-size: 16px;
  font-weight: 600;
  border-bottom: ${props => props.$isActive ? '2px solid #9758a6' : 'none'};
`;