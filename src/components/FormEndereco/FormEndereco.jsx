import React from "react";
import { useContext } from "react";
import { CadastroContext } from "../../context/CadastroProvider";
import S from "./FormEndereco.module.css";

const FormEndereco = () => {
  const { infos, handleChange, nextPage } = useContext(CadastroContext);

  return (
    <div className={S.container}>
      <h2>Venha fazer parte do nosso ecossistema tech... </h2>
      <p>Clientes venture tem todas as soluções na palma da mão</p>
      <div className={S.containerForm}>
        <form className={S.form}>
          <label htmlFor="cep" className={S.label}>
            CEP:
          </label>
          <input
            type="text"
            id="cep"
            name="cep"
            placeholder="00000-000"
            required={true}
            className={S.input}
            value={infos.cep}
            onChange={(e) => handleChange(e, "cep")}
          />
          <label htmlFor="address1" className={S.label}>
            Endereço 1:
          </label>
          <input
            type="text"
            id="address1"
            name="address1"
            placeholder="rua das flores, 23..."
            required={true}
            className={S.input}
            value={infos.endereço1}
            onChange={(e) => handleChange(e, "endereço1")}
          />
          <label htmlFor="address2" className={S.label}>
            Endereço 2:
          </label>
          <input
            type="text"
            id="address2"
            name="address2"
            placeholder="rua coronel, 555..."
            required={true}
            className={S.input}
            value={infos.endereço2}
            onChange={(e) => handleChange(e, "endereço2")}
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

export default FormEndereco;
