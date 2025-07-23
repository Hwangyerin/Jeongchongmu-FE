import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const OAuthRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const currentURL = window.location.href;
    const url = new URL(currentURL);
    const code = url.searchParams.get('code');
  
    if (code) {
      axios
        .get(`http://localhost:8080/auth/kakao/callback?code=${code}`) //backend domain
        .then((res) => {
          alert(`안녕하세요, ${res.data.kakao_account.profile.nickname}님!`);
          navigate('/home');
        })
        .catch((err) => {
          console.error('❌ 카카오 로그인 실패', err);
        });
    } else {
      console.warn("❌ code가 없어서 if문을 건너뜀");
    }
  }, []);
  

  return (<div>로그인 처리 중입니다...</div>);
};

export default OAuthRedirect;
