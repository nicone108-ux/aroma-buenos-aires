import React, { useState, useContext, createContext } from 'react';
const CartContext = createContext();
export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart debe ser usado dentro de un CartProvider');
    }
    return context;
};

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (producto, cantidad) => {
        const itemInCart = cart.find(item => item.id === producto.id);
        if (itemInCart) {
            const updatedCart = cart.map(item => 
                item.id === producto.id 
                ? { ...item, cantidad: item.cantidad + cantidad } : item
            );
            setCart(updatedCart);
        } else {
            setCart((prevCart) => [...prevCart, { ...producto, cantidad: cantidad }]);
        }
    };
    const clearCart = () => {
        setCart([]);
    };
    const getCartQuantity = () => {
        return cart.reduce((total, item) => total + item.cantidad, 0);
    };
    const getCartTotal = () => {
        return cart.reduce((total, item) => total + (item.price * item.cantidad), 0);
    };

return (
    <CartContext.Provider value={{ cart, setCart, addToCart, clearCart, getCartQuantity, getCartTotal }}>
        {children}
    </CartContext.Provider>
);
}

