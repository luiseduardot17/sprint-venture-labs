import React from "react";
import "./styles/reset.css";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import Home from "./pages/Home/Home";
import Cadastrar from "./pages/Cadastrar/Cadastrar";
import Clientes from "./pages/Clientes/Clientes";

const Routes = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/Cadastrar" element={<Cadastrar />} />
        <Route path="/Clientes" element={<Clientes />} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
