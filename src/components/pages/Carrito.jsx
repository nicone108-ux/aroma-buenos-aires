import { react } from 'react';
import { useCart } from "../../context/CartContext.jsx";

function Cart() {
    const { cart, clearCart, getCartTotal } = useCart();
    if (!cart.length === 0) {
        return (
            <div>
                <h1>Carrito de compras</h1>
                <p>Tu carrito está vacío.</p>
            </div>
        );
    }
    return (
        <div>
            <h1>Carrito de compras</h1>
                <div>
                    <ul>
                        {cart.map((item) => (
                            <li key={item.id}>
                                <p>{item.nombre}</p>
                                <p>Cantidad: {item.cantidad}</p>
                                <p>Precio Unitario: ${item.precio}</p>
                                <p>Subtotal: ${item.precio * item.cantidad} ARS</p>
                            </li>
                        ))}
                    </ul>
                    <p>Total a pagar: ${getCartTotal()} ARS</p>
                    <button onClick={clearCart}>Vaciar Carrito</button>
                </div>
            
        </div>
    );
}
export default Cart;