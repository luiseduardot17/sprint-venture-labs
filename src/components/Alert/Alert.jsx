import React from "react";
import { useContext } from "react";
import { CadastroContext } from "../../context/CadastroProvider";
import S from "./Alert.module.css";

const Alert = () => {
  const { infos, handleClick } = useContext(CadastroContext);

  return (
    <div className={S.alerta}>
      <h3>
        Olá {infos.nome} {infos.sobrenome}, obrigado por se cadastrar!😃
      </h3>
      <h3>
        Ao clicar em "Ok" você poderá conferir seus dados na aba "Clientes"
      </h3>
      <h3>Entraremos em contato com você em breve! </h3>
      <div className={S.containerBtn}>
        <input
          type="submit"
          value="OK ✔"
          className={S.btn}
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default Alert;
