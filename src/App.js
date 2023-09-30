import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Componentes/Layout/Header";
import Footer from "./Componentes/Layout/Footer";
import Nav from "./Componentes/Layout/Nav";
//import './App.css';

import ContactoPage from './pages/ContactoPage';
import Cotizaciones from './pages/Cotizaciones';
import Descargas from './pages/Descargas';
import HomePage from './pages/HomePage';
import Servicios from './pages/Servicios';
function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path= "contacto" element={<ContactoPage/>}/>
        <Route path= "cotizaciones" element={<Cotizaciones/>}/>
        <Route path= "descargas" element={<Descargas/>}/>
        <Route path= "servicios" element={<Servicios/>}/>

      </Routes>
      </BrowserRouter>
      
      <Footer/>  
    </div>
  );
}

export default App;
