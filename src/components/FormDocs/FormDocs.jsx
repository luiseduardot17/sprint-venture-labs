import React from 'react'

const FormDocs = () => {
  return (
    <div className={S.container}>
        <form className={S.form}>
        <label htmlFor="birthday" className={S.label}>
          Data de Nascimento:
        </label>
        <input type="date" id="birthday" name="birthday" className={S.input}></input>
        <label htmlFor="cpf" className={S.label}>
          CPF:
        </label>
        <input type="text" id="cpf" name="cpf" className={S.input}></input>
        <label htmlFor="income" className={S.label}>
          Renda Mensal:
        </label>
        <input type="number" id="income" name="income" step="R$ 0.0001" className={S.input}></input>
        </form>
      
    </div>
  )
}

export default FormDocs
