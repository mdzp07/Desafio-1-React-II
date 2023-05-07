import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Navegacion from "./components/Navbar";

import Home from "./views/Home";
import Contacto from "./views/Contacto";
import Producto from "./views/Producto";



function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Navegacion />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/productos" element={<Producto />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
