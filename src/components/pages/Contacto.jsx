import "./Contacto.css";

function Contacto() {
  return (
    <section className="contacto">
      <h2>Contacto</h2>

      <p>
        ¿Tenés alguna consulta? Escribinos y te responderemos a la brevedad.
      </p>

      <form className="contacto-form">
        <div>
          <label>Nombre</label>
          <input type="text" placeholder="Tu nombre" />
        </div>

        <div>
          <label>Email</label>
          <input type="email" placeholder="tuemail@email.com" />
        </div>

        <div>
          <label>Mensaje</label>
          <textarea placeholder="Escribí tu consulta"></textarea>
        </div>

        <button type="submit">Enviar mensaje</button>
      </form>
    </section>
  );
}

export default Contacto;