import styled from "styled-components";
import hamburguer from "../../assets/xmenu.svg"
import background from "../../assets/bgRigth.svg"
import { Link } from "react-router-dom";


export const ContainerMenu = styled.div`
    width: 100vw;
    min-height: 100vh;
    background-color: #fff;
    border-radius: 9px;
    cursor: grab;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
   
     background: linear-gradient(rgba(255, 255, 2555, 0.6), rgba(255, 255, 2555, 0.6)),
        url(${background});
        height: 100%;
      
   
`;  

export const Banner = styled.div`
    background: url(${hamburguer}) no-repeat center center;
    background-position: center;
    background-color: #1f1f1f;
    background-size: cover;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 480px;
    width: 100%;
    border-radius: 9px;
    position: relative;

    h1 {
        font-family: "road rage", sans-serif;
        font-size: 80px;
        color: #fff;
        position: absolute;

        right: 10%;
        top: 20%;


        span {
            display: block;
            color: #fff;
            font-size: 20px;
        }
    }


`;

export const CategoryMenu = styled.div`
   display: flex;
   justify-content: center;
   gap: 40px;
   margin-top: 40px;
`;

export const ProductsContainner = styled.div`
    display: grid;
   grid-template-columns: repeat(3, 1fr);
   padding: 40px;
   justify-content: center;
   max-width: 1200px;
   gap: 60px;
   margin: 50px auto 0;
`;

export const CategoryButton = styled(Link)`
   text-decoration: none;
    cursor: pointer;
    background: none;
    color: ${props => props.$isActive ? '#9758a6' : '#696969'};
   font-size: 20px;
   font-weight: 600;
   border-bottom: ${props => props.$isActive ? '2px solid #9758a6' : 'none'};
   
`;