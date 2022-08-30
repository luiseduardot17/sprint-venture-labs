import React, { useContext } from "react";
import { CadastroContext } from "../../context/CadastroProvider";
import Button from "../Button/Button";
import S from "./Form.module.css";
import { VscArrowRight } from "react-icons/vsc";

const Form = () => {
  const {infos, handleChange, handleClick} = useContext(CadastroContext)
  return (
    <div className={S.container}>
      <form className={S.form}>
        <label htmlFor="name" className={S.label}>
          Nome:
        </label>
        <input type="text" id="name" name="name" value={infos.nome} onChange={(e)=>handleChange(e, 'nome')} className={S.input}></input>
        <label htmlFor="lastname" className={S.label}>
          Sobrenome:
        </label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          value={infos.sobrenome}
          onChange={(e)=>handleChange(e, 'sobrenome')}
          className={S.input}
        ></input>
        <label htmlFor="email" className={S.label}>
          E-mail:
        </label>
        <input type="email" id="email" name="email" value={infos.email} onChange={(e)=>handleChange(e, 'email')} className={S.input}></input>
        <label htmlFor="tel" className={S.label}>
          Telefone:
        </label>
        <input type="tel" id="tel" name="tel" value={infos.telefone} onChange={(e)=>handleChange(e, 'telefone')} className={S.input}></input>
        <Button onClick={handleClick} texto="Próximo passo" icone={<VscArrowRight size="20px"/>}/>
      </form>
    </div>
  );
};

export default Form;
