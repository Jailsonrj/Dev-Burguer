import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContainerHearder = styled.div`
   background-color: #1f1f1f;
   width: 100%;
   height: 72px;
`;

export const Content = styled.div`   
   display: flex;
   align-items: center;
   justify-content: space-between;
   max-width: 1200px;
   width: 100%;
   margin: 0 auto;

`;

export const Navigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 72px;

  div{
    margin-left: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    hr {
        width: 1px;
        height: 24px;
        border: 1px solid #9758a6;
    }
  }
`;

export const HeaderLink = styled(Link)`
    color: ${props => props.$isActive ? '#9758a6' : '#fff'}; 
    border-bottom: ${props => props.$isActive ? '2px solid #9758a6' : 'none'};
    padding-bottom: 5px;   
    text-decoration: none;
    font-size: 18px;
    font-weight: 600;
    transition: all 0.3s ease-in-out;


    &:hover {
        color: #9758a6;
    }
`;

export const Options = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;

    
    p {
        color: #fff;
        line-height: 90%;
        font-weight: 300;

        span {
            color: #9758a6;
            font-weight: 600;
        }
        
    }
`;  

export const Logout = styled.button`
    color: orange;
    text-decoration: none;
    font-size: 18px;
    font-weight: 600;
    background-color: transparent;
    border: none;
    transition: all 0.3s ease-in-out;

    &:hover {
        color: red;
    }

`;

export const LinkContainner = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;


