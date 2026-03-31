import { func } from "prop-types";
import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const putCart = (product) => {

        const cartIndex = cart.findIndex(item => item.id === product.id);

        let newProductInCart = []

        if (cartIndex !== -1) {
            newProductInCart = [...cart];
            newProductInCart[cartIndex].quantity += 1;

            setCart(newProductInCart);
        } else {
            newProductInCart = [...cart, { ...product, quantity: 1 }];

            setCart(newProductInCart);
        }

        updateLocalStorage(newProductInCart);

    }

    const clearCart = () => {

        updateLocalStorage([]);
        setCart([]);
    }

    const deleteProduct = (productId) => {
        const newCart = cart.filter(item => item.id !== productId);

        setCart(newCart);

        updateLocalStorage(newCart);
    }

    const increseProduct = (productId) => {
        const newCart = cart.map(item => item.id === productId ? { ...item, quantity: item.quantity + 1 } : item);

        setCart(newCart);

        updateLocalStorage(newCart);
    }

    const decreseProduct = (productId) => {
        const cartIndex = cart.findIndex(item => item.id === productId);

        if (cart[cartIndex].quantity > 1) {
            const newCart = cart.map(item => item.id === productId ? { ...item, quantity: item.quantity - 1 } : item);

            setCart(newCart);
        } else {
            deleteProduct(productId);
        }

    }

    
 const updateLocalStorage = (product) => {
    localStorage.setItem('devburguer:cartInfo', JSON.stringify(product));
  }

  useEffect(() => {

    const clientCartInfo = localStorage.getItem('devburguer:cartInfo');
    if (clientCartInfo) {
      setCart(JSON.parse(clientCartInfo));
    }

  }, []);

    return (
        <CartContext.Provider value={{ cart, putCart, clearCart, deleteProduct, increseProduct, decreseProduct }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }

    return context;
}