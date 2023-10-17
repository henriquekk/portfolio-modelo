import React from 'react';
import './Hero.css';
import sofiaLogo from '../../assets/images/sofia.png';
import sofiaFotoHeader from '../../assets/images/sofiafoto.png';

export default function Hero() {
  return (
      <section className='hero-content'>
        <div className='logo-sofia'>
          <h1>Oi, eu sou a</h1>
          <img src={sofiaLogo} alt="Sofia Fonseca" />
          <p>Atriz, modelo e cantora mirim</p>
        </div>
          <img className="foto-sofia" src={sofiaFotoHeader} alt="Sofia Fonseca" />
      </section>
  )
}
