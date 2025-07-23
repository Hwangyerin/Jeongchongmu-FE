import { useState } from 'react';
import './App.css';
import './styles/fonts.css';
import Onboarding from './pages/Onboarding';

useEffect(() => {
  const setHeight = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  setHeight(); // 최초 실행
  window.addEventListener('resize', setHeight); // 리사이즈 대응

  return () => window.removeEventListener('resize', setHeight);
}, []);

function App() {

  return (
    <div className='App'>
      <Onboarding/>
    </div>
  )
}

export default App
