import React, { createContext, useState } from "react";

export const CadastroContext = createContext();

const CadastroProvider = ({ children }) => {
  const [infos, setInfos] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    telefone: "",
    cep: "",
    endereço1: "",
    endereço2: "",
    nascimento: "",
    cpf: "",
    renda: "",
  });

  const [BancoDeDados, setBancoDeDados] = useState([]);

  function handleChange(e, chave) {
    setInfos({ ...infos, [chave]: e.target.value });
  }

  function handleClick(e) {
    e.preventDefault();
    console.log(infos);
    setBancoDeDados([...BancoDeDados, infos]);

    setInfos({
      nome: "",
      sobrenome: "",
      email: "",
      telefone: "",
      cep: "",
      endereço1: "",
      endereço2: "",
      nascimento: "",
      cpf: "",
      renda: "",
    });
  }

  console.log(BancoDeDados);


  const contexto = {
    infos: infos,
    BancoDeDados: BancoDeDados,
    handleChange: handleChange,
    handleClick: handleClick
  }
  return (
    <CadastroContext.Provider value={contexto}>
        {children}
    </CadastroContext.Provider>
  )
};

export default CadastroProvider;
