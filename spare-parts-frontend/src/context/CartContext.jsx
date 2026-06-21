import { createContext, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {

    const [cartItems, setCartItems] = useState([]);

    function addToCart(product) {

        const existingItem = cartItems.find(
            item => item.id === product.id
        );

        if (existingItem) {

            setCartItems(
                cartItems.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            );

        } else {

            setCartItems(
                [...cartItems, { ...product, quantity: 1 }]
            );

        }

    }

    function removeFromCart(id) {

        setCartItems(
            cartItems.filter(item => item.id !== id)
        );

    }

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;