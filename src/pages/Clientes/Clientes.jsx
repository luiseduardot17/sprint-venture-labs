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
        {BancoDeDados.length > 0 ? BancoDeDados.map((BancoDeDados, index) => (
          <FichaCliente
          key={index} 
          nome={BancoDeDados.nome}
          sobrenome={BancoDeDados.sobrenome}
          email={BancoDeDados.email}
          telefone={BancoDeDados.telefone}
          cep={BancoDeDados.cep}
          endereço1={BancoDeDados.endereço1}
          endereço2={BancoDeDados.endereço2}
          nascimento={BancoDeDados.nascimento}
          cpf={BancoDeDados.cpf}
          renda={BancoDeDados.renda}
          />
        ))
        : <p>No momento não existem clientes para mostrar 😕</p>}
      </div>
    </div>
  );
};

export default Clientes;
