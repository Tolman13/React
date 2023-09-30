import '.../Styles/Pages/Cotizaciones.css';
const Cotizaciones= (props)=> {
    return(
        <main className="holder">
            <div className="homeimg">
            </div>
            <div className="contenido">
        <h3>PLAN BASICO</h3>
        <p> Incluye la instalacion completa del sistema y
            capacitación del mismo valor total $50000.00</p>
    </div>
    <div className="contenido">
        <h3>PLAN COMPLETO</h3>
        <p>Incluye la instalacion completa del sistema y
            capacitación del mismo valor total, ademas  
            permite que podamos realizar mantenimientos del sistema
            y modificaciones si el cliente asi lo desea, valor total 
            $50000.00 y costo mensual de $12.000</p>
    </div>

</main>
)
}
export default Cotizaciones;