import { Link } from "react-router-dom";
import { useCart } from '../../context/CartContext';

  function Nav() {
  const { getCartQuantity } = useCart();
  const cartTotalQuantity = getCartQuantity();
  return (
    <nav style={{ position: "sticky", top: "0", verticalAlign: "middle", alignItems: "center", scale: "1.2", lineHeight: "2.5", fontSize: "10px", display: "flex", gap: "25px", justifyContent: "center", padding: "20px 10px", backgroundColor: "#d4c390" }}>
      <Link to="/">
        <button>Inicio</button>
      </Link>
      <Link to="/productos">
        <button>Productos</button>
      </Link>
      <Link to="/contacto">
         <button>Contacto</button>
      </Link>
      <ul style={{ fontSize: "13px" }}>
        <Link to="/carrito">
          Carrito 🛒 {cartTotalQuantity > 0 && <span> ({cartTotalQuantity})</span>}
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;