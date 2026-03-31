import styled from "styled-components";
import Bannerhome from "../../assets/banner-home.svg";
import background from "../../assets/bgRigth.svg";

export const Banner = styled.div`
    background: url(${Bannerhome});
   background-size: cover;
   background-position: center;
    height: 480px;

    h1 {
        font-family: "road rage", sans-serif;
        font-size: 80px;
        color: #fff;   
        position: absolute;
        top: 20%;
        right: 10%;    
    }
`;

export const Containner = styled.section`
   background: linear-gradient(rgba(255, 255, 2555, 0.6), rgba(255, 255, 2555, 0.6)),
    url(${background});
    height: 100vh;
   
   `;

