import React, { useState } from 'react';
import './Form.css';
import emailjs from '@emailjs/browser';

export default function Form() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [agencia, setAgencia] = useState('');

  function sendEmail(e){
    e.preventDefault();

    
    const templateParams = {
      from_name: nome,
      message: mensagem,
      email: email,
      agencia: agencia
    }

    emailjs.send("service_9rsq7em", "template_qg7zasd", templateParams, "ahymwD3VgOF0jiRZW")
    .then((response) => {
      console.log("EMAIL ENVIADO", response.status, response.text)
      setNome('')
      setEmail('')
      setAgencia('')
      setMensagem('')
    }, (erro) => {
      console.log("ERRO", erro)
    })
  }

  return (
    <section className='form-area'>
      <h1>Vamos trabalhar juntos!</h1>
      <h2>Representante: Mamãe Priscila.</h2>

      <form className='form' onSubmit={sendEmail}>
        <label htmlFor="form-nome">Seu nome *</label>
        <input
          name='form-nome'
          className='input'
          type="text" 
          onChange={(e) => setNome(e.target.value)}
          value={nome}
          required
         />

        <label htmlFor="form-email">E-mail *</label>
        <input
          name='form-email'
          className='input'
          type="text" 
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
         />

        <label htmlFor="form-agencia">Agência ou empresa que representa (opcional)</label>
        <input
          name='form-agencia'
          className='input'
          type="text"
          onChange={(e) => setAgencia(e.target.value)}
          value={agencia} 
          required
         />

        <label htmlFor="form-msg">Mensagem *</label>
        <textarea
          name='form-msg'
          className='textarea'
          onChange={(e) => setMensagem(e.target.value)}
          value={mensagem}
          required  
         />

        <button className='form-button' type="submit">Enviar mensagem</button>

      </form>
    </section>
  )
}
