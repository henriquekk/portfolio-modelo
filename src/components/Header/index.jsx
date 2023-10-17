import React from 'react';
import './Header.css';
import headerLogo from '../../assets/images/headerlogo.png'
import { Link } from 'react-scroll';

export default function Header() {
  return (
    <header>
      <section className="header-content">
        <nav className='navbar'>
          <ul className='navbar-list'> 
            <li>
              <Link to='sobre-mim' spy={true} smooth={true} offset={-300} duration={500}>Sobre mim</Link>
            </li>
            <li>
              <Link to='meus-trabalhos' spy={true} smooth={true} offset={-300} duration={500}>Meus trabalhos</Link>
            </li>
            <li>
              <Link to='hero-content' spy={true} smooth={true} offset={-300} duration={500}><img src={headerLogo} alt="" /></Link>
            </li>
            <li>
              <Link to='minhas-habilidades' spy={true} smooth={true} offset={-300} duration={500}>Minhas habilidades</Link>
            </li>
            <li>
              <Link to='form' spy={true} smooth={true} offset={-300} duration={500}>Contato</Link>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  )
}
