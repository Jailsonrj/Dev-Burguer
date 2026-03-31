import { Container, Banner, Content, Title } from "./styles";
import Logo from "../../assets/Logo.svg"
import { CartItens, CartResume } from "../../components";

export function Cart() {
    return ( 
         <Container>
            <Banner>
                <img src={Logo} alt="logo"/>
            </Banner>
            <Title>Checkout - Pedido </Title>
            <Content>
                <CartItens></CartItens>
                <CartResume></CartResume>
            </Content>
         </Container>
    )
  
}