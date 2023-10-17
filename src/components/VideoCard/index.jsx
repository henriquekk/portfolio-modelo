import React from 'react';
import './VideoCard.css';
import thumbVideo from '../../assets/images/thumbvideo1.png'
import iconCanal from '../../assets/images/iconcanal.png'

export default function VideoCard() {
  return (
    <section className='video-card-area'>
      <div className='video-card'>
        <div className='video-thumb'>
          <img src={thumbVideo} alt="" />
        </div>
        <div className='video-titulo'>
          <img src={iconCanal} alt="" />
          <p>VLOG: UM DIA NO SHOPPING COM SOFIA</p>
        </div>
      </div>
    </section>
  )
}
