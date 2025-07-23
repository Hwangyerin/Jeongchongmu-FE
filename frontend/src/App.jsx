import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import './styles/fonts.css';
import {Login, Home, OauthRedirect, Income, Expense} from './pages';

function App() {
  useEffect(() => {
    const setVH = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setVH(); // 초기 실행
    window.addEventListener('resize', setVH); // 리사이즈 대응

    return () => window.removeEventListener('resize', setVH); // 정리
  }, []);

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/home' element={<Home />} /> */}
        <Route path="/oauth" element={<OauthRedirect />} />
        <Route path="/Income" element={<Income />}/>
        <Route path="/Expense" element={<Expense/>}/>
      </Routes>
    </div>
  );
}

export default App;
