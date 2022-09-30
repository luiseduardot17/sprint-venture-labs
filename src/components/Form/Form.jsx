import React, { useContext } from "react";
import { CadastroContext } from "../../context/CadastroProvider";
import S from "./Form.module.css";

const Form = () => {
  const { infos, handleChange, nextPage } = useContext(CadastroContext);
  return (
    <div className={S.container}>
      <h2>Venha fazer parte do nosso ecossistema tech... </h2>
      <p>Clientes venture tem todas as soluções na palma da mão</p>
      <div className={S.containerForm}>
      <form className={S.form}>
        <label htmlFor="name" className={S.label}>
          Nome:
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="josé"
          value={infos.nome}
          required={true}
          onChange={(e) => handleChange(e, "nome")}
          className={S.input}
        />
        <label htmlFor="lastname" className={S.label}>
          Sobrenome:
        </label>
        <input
          type="text"
          name="lastname"
          id="lastname"
          placeholder="Silva"
          value={infos.sobrenome}
          required={true}
          onChange={(e) => handleChange(e, "sobrenome")}
          className={S.input}
        />
        <label htmlFor="email" className={S.label}>
          E-mail:
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="josesilva@gmail.com"
          value={infos.email}
          required={true}
          onChange={(e) => handleChange(e, "email")}
          className={S.input}
        />
        <label htmlFor="tel" className={S.label}>
          Telefone:
        </label>
        <input
          type="tel"
          name="tel"
          id="tel"
          placeholder="(11)91234-5678"
          value={infos.telefone}
          required={true}
          onChange={(e) => handleChange(e, "telefone")}
          className={S.input}
        />
        <div className={S.containerBtn}>
          <input
            type="submit"
            value="Próximo passo ➡"
            className={S.btn}
            onClick={nextPage}
          />
        </div>
      </form>
      </div>
      
    </div>
  );
};

export default Form;
