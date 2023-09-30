import '.../Styles/Pages/ContactoPage.css';
const Contacto = (props)=>
{
    return
    (
      <main className="holder contacto">
        <h2>CONTACTO RAPIDO</h2>
        <form action="" method="" className="formulario">
        <p>
          <label for="nombre">Nombre</label>
          <input type="text" name=""/>
        </p>
        <p>
          <label for="email">Email</label>
          <input type="text" name=""/>
        </p>
        <p>
          <label for="telefono">Telefono</label>
          <input type="text" name=""/>
        </p>
        <p>
          <label for="mensaje">Mensaje</label>
          <textarea name=""></textarea>
        </p>
        <p class="acciones"><input type="submit"
          value="Enviar"/>
        </p>
  
  
      </form>
      <div class="datos">
          <h2>VIA DE COMUNICACION DIRECTA</h2>
          <p>Tambien puede contactarse con nosotros usando los siguientes medios</p>
          <ul>
              <li>Telefono 2664614059</li>
              <li>spilon@gmail.com</li>
              <li>Facebook:</li>
          </ul>
      </div>
  </main>
        
    )
}
export default Contacto;
