import React from "react";
import Button from "../Button/Button";
import S from "./Menu.module.css";

const Menu = () => {
  return (
    <div className={S.container}>
      <nav className={S.nav}>
        <Button texto="Home" />
        <Button texto="+Cadastrar" />
        <Button texto="Clientes" />
      </nav>
    </div>
  );
};

export default Menu;
