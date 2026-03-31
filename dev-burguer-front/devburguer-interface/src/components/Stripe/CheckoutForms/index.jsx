import  { useState } from "react";
import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useLocation, useNavigate } from "react-router-dom";
import './styles.css'
import { useCart } from "../../../hooks/CartContext";
import { api } from "../../../services/api";
import { toast } from "react-toastify";

export function CheckoutForm() {

  const { cart, clearCart } = useCart();
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();

  const { state: { data } } = useLocation()
 
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      console.error("Stripe.js esta com problema!");
      return;
    }

    setIsLoading(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      redirect: "if_required",
    });

    if (error) {
      setMessage(error.message);
    } else if (paymentIntent && paymentIntent.status === "succeeded") {
      try {

        const products = cart.map(item => {
          return {
            id: item.id,
            quantity: item.quantity,
            price: item.price
          }
        });

        const { status } = await api.post('/orders', { products }, {
          validateStatus: () => true
        })
        if (status === 201 || status === 200) {
          setTimeout(() => {
            navigate(`/complete?payment_intent_client_secret=${paymentIntent.client_secret}`);       
          }, 2000);
           clearCart();
          toast.success('Pedido realizado com sucesso!');
        } else if (status === 400) {
          toast.error('Erro ao realizar pedido');
        } else {
          throw new Error();
        }
      } catch (error) {
        toast.error('Falha no sistema! Tente novamente!');
      }

    } else {
                 navigate(`/complete?payment_intent_client_secret=${paymentIntent.client_secret}`);
    }
      setIsLoading(false);
 }


const paymentElementOptions = {
  layout: "accordion"
}

return (
  <div className="container">
    <form id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement id="payment-element" options={paymentElementOptions}/>
      <button disabled={isLoading || !stripe || !elements} id="submit" className="button">
        <span id="button-text">
          {isLoading ? <div className="spinner" id="spinner"></div> : "Pagar agora"}
        </span>
      </button>

      {message && <div id="payment-message">{message}</div>}
    </form>
  </div>
);
}

