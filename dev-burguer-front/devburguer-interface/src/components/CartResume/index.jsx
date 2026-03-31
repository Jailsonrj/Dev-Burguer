import { useCart } from "../../hooks/CartContext";
import { formatPrice } from "../../utils/formatPrice";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { Button } from "../Button";
import { Container } from "./styles";
import { useNavigate } from "react-router-dom";

export function CartResume() {

    const navigate = useNavigate();

    const { cart, clearCart } = useCart();

    const [total, setTotal] = useState(0);
    const [delivery] = useState(500);

    useEffect(() => {
        const sumAllitens = cart.reduce(
            (acc, item) => acc + item.price * item.quantity,
            0
        );
        setTotal(sumAllitens);
    }, [cart]);

    const submitOrder = async () => {
        const products = cart.map(item => {
            return {
                id: item.id,
                quantity: item.quantity,
                price: item.price
            }
        });

        try {
            const { data } = await api.post('/create-payment-intent', { products });
            
            navigate('/checkout', { state: { data } });
        } catch (error) {
            toast.error('Erro ao realizar pedido', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }


    return (
        <div>
            <Container>
                <div className="resume">
                    <h2 className="title">Resumo</h2>
                    <p className="itens">Itens</p>
                    <p className="price">{formatPrice(total)}</p>
                    <p className="delivery">Taxa de entrega</p>
                    <p className="price-delivery">{formatPrice(delivery)}</p>
                </div>
                <div className="total">
                    <p>Total</p>
                    <p>{formatPrice(total + delivery)}</p>
                </div>
            </Container>
            <Button onClick={submitOrder}>Finalizar compra</Button>
        </div>
    )
}