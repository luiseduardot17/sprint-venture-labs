import React, { useContext } from "react";
import FichaCliente from "../../components/FichaCliente/FichaCliente";
import { CadastroContext } from "../../context/CadastroProvider";
import S from "./Clientes.module.css";

const Clientes = () => {

  const {BancoDeDados} = useContext(CadastroContext)
  return (
    <div className={S.containerClientes}>
      <div className={S.container}>
        <h2>Conheça nossos clientes</h2>
        <FichaCliente BancoDeDados={BancoDeDados}/>
      </div>
    </div>
  );
};

export default Clientes;
