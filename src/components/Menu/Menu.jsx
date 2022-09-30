import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Footer from "../Footer/Footer";
import S from "./Menu.module.css";

const Menu = () => {
  return (
    <div className={S.container}>
      <nav className={S.nav}>
        <Link className={S.nav} to="/">
          <Button texto="Home" />
        </Link>
        <Link className={S.nav} to="/Cadastrar">
          <Button texto="Cadastrar" />
        </Link>
        <Link className={S.nav} to="/Clientes">
          <Button texto="Clientes" />
        </Link>
        
      </nav>
      <Footer/>
    </div>
  );
};

export default Menu;
