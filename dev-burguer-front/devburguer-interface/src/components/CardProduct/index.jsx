import { formatPrice } from "../../utils/formatPrice";
import { CardButton } from "../CardButton";
import { CardImage, Container } from "./styles"
import { useCart } from "../../hooks/CartContext";

export function CardProduct({offer}) {

    const { putCart } = useCart();

    return (
        <Container>
            <CardImage src={offer.url} alt={offer.name}/>
            <div>
                <p>{offer.name}</p>
                <strong>R$ {formatPrice(offer.price)}</strong>
            </div>
        <CardButton onClick={() => putCart(offer)}></CardButton>
        </Container>
    )
}


