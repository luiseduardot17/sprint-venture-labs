import React from "react";
import S from "./Clientes.module.css";

const Clientes = ({}) => {
  return (
    <div className={S.containerClientes}>
      <div className={S.container}>
        <h2>Conheça nossos clientes</h2>

        {/* {clientes.map((item, index)=> {
          return(
            <BancoDeDados
            key={index}
            nome={item.nome}
            sobrenome={item.sobrenome}
            email={item.email}
            telefone={item.telefone}
            cep={item.cep}
            endereço1={item.endereço1}
            endereço2={item.endereço2}
            nascimento={item.nascimento}
            cpf={item.cpf}
            renda={item.renda}/>
          )
          
          })} */}
      </div>
    </div>
  );
};

export default Clientes;
