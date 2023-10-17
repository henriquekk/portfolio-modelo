import React from 'react';
import './Footer.css';
import footerIcon from '../../assets/images/headerlogo.png'

export default function Footer() {
  return (
    <footer>
      <section className='footer-area'>
        <img src={footerIcon} alt="" />
      </section>
    </footer>
  )
}
