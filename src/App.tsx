import './App.css'
import { Hero } from './components/Hero/Hero';
import { Navbar } from './components/Navbar/Navbar';
import Fondo from './assets/Fondo.png';
import { CSSProperties } from 'react';
import { FingerPrint } from './components/FingerPrint/FingerPrint';

export function App() {

  const bgImagen: CSSProperties =  {
    backgroundImage: `url(${Fondo})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom',
    backgroundSize: 'cover',
    position: 'relative' as const,
    }


  return (
    <div style={bgImagen} className="overflow-hidden min-h-screen">
      <Navbar />
      <Hero />
      <FingerPrint />
    </div>
  );
}
