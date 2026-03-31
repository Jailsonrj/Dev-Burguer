import styled from "styled-components";
import BgPadrao from "../../assets/bgPadrao.svg";
import bgRigth from "../../assets/bgRigth.svg";

export const Container = styled.div`
    width: 100%;
    background-color: #fff;
    min-height: 100vh;
    background: linear-gradient(rgba(255, 255, 2555, 0.6), rgba(255, 255, 2555, 0.6)),
    url(${bgRigth});
    
`;

export const Banner = styled.div`

    background: url(${BgPadrao});
    background-size: cover;
    background-position: center;
    background-color: #1f1f1f;
   display: flex ;
   align-items: center;
   justify-content: center;
   position: relative;  
   height: 200px;

    img {
        height: 150px;
       
    }
`;

export const Title = styled.h2`
   font-size: 40px;
   font-weight: 600;
   color: #61a120;
   padding-bottom: 12px;
   position: relative;
   text-align: center ;

   &::after{
       content: "";
       position: absolute;
       bottom: 0;
       left: 50%;
       width: 50px;
       height: 4px;
       background-color: #61a120;
   }
`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 30%;
    width: 100%;
    padding: 40px;
    max-width: 1200px;
    gap: 40px;
    margin: 0 auto;
`;

