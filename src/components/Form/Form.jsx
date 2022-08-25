import React from 'react'
import S from './Form.module.css'

const Form = () => {
  return (
    <div className={S.container}>
        <form className={S.form}>
        <label htmlFor="name" className={S.label}>
          Nome:
        </label>
        <input type="text" id="name" name="name" className={S.input}></input>
        <label htmlFor="lastname" className={S.label}>
          Sobrenome:
        </label>
        <input type="text" id="lastname" name="lastname" className={S.input}></input>
        <label htmlFor="email" className={S.label}>
          E-mail:
        </label>
        <input type="email" id="email" name="email" className={S.input}></input>
        <label htmlFor="phone" className={S.label}>
          Telefone:
        </label>
        <input type="text" id="phone" name="phone" className={S.input}></input>
        </form>
      
    </div>
  )
}

export default Form
