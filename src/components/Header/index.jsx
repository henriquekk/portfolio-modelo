import React, { useEffect } from 'react';
import './Header.css';
import headerLogo from '../../assets/images/headerlogo.png'
import { Link } from 'react-scroll';

export default function Header() {

  useEffect(() => {
    // Get the offset position of the navbar
    const header = document.getElementById('myHeader');
    const sticky = header.offsetTop;

    // When the component mounts, set up the event listener
    window.addEventListener('scroll', () => handleScroll(sticky));

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', () => handleScroll(sticky));
    };
  }, []);

  function handleScroll(sticky) {
    const header = document.getElementById('myHeader');

    if (window.scrollY > sticky) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  }

  return (
    <header id='myHeader'>
      <section className="header-content">
        <nav className='navbar'>
          <ul className='navbar-list'> 
            <li>
              <Link to='sobre-mim' spy={true} smooth={true} offset={-300} duration={500}>Sobre mim</Link>
            </li>
            <li>
              <Link to='meus-trabalhos' spy={true} smooth={true} offset={-300} duration={500}>Meus trabalhos</Link>
            </li>

            <Link to='hero-content' spy={true} smooth={true} offset={-300} duration={500}><img src={headerLogo} alt="" /></Link>

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
