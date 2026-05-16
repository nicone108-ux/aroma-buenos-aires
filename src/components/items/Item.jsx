import { useState } from "react";
import { useCart } from "../../context/CartContext.jsx";

function Item({ id, nombre, marca, precio, descripcion, stock, imagen }) {
    const producto = { id, nombre, marca, precio, descripcion, stock, imagen };
    const [cantidad, setCantidad] = useState(0);
    const { addToCart } = useCart();

    const incrementar = () => {
        if (cantidad < stock) 
            setCantidad(cantidad + 1)
        };
    const decrementar = () => {
        if(cantidad > 0) 
            setCantidad(cantidad - 1)
        }
    const AgregarCarritoClick = () => {
        if (cantidad > 0) {
            addToCart(producto, cantidad);
            alert(`¡Agregaste ${cantidad} ${nombre} al carrito!`);
        } else {
            alert("Selecciona una cantidad mayor a 0 para agregar al carrito.");
        }
    };
    const MouseArriba = () => {
        console.log(`Vas a comprar ${cantidad} ${nombre}`);
    };
return (
    <div style={{ flexWrap: "wrap", border: "1px solid #ccc", padding: "15px", marginBottom: "20px", borderRadius: "5px", backgroundColor: "#f9f9f9" }}>
      <h1 style={{ fontSize: "25px", marginBottom: "20px" }}>{nombre}</h1>
      <p><strong>Marca:</strong> {producto.marca}</p>
      <p><strong>Descripción:</strong> {producto.descripcion}</p>
      <p><strong>Precio:</strong> ${producto.precio} ARS</p>
      <p><strong>Stock:</strong> {producto.stock}</p>
      <img src={producto.imagen} alt={producto.nombre} style={{ width: "70px", height: "250px", border: "1px solid #ccc" }} />
      <p><strong>Cantidad a comprar:</strong></p>

      <button onClick={decrementar}>-</button> 
      <span style={{ margin: "0 10px", fontFamily: "Arial, sans-serif", fontSize: "13px" }}>{cantidad}</span> 
      <button onClick={incrementar}>+</button>
      <div>
      <button style={{ marginTop: "10px", padding: "10px 20px", backgroundColor: "#639c2d", border: "none", color: "#fff", cursor: "pointer" }}
        onClick={AgregarCarritoClick}
        onMouseOver={MouseArriba}>
        Agregar al Carrito
      </button>
    </div>
        </div>
  );
}
export default Item;
