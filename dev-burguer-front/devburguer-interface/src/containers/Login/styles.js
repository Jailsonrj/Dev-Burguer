import styled from "styled-components";
import BgPadrao from "../../assets/bgPadrao.svg";
import BgRigth from "../../assets/bgRigth.svg";
import { Link as LinkRouter } from "react-router-dom";

export const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
`;

export const LeftContainer = styled.div`
     background: url(${BgPadrao});
    background-size: cover;
    background-position: center;

    height: 100%;
    width: 100%;
    max-width: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    img{
        width: 80%;
    }
`;

export const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 100%;
    width: 100%;
    max-width: 50%;

    background: url(${BgRigth});
    background-size: cover;
    background-position: center;
    background-color: #1e1e1e;


    p {

        color: #fff;
        font-size: 18px;
        font-weight: 600;
        padding-top: 10px;
        a {
            text-decoration: underline;
        }
    }


`;

export const Title = styled.h1`
  font-family: "Road Rage", sans-serif;
  font-size: 40px;
  color: #fff;
  text-align: center;
  margin-bottom: 1rem;


  span {
    color: #9758a6;
    font-family: "Road Rage", sans-serif;
  }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 0%;
    width: 100%;
    max-width: 400px;
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;

    input {
        width: 100%;
        border-radius: 5px;
        border: none;
        padding: 0 16px;
        height: 52px;
    }

    label {
        color: #fff;
        font-weight: 600;
        font-size: 18px;
        font-family: "Poppins", sans-serif;
    }

        p {
        color: #ff6b6b;
        font-size: 14px;
       line-height: 80%;
       font-weight: 500;
       height: 20px;
    }
`;

export const Link = styled.a`
    color: #000;
    text-decoration: none;
    margin-top: 1rem;
`; 

export const RouterLink = styled(LinkRouter)`
    color: #fff;
    text-decoration: none;
    margin-top: 1rem;
`;








