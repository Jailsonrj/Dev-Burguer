import { useLocation } from "react-router-dom"
import { Elements } from "@stripe/react-stripe-js"
import  stripePromise  from "../../config/stripeConfig"
import { CheckoutForm } from "../../components"


export function Checkout() {

    const {state: {data}} = useLocation()

    if (!data.clientSecret) return <div>Erro no stripe checkout </div>

    return (
        <Elements stripe={stripePromise} options={{clientSecret: data.clientSecret}}>
            <CheckoutForm/>
        </Elements>
    )
}

