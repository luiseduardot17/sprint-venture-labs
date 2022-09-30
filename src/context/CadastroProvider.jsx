import React, { createContext, useState } from "react";
import Alert from "../components/Alert/Alert";

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
  const [page, setPage] = useState(0)

  function handleChange(e, chave) {
    setInfos({ ...infos, [chave]: e.target.value });
  }

  function nextPage(e) {
    e.preventDefault()
    setPage(page + 1)
  }

  function handleClick(e) {
    e.preventDefault();
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
    setPage(0)
  }


  const contexto = {
    infos: infos,
    BancoDeDados: BancoDeDados,
    page: page,
    nextPage: nextPage,
    handleChange: handleChange,
    handleClick: handleClick,
  };
  
  return (
    <CadastroContext.Provider value={contexto}>
        {children}
    </CadastroContext.Provider>
  )
};

export default CadastroProvider;
