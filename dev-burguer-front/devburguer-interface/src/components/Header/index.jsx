import { ContainerHearder, HeaderLink, Content , Logout, LinkContainner, Navigation, Options, Profile } from "./styles";
import { UserCircle, ShoppingCart } from '@phosphor-icons/react'
import { useNavigate, useResolvedPath } from "react-router-dom";
import { useUser } from "../../hooks/UserContext";
export const Header = () => {

    const navigate = useNavigate();
    const path = useResolvedPath().pathname;

    const { userInfo, logout } = useUser();

    function handleClick() {
        
        logout();
        navigate("/login");
    }

    return (
        <ContainerHearder>
            <Content>
                <Navigation>
                <div>
                    <HeaderLink to="/" $isActive={path === "/"}>Home</HeaderLink>
                    <hr />
                    <HeaderLink to="/menu" $isActive={path === "/menu"}>Cardapio</HeaderLink>
                    
                </div>
            </Navigation>
            <Options>
                <Profile>
                    <UserCircle size={32} weight="fill" color="#9758a6" />
                    <div>
                        <p>Olá, <span>{userInfo.name}</span></p>
                    </div>
                    <Logout onClick={handleClick}>Sair</Logout>
                </Profile>
            </Options>
            <LinkContainner>
                <ShoppingCart size={32} weight="fill" color="#9758a6" to="/carrinho" />
                <HeaderLink to="/carrinho">Carrinho</HeaderLink>
            </LinkContainner>
            </Content>
        </ContainerHearder>
    );
};