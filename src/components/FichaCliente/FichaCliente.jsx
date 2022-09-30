import React from "react";
import S from "./FichaCliente.module.css";
import { MdAccountCircle } from "react-icons/md";

const FichaCliente = ({
  nome ,
  sobrenome,
  email,
  telefone,
  cep,
  endereço1,
  endereço2,
  nascimento,
  cpf,
  renda,
}) => {
  return (
    <div className={S.container}>
      <div className={S.card}>
        <h3>
          {nome } <span></span>
          {sobrenome}
        </h3>
        <p>{email}</p>
        <p>{telefone}</p>
        <p>{cep}</p>
        <p>{endereço1}</p>
        <p>{endereço2}</p>
        <p>{nascimento}</p>
        <p>{cpf}</p>
        <p>{renda}</p>
      </div>
      <MdAccountCircle size="40px" color="#79F131" />
    </div>
  );
};

export default FichaCliente;
