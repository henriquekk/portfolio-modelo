import './App.css';
import Footer from './components/Footer';
import Form from './components/Form';
import Habilidades from './components/Habilidades';
import Header from './components/Header';
import Hero from './components/Hero';
import MeusVideos from './components/MeusVideos';
import Sobre from './components/Sobre';
import Trabalhos from './components/Trabalhos';

function App() {
  return (
    <>
      <Hero />
      <Header />
      <Sobre />
      <Trabalhos />
      <Habilidades />
      <MeusVideos />
      <Form />
      <Footer/>
    </>
  );
}

export default App;
