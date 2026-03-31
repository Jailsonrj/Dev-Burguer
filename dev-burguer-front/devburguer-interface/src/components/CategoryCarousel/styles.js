import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    .carousel-item {

        padding-right: 40px;
    }

                .react-multiple-carousel__arrow--right {
    right: 50px;
    top: 60px ;
}

        .react-multiple-carousel__arrow--left {
    left: 10px;
    top: 60px ;
}
    
  padding-left: 40px;
    cursor: grab;
`;

export const Title = styled.h2`
    font-size: 40px;
    font-weight: 600;
    color: #9758a6;
    padding-bottom: 12px;
    position: relative;
    text-align: center ;
    margin-bottom: 20px;
    margin-top: 20px;
  


    &::after {
        content: '';
        width: 56px;
        height: 4px;
        background: #9758a6;
        position: absolute;
        bottom: 0px;
        left: 50%;
        transform: translateX(-50%);
      
    }
`;

export const ContainerItens = styled.div`
    background: url(${props => props.$imageUrl}) no-repeat center center;
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    padding: 20px 10px;
    align-items: center;
    width: 100%;
    height: 200px;
    border-radius: 20px;
    margin-top: 50px;
    margin-bottom: 50px;

`;

export const CategoryButton = styled.button`
        font-size: 23px; 
        color: #fff;
        text-align: center;
        background-color: rgba(0, 0, 0, 0.5);
        padding: 5px 10px;
        border-radius: 10px;
        margin-top: auto;
        font-weight: 500;
        text-decoration: none;

        &:hover {
            background-color: #9758a6;
        }
`;
