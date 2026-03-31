import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
`;

export const ProductImage = styled.img`
    height: 80px;
    padding: 10px;
    border-radius: 5px;
`;

export const EditButton = styled.button`
    border-radius: 8px;
    border: none;
    width: 40px;
    height: 40px;

    font-weight: 600;
    font-size: 18px;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    svg{
      width: 20px;
      height: 20px;
    }

    &:hover{
        background-color: #9758a6;
        color: #fff; 
    }



`;