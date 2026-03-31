import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 40px;
`;

export const ProductImage = styled.img`
    width: 100px;
    height: 100px;
`;

export const ButtonGroup = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;

    button {
    display: flex;
   align-items: center;
   justify-content: center;
   height: 30px;
   width: 30px;
  color: #fff;
  border-radius: 4px;
  background-color: #9758a6;
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;
  border: none;
  
    }

    button:hover {
        background-color: #7a3e86;
    }
`;

export const TrashButton = styled.img`
    width: 20px;    
    cursor: pointer;
    color: #9758a6;
   
`;