import kakao_symbol from '../assets/svgs/kakao_symbol.svg';
import './SocialKakao.css';
import { useNavigate } from 'react-router-dom';


const SocialKakao = () => {
  const Rest_api_key = import.meta.env.VITE_KAKAO_REST_API_KEY;
  const redirect_uri = 'http://192.168.219.104:5173/oauth';

  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;
  const handleLogin = () => {
    window.location.href = kakaoURL
  }
  return(
    <>
      <button className='kakao-button' onClick={handleLogin}>
          <img src={kakao_symbol} alt="카카오 아이콘" />
          <span>카카오 로그인</span>
      </button>
    </>
  )
  }


export default SocialKakao;