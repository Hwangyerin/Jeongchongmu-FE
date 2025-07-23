import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import './styles/fonts.css';
import Login from './pages/Login';
import Home from './pages/Home';
import OAuthRedirect from './pages/OauthRedirect';

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
        <Route path="/oauth" element={<OAuthRedirect />} />
      </Routes>
    </div>
  );
}

export default App;
