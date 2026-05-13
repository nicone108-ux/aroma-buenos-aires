import "./footer.css";
import lucia from "../../assets/lucia.jpg"
import camila from "../../assets/camila.jpg"
import nicolas from "../../assets/nicolas.jpg"

function Footer() {
  return (
    <footer className="footer">
      <h3>Aroma Buenos Aires</h3>
      <p className="descripcion">
        Tienda especializada en perfumes y fragancias.
      </p>

      <div className="tarjetas-container">
        <article className="tarjeta">
           <img src={lucia} alt="Lucía Fernández" />
          <h4>Lucía Fernández</h4>
          <p>CEO & Fundadora</p>
        </article>

        <article className="tarjeta">
          <img src={nicolas} alt="Nicolás Gómez" />
          <h4>Nicolás Gómez</h4>
          <p>Marketing Digital</p>
        </article>

        <article className="tarjeta">
          <img src={camila} alt="Camila Ruiz" />
          <h4>Camila Ruiz</h4>
          <p>Atención al Cliente</p>
        </article>
      </div>
            <p> Copyright &copy; 2025-2026 - Aroma Buenos SRL.</p> 
    </footer>
  );
}

export default Footer;
