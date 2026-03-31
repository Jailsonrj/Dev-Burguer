import { Container, Footer, NavLink, NavLinkConteiner,  } from "./syles";
import { navLinks } from "./navLinks";
import Logo from "../../assets/Logo.svg"
import { SignOutIcon } from "@phosphor-icons/react";
import { useUser } from "../../hooks/UserContext";
import { useResolvedPath } from "react-router-dom";

export function SideNavAdmin() {

    const { logout } = useUser();
    const { pathname } = useResolvedPath();

    return (
        <Container>
            <img src={Logo} alt="logo"/>
            <NavLinkConteiner>
                {navLinks.map((link) => (
                    <NavLink $isActive={pathname === link.path} key={link.id} to={link.path} >{link.icon} <span>{link.title}</span></NavLink>
                ))}
            </NavLinkConteiner>
            <Footer>
                <NavLink to="/login" onClick={logout}>
                    <SignOutIcon/>
                    Sair
                </NavLink>
            </Footer>
        </Container>
    )
}