import { ContainerButton } from "./styles";
import Cart from "../../assets/Cart.svg";

export function CardButton( {...props}) {
    return (
        <ContainerButton {...props}>
            <img src={Cart} alt="Cart"/>
        </ContainerButton>
    )
}