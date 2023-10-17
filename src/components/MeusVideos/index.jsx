import React from 'react';
import './MeusVideos.css';
import VideoCard from '../VideoCard';

export default function MeusVideos() {
  return (
    <section className='videos'>
      <h1>Confira meus videos</h1>
      <div className='videos-area'>
        <VideoCard />
        <VideoCard />
      </div>
    </section>
  )
}
