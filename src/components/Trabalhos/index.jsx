import React from 'react';
import './Trabalhos.css';
import CardTrabalho from '../CardTrabalho';


export default function Trabalhos() {
  return (
    <section className='meus-trabalhos'>
      <div className='trabalhos-area'>
        <h1>Meus trabalhos</h1>
        <div className='cards-area'>
          <CardTrabalho />
          <CardTrabalho />
          <CardTrabalho />
          <CardTrabalho />
        </div>
      </div>
    </section>
  )
}
