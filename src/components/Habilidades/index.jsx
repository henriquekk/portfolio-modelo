import React from 'react';
import './Habilidades.css';
import sofiaHabilidades from '../../assets/images/sofiahabilidades.png'

export default function Habilidades() {
  return (
    <section className='minhas-habilidades'>
      <div className='habilidades-area'>
        <h1>Minhas habilidades</h1>
        <div className='habilidades-content'>
          <ul>
            <li>Sabe ler</li>
            <li>Sabe escrever</li>
            <li>Ama tirar fotos</li>
            <li>Fala inglês</li>
            <li>Anda de bicicleta</li>
            <li>Sabe nadar</li>
            <li>Faz aula de canto</li>
            <li>Faz aula de teatro</li>
          </ul>
          <img src={sofiaHabilidades} alt="" />
        </div>
      </div>
    </section>
  )
}
