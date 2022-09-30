import React from 'react'
import { useContext } from 'react'
import { CadastroContext } from '../../context/CadastroProvider'
import S from './FormDocs.module.css'

const FormDocs = () => {

  const {infos, handleChange, nextPage, handleClick, onChange} = useContext(CadastroContext)
  
  return (
    <div className={S.container}>
      <h2>Venha fazer parte do nosso ecossistema tech... </h2>
      <p>Clientes venture tem todas as soluções na palma da mão</p>
      <div className={S.containerForm}>
      
      <form className={S.form}>
      <label htmlFor="birthday" className={S.label}>
        Data de Nascimento:
      </label>
      <input type="date" id="birthday" name="birthday" required={true} className={S.input} value={infos.nascimento}
        onChange={(e) => handleChange(e, "nascimento")}/>
      <label htmlFor="cpf" className={S.label}>
        CPF:
      </label>
      <input type="text" id="cpf" name="cpf" placeholder='xxx.xxx.xxx-xx' minLength='11' maxLength='11' required={true} className={S.input} value={infos.cpf}
        onChange={(e) => handleChange(e, "cpf")}/>
      <label htmlFor="income" className={S.label}>
        Renda Mensal:
      </label>
      <input type="number" id="income" name="income" step="R$ 0.0001" required={true} className={S.input} value={infos.renda}
        onChange={(e) => handleChange(e, "renda")}/>
        <div className={S.containerBtn}>
        <input type="submit" value="Cadastrar ✔" className={S.btn} onClick={nextPage}/>
        </div>
      
      </form>
    
  </div>

    </div>
    
  )
}

export default FormDocs
