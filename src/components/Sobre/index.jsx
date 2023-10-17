import React from 'react';
import './Sobre.css';
import sofiaSobre from '../../assets/images/sofiasobre.png';
import sofiaMedida from '../../assets/images/sofiamedida.png';
import regua from '../../assets/images/regua.png';
import { Link } from 'react-scroll';

export default function Sobre() {
  return (
    <>
    
      <section className='sobre-mim'>
        <div className='sobre-left'>
          <img src={sofiaSobre} alt="" />
        </div>
        <div className='sobre-right'>
          <div className='sobre-content'>
          <h1>Sobre a Sofia</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          
        </div>
        <div className="sobre-buttons">
            <button className="sobre-button-1">
              <Link to='meus-trabalhos' spy={true} smooth={true} offset={-300} duration={500}>Confira meus trabalhos</Link>
            </button>
            <button className="sobre-button-2">
              <Link to='form' spy={true} smooth={true} offset={-300} duration={500}>Vamos trabalhar juntos!</Link>
            </button>
          </div>
        </div>  
      </section>
      <section className='medidas'>
        <div className='medidas-area'>
          <div className="lista-medidas">
            <h1>Minhas medidas</h1>
            <ul>
              <li><strong>Peso:</strong> 37,5 kg</li>
              <li><strong>Idade:</strong> 12 anos</li>
              <li><strong>Manequim:</strong> 12</li>
              <li><strong>Calçado:</strong> 35</li>
            </ul>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div className="medida-foto">
            <div className='regua-medida'>
              <h5>Altura:</h5>
              <p>1,45m</p>
              <img src={regua} alt="" />
            </div>
            <div className='sofia-medida' >
              <img src={sofiaMedida} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
