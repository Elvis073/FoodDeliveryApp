
import React, { createContext, useState } from 'react';

// Create a context called CartContext, more like it replace a prop, for the good though
export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const addItemToCart = (item) => {
        const itemExists = cart.find(cartItem => cartItem.id === item.id);
        
        if (itemExists) {
            setCart(cart.map(cartItem =>
                cartItem.id === item.id
                    ? { ...cartItem, quantity: cartItem.quantity + 1 }
                    : cartItem
            ));
        } else {
            setCart([...cart, { ...item, quantity: 1 }]);
        }
    };

    const updateCartItemQuantity = (itemId, quantity) => {
        if (quantity <= 0) {
            removeItemFromCart(itemId);
        } else {
            setCart(cart.map(cartItem =>
                cartItem.id === itemId
                    ? { ...cartItem, quantity: quantity }
                    : cartItem
            ));
        }
    };

    const removeItemFromCart = (itemId) => {
        setCart(cart.filter(cartItem => cartItem.id !== itemId));
    };

    const clearCart = () => {
        setCart([]);
    };

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                addItemToCart,
                updateCartItemQuantity,
                removeItemFromCart,
                clearCart,
                calculateTotal,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
