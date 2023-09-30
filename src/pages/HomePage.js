import '.../Styles/Pages/HomePage.css';
const HomePage = (props) => { return (
   <main className="holder">
         <h2>SISTEMAS PARA TU EMPRESA</h2>
         <div className="contenedor-imagenes">
            <img src="images/Imagen1.jpg" className="imagen" width="400" alt="factura"/>
            <img src="images/descarga.jpg" className="imagen" width="400" alt="controlador"/>
         </div>
         <div className="homeimg">
            
         </div>
         <div className="columnas">
            <div className="bienvenidos">
               <h3>CARACTERISTICAS DEL SISTEMA</h3>
               <ul>
                  <li>Diseño simple e intuitivo para cualquier usuario </li>
                  <li>Compatibilidad con diferentes sistemas operativos </li>
                  <li>Facturaciones instantáneas por medio de comanderas</li>
                  <li>Posibilidades de modificaciones de acuerdo a las necesidades del cliente</li>
                  <li>Control de Stock y actualización de precios</li>
               </ul>
            </div>
         </div>
      </main>
   );
};
export default HomePage;