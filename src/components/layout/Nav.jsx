import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav style={{ position: "sticky", top: "0", verticalAlign: "middle", alignItems: "center", scale: "1.2", lineHeight: "2.5", fontSize: "10px", display: "flex", gap: "25px", justifyContent: "center", padding: "20px 10px", backgroundColor: "#121111" }}>
      <Link to="/">
        <button>Inicio</button>
      </Link>
      <Link to="/productos">
        <button>Productos</button>
      </Link>

      <Link to="/contacto">
         <button>Contacto</button>
      </Link>
    </nav>
  );
}


//function Nav() {
//   return (
//     <nav style={{ fontFamily: "Arial, sans-serif",  alignItems: "center", fontSize: "30px", display: "flex", gap: "30px", justifyContent: "center", padding: "20px 50px", backgroundColor: "#121111" }}>
//       <button>Inicio</button>

//       <button>Productos</button>

//       <button>Contacto</button>
//     </nav>
//   );
// }

export default Nav;