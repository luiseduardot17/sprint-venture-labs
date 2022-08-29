import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import Home from "./pages/Home/Home";
import Cadastrar from "./pages/Cadastrar/Cadastrar";
import Clientes from "./pages/Clientes/Clientes";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cadastrar" element={<Cadastrar />} />
        <Route path="/Clientes" element={<Clientes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
