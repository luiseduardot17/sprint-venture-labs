import React, { useContext } from "react";
import Alert from "../../components/Alert/Alert";
import Form from "../../components/Form/Form";
import FormDocs from "../../components/FormDocs/FormDocs";
import FormEndereco from "../../components/FormEndereco/FormEndereco";
import { CadastroContext } from "../../context/CadastroProvider";
import S from "./Cadastrar.module.css";

const Cadastrar = () => {
  const { page } = useContext(CadastroContext);

  return (
    <div className={S.container}>
      
      {page === 0 && <Form />}
      {page === 1 && <FormEndereco />}
      {page === 2 && <FormDocs />}
      {page === 3 && <Alert/>}
      
    </div>
  );
};

export default Cadastrar;
