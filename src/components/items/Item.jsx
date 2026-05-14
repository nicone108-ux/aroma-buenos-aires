import { useState } from "react";

function Item({ nombre, marca, precio, descripcion, stock, imagen }) {
    const [cantidad, setCantidad] = useState(0);

    const incrementar = () => {
        if (cantidad < stock) 
            setCantidad(cantidad + 1)
        };
    const decrementar = () => {
        if(cantidad > 0) 
            setCantidad(cantidad - 1)
        }

    const CompraClick = () => {
    alert(`¡Agregaste ${cantidad} ${nombre} al carrito!`);
    };
    const MouseArriba = () => {console.log(`Vas a comprar ${cantidad} ${nombre}`);
};
return (
    <div style={{ flexWrap: "wrap", border: "1px solid #ccc", padding: "15px", marginBottom: "20px", borderRadius: "5px", backgroundColor: "#f9f9f9" }}>
      <h1 style={{ fontSize: "25px", marginBottom: "20px" }}>{nombre}</h1>
      <p><strong>Marca:</strong> {marca}</p>
      <p><strong>Descripción:</strong> {descripcion}</p>
      <p><strong>Precio:</strong> ${precio} ARS</p>
      <p><strong>Stock:</strong> {stock}</p>
      <img src={imagen} alt={nombre} style={{ width: "70px", height: "250px", border: "1px solid #ccc" }} />
      <p><strong>Cantidad a comprar:</strong></p>

      <button onClick={decrementar}>-</button> 
      <span style={{ margin: "0 10px", fontFamily: "Arial, sans-serif", fontSize: "13px" }}>{cantidad}</span> 
      <button onClick={incrementar}>+</button>
      <div>
      <button style={{ marginTop: "10px", padding: "10px 20px", backgroundColor: "#639c2d", border: "none", color: "#fff", cursor: "pointer" }}
        onClick={CompraClick}
        onMouseOver={MouseArriba}>
        Comprar Producto
      </button>
    </div>
        </div>


  );
}
export default Item