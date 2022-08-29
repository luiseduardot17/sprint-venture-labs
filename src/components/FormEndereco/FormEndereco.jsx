import React from 'react'
import S from './FormEndereco.module.css'

const FormEndereco = () => {
  return (
    <div className={S.container}>
        <form className={S.form}>
        <label htmlFor="cep" className={S.label}>
          CEP:
        </label>
        <input type="text" id="cep" name="cep" className={S.input}></input>
        <label htmlFor="address1" className={S.label}>
          Endereço 1:
        </label>
        <input type="text" id="address1" name="address1" className={S.input}></input>
        <label htmlFor="address2" className={S.label}>
          Endereço 2:
        </label>
        <input type="text" id="address2" name="address2" className={S.input}></input>
        </form>
      
    </div>
  )
}

export default FormEndereco
