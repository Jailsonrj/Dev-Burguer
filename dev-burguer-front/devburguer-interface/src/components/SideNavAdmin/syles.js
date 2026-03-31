import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 100vh;
background-color: ${props => props.theme.black};

img {
    width: 60%;
    margin: 40px auto;
}
`;

export const NavLinkConteiner = styled.div`
    display: flex;
    flex-direction: column;
  width: 100%;
`;

export const NavLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 12px;
    padding: 10px 20px;
    color: ${props => props.$isActive ? props.theme.purple : props.theme.white}; ;
    font-size: 16px;
    text-decoration: none;


    &:hover {
        background-color: ${props => props.theme.purple};
    }
`;

export const Footer = styled.div`
    width: 100%;
    margin-top: auto;
`;