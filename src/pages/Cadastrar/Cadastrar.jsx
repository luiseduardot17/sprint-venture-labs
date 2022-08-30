import React, { useContext } from "react";
import Form from "../../components/Form/Form";
import { CadastroContext } from "../../context/CadastroProvider";
import S from "./Cadastrar.module.css";

const Cadastrar = () => {

  const {infos, handleChange, handleClick} = useContext(CadastroContext)
  
  return (
    <div className={S.container}>
      <h2>Venha fazer parte do ecossistema tech</h2>

      <Form infos={infos} handleChange={handleChange} handleClick={handleClick}/>
    </div>
  );
};

export default Cadastrar;
