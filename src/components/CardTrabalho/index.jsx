import React from 'react';
import './CardTrabalho.css';
import cardImage from '../../assets/images/card-image.png';

export default function CardTrabalho() {
  return (
    <div className='card-trabalho'>
      <img src={cardImage} alt="" />
      <h2>Aventuras de Verão</h2>
      <h3>Série (JoiaTV)</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
  )
}
